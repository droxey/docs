# How to use Git in a secure way

04 Sep 2018

We live in a world where it is hard not to know Git, the most popular [Distributed Version Control System (DVCS)](https://en.wikipedia.org/wiki/Distributed_version_control). Free and open source, it has been initially created by Linus Torvalds to be used for the development of the Linux Kernel. These days, Git is completely omnipresent in the IT industry. It is the key element of platforms such as GitHub or GitLab and used as a package management system by the Go language for examples.

------

Throughout this article, different methods will be described to avoid common pitfalls in terms of security which might occur when using Git.

## Do not commit sensitive information

Committing sensitive information can lead to critical situations and happens more often than you might think. In particular, with the emergence of cloud providers, continuous integration online services and the [Infrastructure as Code (IaC)](https://en.wikipedia.org/wiki/Infrastructure_as_Code) paradigm, our source codes now contain access tokens, IP addresses, etc. Even a `.DS_Store` for instance (a hidden file present in every folder on an OS X system) can leak the name of the files and folders present on a web server and a quick search on GitHub returns more than 800 000 results (see [“Scanning the Alexa Top 1M for .DS_Store files”](https://en.internetwache.org/scanning-the-alexa-top-1m-for-ds-store-files-12-03-2018/) for further information).

The first thing to do to avoid such situations is to add a [`.gitignore`](https://git-scm.com/docs/gitignore) file into your code repository containing the files that Git should intentionally ignore and so keep untracked. Private keys are an obvious example of what should be ignored by Git (`*.pem`, `*.key`, …) but other sensitive files are harder to anticipate. Text editors such as vim or gedit create backup files (respectively `.<filename>.swp` and `.<filename>~`) of your work and can be committed by accident. If the content of a Git repository containing a PHP web application is pushed into production, a `db.php` file with the database credentials would be probably accessible via its backup file through the web server without triggering any error.

Even if we suppose that your `.gitignore` contains all the potential sensitive files of your project, it won’t stop to inadvertency commit an access token in a file legitimately tracked by Git. Solutions like [git-seekret](https://github.com/apuigsech/git-seekret) can be used to address this issue. This tool leverages [Git hooks](https://git-scm.com/docs/githooks) to inspect the content of your staged files or commits and checks if sensitive information have been added based on customised rules.

If, despite these preventive measures, sensitive information can be found in your Git repository history, [`git-filter-branch`](https://git-scm.com/docs/git-filter-branch) is here to help you fix it. This Git feature allows you to rewrite the Git revision history of your project using filters. Other third-party solutions also exist such as [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) and are quite easy to use:

```
bfg --delete-files id_{dsa,rsa} my-repo.git
```

The above line (taken from the BFG documentation) deletes all files named `id_rsa` or `id_dsa` from the Git history of `my-repo.git`.

## Protect the access to your Git repositories

Another critical security issue you should guard against is unauthorised access to your Git repositories. Git by itself only takes care of keeping track of the changes occurring inside a repository. When you want to share your work, you need to expose this repository, and you should do it in a secure manner, otherwise you can get into trouble.

Git stores internal files inside a hidden `.git` folder itself contained inside your Git repository. These internal files contain the whole history of your committed changes. In other words, the `.git` folder is your Git repository and consequently should never be exposed to people not authorised to clone it. Using Git to version websites is a common practice and restricting the access to the `.git`folder from the production servers [is not always done correctly](https://en.internetwache.org/dont-publicly-expose-git-or-how-we-downloaded-your-websites-sourcecode-an-analysis-of-alexas-1m-28-07-2015/).

From a network perspective, your best choice is to rely on HTTPS or SSH to encrypt your traffic and authenticate the remote server. When using SSH (recommended), your private key should be protected by a passphrase and never leave your computer. If you have several development workstations, create one pair of SSH keys for each of them. This way, it would be easy to revoke access to your Git repositories for a specific device that you believe may have been compromised. The same is true when you give access to your Git repositories to third-party applications. Use access tokens that can be easily revokable instead of your account credentials and make sure to keep them secret. The [Homebrew](https://brew.sh/)project recently disclosed a [security incident](https://brew.sh/2018/08/05/security-incident-disclosure/) where a GitHub personal access token has leaked through their Jenkins instance’s logs.

When using development platforms like GitHub or GitLab, the [Two-Factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) (2FA) logging method should be enabled for your account. It means that each time you want to connect to your online account, you will be prompted to enter a One Time Password (OTP) which constantly changes after a short period of time. Opt for the use of a mobile application to generate the OTP rather than text messages. You may consider it worth investing in the security for the security of your data in which case a hardware token is the best option (for example, a [YubiKey](https://www.yubico.com/)).

## Sign your work

Git enables you to cryptographically sign your work using GPG keys. Signing your work is important because anyone can choose the name and the email address of the author displayed in the Git commits. Both Git commits and tags can be signed and even the [push requests](https://git-scm.com/docs/git-push#git-push---signedtruefalseif-asked) since version 2.2.0. However, in practice, it is pointless to sign each commit since many operations would invalidate those signatures (see [Linus Torvalds’ arguments on this point](http://git.661346.n2.nabble.com/GPG-signing-for-git-commit-td2582986.html)). Only Git tags need to be signed.

As with any asymmetric cryptosystem, security measures should be taken:

- Don’t use short-length keys. Today, 4096-bit keys are recommended.
- When creating a new key pair, don’t forget to generate a revocation key and store it in a safe place.
- Protect your private key with a passphrase.
- Avoid using an infinite validity period for your keys. It would become a time bomb if one day you loose a key, especially if you can’t revoke it for any reason.

Even if signing your work is an excellent way to add an extra layer of trust, the ultimate proof of trust is still to review the source code instead of blindly accept any contribution.

## Keep Git and related tools up to date

As is true of software in general, Git is not perfect and can be impacted by vulnerabilities. The recent [CVE-2018-11235](https://nvd.nist.gov/vuln/detail/CVE-2018-11235) is a good example of this, allowing an attacker to craft a malicious Git repository leading to a remote code execution when cloned by someone. Any Git-related tool can be impacted by similar issues and they all need to be kept up to date. I recommend you to subscribe to security advisory feeds and to read them carefully. Here is an example of such a security bulletin made by [GitLab](https://about.gitlab.com/2018/08/28/security-release-gitlab-11-dot-2-dot-2-released/).
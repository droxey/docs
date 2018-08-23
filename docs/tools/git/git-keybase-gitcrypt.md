# Git - Keybase + Git Crypt

```bash
$ export KEYBASE_IO_FRIEND="another user's keybase username.";
$ keybase track KEYBASE_IO_FRIEND
$ keybase pgp pull KEYBASE_IO_FRIEND
$ gpg --edit-key KEYBASE_IO_FRIEND
```

At the `gpg` prompt, invoke `lsign` and `save:

```gpg
gpg> lsign
```

```gpg
gpg> save
```

```bash
$ git-crypt add-gpg-user KEYBASE_IO_FRIEND
```

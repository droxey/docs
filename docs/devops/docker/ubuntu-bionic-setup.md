# Ubuntu Bionic and Docker Installation

## Install from Ubuntu Repository

```bash
$ sudo apt install docker.io
$ sudo systemctl start docker
$ sudo systemctl enable docker
$ docker --version
Docker version 17.12.1-ce, build 7390fc6

$ sudo systemctl stop docker
$ nano /etc/docker/daemon.json

{
  "storage-driver": "overlay2"
}

$ sudo systemctl start docker
$ docker info

$ docker run hello-world
$ docker run -it ubuntu bash
```

## Install Tools

### Certbot

```bash
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt-get install certbot -y

```

#### Create SSL Cert

```bash
root@lab:~  sudo certbot certonly --standalone -d lab.outputs.io
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): dani@outputs.io

-------------------------------------------------------------------------------
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v01.api.letsencrypt.org/directory
-------------------------------------------------------------------------------
(A)gree/(C)ancel: A

-------------------------------------------------------------------------------
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about EFF and
our work to encrypt the web, protect its users and defend digital rights.
-------------------------------------------------------------------------------
(Y)es/(N)o: Y
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for lab.outputs.io
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/lab.outputs.io/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/lab.outputs.io/privkey.pem
   Your cert will expire on 2018-08-02. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

#### Automate Renewal

```bash
$ sudo certbot renew --dry-run
Saving debug log to /var/log/letsencrypt/letsencrypt.log

-------------------------------------------------------------------------------
Processing /etc/letsencrypt/renewal/lab.outputs.io.conf
-------------------------------------------------------------------------------
Cert not due for renewal, but simulating renewal for dry run
Plugins selected: Authenticator standalone, Installer None
Renewing an existing certificate
Performing the following challenges:
http-01 challenge for lab.outputs.io
Waiting for verification...
Cleaning up challenges

-------------------------------------------------------------------------------
new certificate deployed without reload, fullchain is
/etc/letsencrypt/live/lab.outputs.io/fullchain.pem
-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
** DRY RUN: simulating 'certbot renew' close to cert expiry
**          (The test certificates below have not been saved.)

Congratulations, all renewals succeeded. The following certs have been renewed:
  /etc/letsencrypt/live/lab.outputs.io/fullchain.pem (success)
** DRY RUN: simulating 'certbot renew' close to cert expiry
**          (The test certificates above have not been saved.)
-------------------------------------------------------------------------------

IMPORTANT NOTES:
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
```

### Adjust Firewall (iptables)

```bash
$ nano /etc/iptables.conf

*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
:FILTERS - [0:0]
:DOCKER-USER - [0:0]

-F INPUT
-F DOCKER-USER
-F FILTERS

-A INPUT -i lo -j ACCEPT
-A INPUT -p icmp --icmp-type any -j ACCEPT
-A INPUT -j FILTERS

-A DOCKER-USER -i ens33 -j FILTERS

-A FILTERS -m state --state ESTABLISHED,RELATED -j ACCEPT
-A FILTERS -m state --state NEW -s 1.2.3.4/32
-A FILTERS -m state --state NEW -m tcp -p tcp --dport 9922 -j ACCEPT
-A FILTERS -m state --state NEW -m tcp -p tcp --dport 23 -j ACCEPT
-A FILTERS -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
-A FILTERS -m state --state NEW -m tcp -p tcp --dport 443 -j ACCEPT
-A FILTERS -m state --state NEW -m tcp -p tcp --dport 9000 -j ACCEPT
-A FILTERS -j REJECT --reject-with icmp-host-prohibited

COMMIT
```

```bash
$ iptables-restore -n /etc/iptables.conf
$ nano /etc/systemd/system/iptables.service

[Unit]
Description=Restore iptables firewall rules
Before=network-pre.target

[Service]
Type=oneshot
ExecStart=/sbin/iptables-restore -n /etc/iptables.conf

[Install]
WantedBy=multi-user.target
```

```bash
$ sudo systemctl enable --now iptables
$ sudo systemctl restart iptables
```

## Install Portainer

```bash
$ docker volume create portainer_data
$ docker run -d -p 9000:9000 portainer/portainer -n portainer -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data --ssl --sslcert /etc/letsencrypt/live/lab.outputs.io/fullchain.pem --sslkey /etc/letsencrypt/live/lab.outputs.io/privkey.pem
```


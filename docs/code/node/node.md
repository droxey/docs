# Node.js Tips and Tricks

## Completely Uninstall (macOS)

```bash
$ brew uninstall node; brew prune; sudo rm /usr/local/bin/npm; sudo rm /usr/local/share/man/man1/node.1; sudo rm /usr/local/lib/dtrace/node.d; sudo rm -rf ~/.npm; sudo rm -rf ~/.node-gyp; sudo rm /opt/local/bin/node; sudo rm -rf /opt/local/lib/node_modules; lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom | while read f; do  sudo rm /usr/local/${f}; done; sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*;
```

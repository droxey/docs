# MacOS Setup

## Finder

### Display File Extensions

```bash
$  defaults write NSGlobalDomain AppleShowAllExtensions -bool true; killall Finder
```

### Show Hidden Files and Folders

```bash
$ defaults write com.apple.finder AppleShowAllFiles TRUE; killall Finder
```


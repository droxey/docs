# MacOS Setup

## Dock

### Add Spacer - Application Side 

```bash
$ defaults write com.apple.dock persistent-apps -array-add '{tile-data={}; tile-type="spacer-tile";}'; killall Dock
```

### Add Spacer - Documents Side

```bash
$ defaults write com.apple.dock persistent-others -array-add '{tile-data={}; tile-type="spacer-tile";}'; killall Dock
```

## Finder

### Display File Extensions

```bash
$  defaults write NSGlobalDomain AppleShowAllExtensions -bool true; killall Finder
```

### Show Hidden Files and Folders

```bash
$ defaults write com.apple.finder AppleShowAllFiles TRUE; killall Finder
```






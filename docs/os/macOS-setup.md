# MacOS Setup

## Apps

* 1Password
* Alfred
* Bartender
* Dash
* iTerm2
* Slack
* VSCode
* XCode

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

### Hide Desktop Icons

```bash
$ defaults write com.apple.finder CreateDesktop false; killall Finder
```

### Display File Extensions

```bash
$  defaults write NSGlobalDomain AppleShowAllExtensions -bool true; killall Finder
```

### Show Hidden Files and Folders

```bash
$ defaults write com.apple.finder AppleShowAllFiles TRUE; killall Finder
```

## Terminal

### Install XCode Command Line Tools

```bash
$ xcode-select --install
```

### Install Homebrew

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew analytics off
```

### Update Binaries

```bash
$ brew install stow git zsh
```

### Install Patched Powerline Fonts
```bash
$ brew tap caskroom/fonts
$ brew cask install font-hack-nerd-font
```

#### Change User Shell to `zsh`

1. System Preferences -> Users & Groups.
1. Unlock the preferences.
1. Select your user.
1. Select advanced options.
1. Set your login shell to `/usr/local/bin/zsh`.

#### Install `zgen`:

```bash
$ git clone https://github.com/tarjoilija/zgen.git "${HOME}/.zgen"
```

#### Setup `zgen`:

Follow README in https://github.com/tarjoilija/zgen.

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
```

### Update `git`

```bash
$ brew install git
```

### Change Shell to `zsh`

#### Install Latest: `zsh`

```bash
$ brew install zsh
```

#### Install Latest: `oh-my-zsh`

```bash
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

#### Plugin: `zsh-syntax-highlighting`

```bash
$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "$ZSH_CUSTOM/plugins/zsh-syntax-highlighting"
```

#### Plugin: `zsh-autosuggestions`

```bash
$ git clone https://github.com/zsh-users/zsh-autosuggestions "$ZSH_CUSTOM/plugins/zsh-autosuggestions"
```

#### Theme: `spaceship`

```bash
$ cd "$ZSH_CUSTOM"
$ git clone https://github.com/powerline/fonts.git --depth=1
$ ./install.sh
$ git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
$ ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
```

#### Update `~/.zshrc`

##### Set Plugins

Make the following changes in `~/.zshrc`, save the file, and restart your terminal application.

```bash
plugins = (
  zsh-syntax-highlighting
  zsh-autosuggestions
  wd
)
```

##### Set Theme

```bash
. $ZSH_CUSTOM/themes/spaceship-prompt/powerline/bindings/zsh/powerline.zsh
ZSH_THEME="spaceship"
```





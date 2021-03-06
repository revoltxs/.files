setopt INTERACTIVE_COMMENTS
setopt NO_FLOW_CONTROL
setopt APPEND_HISTORY
setopt EXTENDED_HISTORY
setopt HIST_FIND_NO_DUPS
setopt HIST_IGNORE_DUPS
setopt INC_APPEND_HISTORY_TIME
setopt SHARE_HISTORY

#bindkey -v #&& export KEYTIMEOUT=1
bindkey "^[[A" history-beginning-search-backward
bindkey "^[[B" history-beginning-search-forward

#source ${HOME}/.exports
source ${HOME}/.functions
source ${HOME}/.zfunctions
source ${HOME}/.aliases
#source ${HOME}/.zaliases

export KEYTIMEOUT=1
export CLICOLORS=1
export HISTSIZE=32767
export HISTFILESIZE=${HISTSIZE}
export HISTFILE=${HOME}/.zsh_history
export PROMPT='%S%n@%m:%s%U/%u'$'\n''%S%D{%Y.%m.%d}@%*%s %S%#%s ' #PROMPT='%S%n@%m%s %S%D{%Y.%m.%d}@%*%s %S%#%s ' #PROMPT='%n@%m%# ' && RPROMPT='%D{%Y.%m.%d}@%*'
export LSCOLORS=egfxcxdxbxegedabagacad # 'Finder Color Scheme' for LS; default value: exfxcxdxbxegedabagacad

#stty stop '' -ixoff
#stty start undef
#stty stop undef
#setopt NO_FLOW_CONTROL

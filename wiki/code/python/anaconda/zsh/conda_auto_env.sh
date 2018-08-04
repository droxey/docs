function conda_auto_env() {
  if [ -e ".condaenv" ]; then
    # echo ".condaenv file found"
    ENV=$(cat .condaenv)
    if [[ $CONDA_DEFAULT_ENV != $ENV ]]; then
      # Check if the environment exists
      source activate $ENV
    fi
  fi
}

export PROMPT_COMMAND=conda_auto_env

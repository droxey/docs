# Jupyter Notebook Tips and Tricks

## Generate Config File

```bash
jupyter notebook --generate-config
```

## Edit Config File

```bash
code ~/.jupyter/jupyter_notebook_config.py
```

## Change Default Browser

In `~/.jupyter/jupyter_notebook_config.py`, change `c.NotebookApp.browser` to the executable of your choice.

For example, to open Jupyter Notebook in Chrome, on macOS, add the following line: `c.NotebookApp.browser = u'open -a /Applications/Google\ Chrome.app %s'`

## Enable PDF Generation

```bash
source activate PythonData
conda install -c anaconda-nb-extensions nbbrowserpdf
```

## View Magics

```python
%lsmagic
```

## Additional Resources

* [Jupyter Notebook: The Definitive Guide](https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook)

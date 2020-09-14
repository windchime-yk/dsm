# Deno Scripts Manager
【[日本語](./README_JP.md) / English】

An experimental script management tool made by Deno.  
It supports only script execution.  
[Denon](https://github.com/denosaurs/denon) is recommended for more multifunctional scripts.

## Install
``` bash
$ deno install --name dsm --allow-run --allow-read --allow-write https://github.com/windchime-yk/deno-scripts-manager/raw/master/cli/mod.ts
```

If you get `dsm: command not found`, add the following text to your `.bash_profile`.
```bash
export PATH="/Users/username/.deno/bin:$PATH"
```

## Usage
``` bash
$ dsm init
$ dsm version:deno # sample script
```

## Dependency
- [exec](https://deno.land/x/exec)

## Test
``` bash
$ git clone git@github.com:windchime-yk/deno-scripts-manager.git
$ cd path/to/deno-scripts-manager
$ deno run --allow-run --allow-read --allow-write cli/mod.ts init
$ deno run --allow-run --allow-read --allow-write cli/mod.ts version:deno
```
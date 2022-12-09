# Jobs

:::note Reference

`man bash`

:::

## Suspend current process

<kbd>Ctrl</kbd>+<kbd>Z</kbd>

## Terminate current process

<kbd>Ctrl</kbd>+<kbd>C</kbd>

## Run command in background

Run `<command>` in background

```bash
<command> &
```

## List job

```bash
jobs
```

## Job ID to PID

default is last job

```bash
%[<job ID>]
```

## Resume process in background 

```bash
# bash only
%[<job ID>] &
```

```bash
bg [%<job ID>]
```

## Resume job in foreground

default is last job

```bash
# bash only
%[<job ID>]
```

```bash
fg [%<job ID>]
```

## Kill job

```bash
kill %<job ID>
```

## `disown`

don't terminate process when terminal exit

default is all jobs

```bash
disown [%<job spec>]
```

## `nohup`

no hangup

don't terminate `<command>` when terminal exit

```bash
nohup <command>
```

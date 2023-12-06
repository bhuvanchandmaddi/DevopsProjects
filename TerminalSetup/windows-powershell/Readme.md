## Install the latest windows powershell
[Installation steps](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3#winget)

* Winget is recommended, however we can do it using zip file or msi 

* Extract and copy them into the C:\windows\fonts folder


## Get the Font`s

* When we use ohmyposh, then the default fonts that ships with windows machines doesn`t work

* Get the funny fonts from [nerdfonts](https://www.nerdfonts.com/)

* I like  CaskaydiaCoveNerdFont

* Update the font of powershell in terminal settings to CaskaydiaCoveNerdFont

## Install ohmy posh

[Installation](https://ohmyposh.dev/docs/installation/windows#installation)

## configure ohmyposh

* Find the windows powershell profile file
```
$echo $PROFILE
```
**Note:** Create it if you don`t find file or intermediate folders

* Add below line to this file, so that when you launch powershell it will automatically loads ohmyposh
```
oh-my-posh init pwsh --config C:\Projects\TerminalSetup\windows-powershell\oh-my-posh-config.json | Invoke-Expression
```

* Also create the oh-my-posh-config file and specify the location

* Now open the terminal, you could see the new prompt

## Micosoft Powershell profile

* Copy the contents of Microsoft.PowerShell_profile.ps1 file to your micosoft profile

**Note:** Import-Module -Name Terminal-Icons is intentially commented, because it requires admin access. Use this to get cool icons.

## Transparent background

* Add below 2 lines to the settings.json file of windows terminal default section. So that we will get it for all the shells. You can even add this to individual profiles/shells

```
"useAcrylic": true, 
"opacity": 50
```

**Exact place example:**

```
    "defaultProfile": "uid-of-profile",
    "profiles": 
    {
      "defaults": {    
         "useAcrylic": true, 
        "opacity": 50
                  },
       "list": 
        [ 
            { profile1},
             { profile2}
        ]
    }
           
```

## Additional options of settings.json file

* Copy the contents on terminal when selected 
```
"copyOnSelect": true
```



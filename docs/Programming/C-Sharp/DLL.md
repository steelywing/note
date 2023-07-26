# DLL

## Reference .NET DLL

Add [Steamworks.NET](https://steamworks.github.io/installation/) reference

Edit `.csproj`

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <ItemGroup>
    <Reference Include="Steamworks.NET">
      <HintPath>Steamworks.NET.dll</HintPath>
      <SpecificVersion>False</SpecificVersion> 
      <!-- Copy DLL to Output folder -->
      <Private>True</Private>
    </Reference>
  </ItemGroup>
</Project>
```

- Copy `Steamworks.NET.dll` file to `root` folder
- Run `dotnet restore [<project.csproj>]`
- Run `dotnet run`

## Call native unmanaged DLL

```cs
using System;
using System.Runtime.InteropServices;

[DllImport("user32.dll", CharSet = CharSet.Unicode)]
static extern int MessageBox(IntPtr hWnd, String text, String caption, uint type);

MessageBox(new IntPtr(0), "Hello World!", "Hello Dialog", 0);
```

Using `ref`

```cs
using System;
using System.Runtime.InteropServices;
using System.Runtime.CompilerServices;

[DllImport("user32.dll", CharSet = CharSet.Unicode)]
static extern int MessageBox(ref int hWnd, String text, String caption, uint type);

MessageBox(ref Unsafe.NullRef<int>(), "Hello World!", "Hello Dialog", 0);
```

Copy DLL to output folder

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <Target Name="CopyFiles" AfterTargets="AfterBuild">
    <ItemGroup>
      <DllFiles Include="*.dll" />
    </ItemGroup>
    <Copy SourceFiles="@(DllFiles)" DestinationFolder="$(OutDir)" />
  </Target>
</Project>
```

$zip_name="mindustry_better_sounds.zip"

Compress-Archive -Force -LiteralPath .\ -DestinationPath $zip_name

Copy-Item  -Force .\$zip_name $Env:APPDATA\Mindustry\mods

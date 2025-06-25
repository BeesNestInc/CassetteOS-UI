## v0.4.18-cs1.2.1 - 2025-06-25
- API側で`client`の名前が衝突していたため、WiFiのセットアップモードに使用するモードを`client`から`wifi-client`に変更。その影響でUI側のAPI呼び出し側を修正
- ログイン時のバージョンチェックを無効にする。APモードで起動した場合にバージョンチェックでアクセスするインターネット上のサーバーに接続できなくなりログインできない状態が発生するため
## v0.4.18-cs1.2.0 - 2025-06-20
CassetteOS専用に調整
- 表示テキストをCasaOSからCassetteOSに変更
- GithubActionの整理
- IcheWhale API依存部分のパッケージバージョンを固定
- READMEなどのドキュメントを整理

## v0.4.18-cs1.1.0 - 2025-05-07
### Added
- Added Wi-Fi setup UI, including support for switching between Access Point (AP) mode and Wi-Fi client mode.

## v0.4.18-cs1.0 - 2025-04-08
- Based on CasaOS v0.4.4
- Changed branding (logo, background)
- Removed unused features (e.g. RSS switch)
- Removed access links to the root file system from the file browser UI
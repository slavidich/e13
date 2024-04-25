запуск dev: npm run dev

запуск prod: npm run prod
Отличия prod от dev:
- "style-loader" заменен на MiniCssExtractPlugin.loader
- devserver hot выключен 

запуск json-server: npx json-server db.json --watch 

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, 
  },
  parser: '@typescript-eslint/parser', // Использование парсера для TypeScript
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint'], // Подключение плагинов
  rules: {
    // ESLint recommended rules
    'no-console': 'warn', // Предупреждение при использовании console.log()
    'no-unused-vars': 'error', // Ошибка при обнаружении неиспользуемых переменных в JavaScript
    'no-undef': 'error', // Ошибка при использовании неопределенных переменных в JavaScript
    'no-empty': 'warn', // Предупреждение при обнаружении пустых блоков
    'no-constant-condition': 'warn', // Предупреждение при использовании констант в условиях
    'no-debugger': 'warn', // Предупреждение при использовании debugger

    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': 'error', // Ошибка при обнаружении неиспользуемых переменных в TypeScript
    '@typescript-eslint/no-explicit-any': 'error', // Ошибка при использовании any в TypeScript

    // React-specific rules
    'react/prop-types': 'off', // Отключение проверки PropTypes, так как используется TypeScript
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error', // Проверка соблюдения правил использования React Hooks
    'react-hooks/exhaustive-deps': 'warn', // Предупреждение о неправильном использовании зависимостей в useEffect

    // Prettier integration
    'prettier/prettier': 'error', // Ошибка, если код не соответствует правилам Prettier

    // React Refresh rule
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ], // Предупреждение, если экспортируется что-то, кроме React-компонентов
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
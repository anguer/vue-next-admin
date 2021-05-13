const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  root: true,
  // parserOptions: {
  //   parser: 'vue-eslint-parser',
  //   sourceType: 'module'
  // },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // plugins: ['vue'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  rules: {

    // 'no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^_',
    //     varsIgnorePattern: '^_',
    //   },
    // ],
    // 'space-before-function-paren': 'off',
    //
    // 'vue/attributes-order': 'off',
    // 'vue/one-component-per-file': 'off',
    // 'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    // 'vue/multiline-html-element-content-newline': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
    // 'vue/attribute-hyphenation': 'off',
    // 'vue/require-default-prop': 'off',
    // 'vue/html-self-closing': [
    //   'error',
    //   {
    //     html: {
    //       void: 'always',
    //       normal: 'never',
    //       component: 'always',
    //     },
    //     svg: 'always',
    //     math: 'always',
    //   },
    // ],
    // 'vue/attributes-order': [0],
    // 'vue/html-self-closing': [0],
    // 'vue/max-attributes-per-line': [0, {
    //   'singleline': 10,
    //   'multiline': {
    //     'max': 1,
    //     'allowFirstLine': false
    //   }
    // }],
    'vue/name-property-casing': ['error', 'PascalCase'],

    // [[[ Possible Errors
    // ------------------------------- 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关 -------------------------------
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'for-direction': 2,
    // 强制在 getter 属性中出现一个 return 语句
    'getter-return': 2,
    // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'require-atomic-updates': 0,
    // 禁止使用异步函数作为 Promise executor
    'no-async-promise-executor': 0,
    // 禁止在循环中出现 await
    'no-await-in-loop': 0,
    // 禁止与 -0 进行比较
    'no-compare-neg-zero': 0,
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 0,
    // 禁止不必要的分号
    'no-extra-semi': 2,
    // 不允许在字符类语法中出现由多个代码点组成的字符
    'no-misleading-character-class': 0,
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 0,
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 0,
    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': 0,
    // 禁用 console
    'no-console': 'off',
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': 2,
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 2,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止出现空语句块
    'no-empty': 0,
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 2,
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 2,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的括号
    'no-extra-parens': [2, 'functions'],
    // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations': [2, 'functions'],
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 2,
    // 禁止不规则的空白
    'no-irregular-whitespace': 2,
    // 禁止对 function 声明重新赋值
    'no-func-assign': 2,
    // 禁止把全局对象作为函数调用
    'no-obj-calls': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁用稀疏数组
    'no-sparse-arrays': 2,
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': 2,
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 2,
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': 2,
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 2,
    // 禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // ]]]

    // [[[ Best Practices
    // ------------------------------------ 这些规则是关于最佳实践的，帮助你避免一些问题 ------------------------------------
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 2,
    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': 0,
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 0,
    // 强制类方法使用 this
    'class-methods-use-this': 0,
    // 指定程序中允许的最大环路复杂度
    'complexity': 0,
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': [2],
    // 强制所有控制语句使用一致的括号风格
    'curly': [2, 'multi-line'],
    // 要求 switch 语句中有 default 分支
    'default-case': 0,
    // 强制在点号之前和之后一致的换行
    'dot-location': [2, 'property'],
    // 强制尽可能地使用点号
    'dot-notation': 2,
    // 要求使用 === 和 !==
    'eqeqeq': [2, 'allow-null'],
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 0,
    // 强制每个文件中包含的的类的最大数量
    'max-classes-per-file': 0,
    // 禁用 alert、confirm 和 prompt
    'no-alert': 2,
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': 2,
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 0,
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 0,
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 0,
    // 禁止出现空函数
    'no-empty-function': 0,
    // 禁止使用空解构模式
    'no-empty-pattern': 2,
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 0,
    // 禁用 eval()
    'no-eval': 2,
    // 禁止扩展原生类型
    'no-extend-native': 2,
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 2,
    // 禁用不必要的标签
    'no-extra-label': 0,
    // 禁止 case 语句落空
    'no-fallthrough': 2,
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 2,
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 2,
    // 禁止使用短符号进行类型转换
    'no-implicit-coercion': [2, {
      allow: ['!!', '+', '~']
    }],
    // 禁止在全局范围内使用变量声明和 function 声明
    'no-implicit-globals': 2,
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 2,
    // 禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': 0,
    // 禁用 __iterator__ 属性
    'no-iterator': 2,
    // 禁用标签语句
    'no-labels': [2, {
      allowLoop: false,
      allowSwitch: false
    }],
    // 禁用不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止在循环语句中出现包含不安全引用的函数声明
    'no-loop-func': 2,
    // 禁用魔术数字
    'no-magic-numbers': [0],
    // 禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止使用多行字符串
    'no-multi-str': 2,
    // 禁止使用 new 以避免产生副作用
    'no-new ': 0,
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': 0,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 0,
    // 禁用八进制字面量
    'no-octal': 2,
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 2,
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 2,
    // 禁用 __proto__ 属性
    'no-proto': 2,
    // 禁止多次声明同一变量
    'no-redeclare': 2,
    // 禁止使用对象的某些属性
    'no-restricted-properties': 0,
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': [2, 'except-parens'],
    // 禁用不必要的 return await
    'no-return-await': 0,
    // 禁止使用 javascript: url
    'no-script-url': 0,
    // 禁止自我赋值
    'no-self-assign': 2,
    // 禁止自身比较
    'no-self-compare': 2,
    // 禁用逗号操作符
    'no-sequences': 2,
    // 禁止抛出异常字面量
    'no-throw-literal': 2,
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 禁止出现未使用过的表达式
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    // 禁用出现未使用过的标
    'no-unused-labels': 0,
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 2,
    // 禁止不必要的 catch 子句
    'no-useless-catch': 0,
    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': 0,
    // 禁用不必要的转义字符
    'no-useless-escape': 0,
    // 禁止多余的 return 语句
    'no-useless-return': 0,
    // 禁用 void 操作符
    'no-void ': 0,
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': 0,
    // 禁用 with 语句
    'no-with': 2,
    // 建议在正则表达式中使用命名捕获组
    'prefer-named-capture-group': 0,
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': 2,
    // 强制在 parseInt() 使用基数参数
    'radix': 0,
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 2,
    // 强制在 RegExp 上使用 u 标志
    'require-unicode-regexp': 0,
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 0,
    // 要求 IIFE 使用括号括起来
    'wrap-iife': [2, 'any'],
    // 要求或禁止 “Yoda” 条件
    'yoda': [2, 'never'],
    // ]]]

    // [[[ Variables
    // ----------------------------------------- 这些规则与变量声明有关 -----------------------------------------
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 0,
    // 禁止删除变量
    'no-delete-var': 2,
    // 不允许标签与变量同名
    'no-label-var': 2,
    // 禁用特定的全局变量
    'no-restricted-globals': 0,
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 0,
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    // 禁止将变量初始化为 undefined
    'no-undef-init': 2,
    // 禁止将 undefined 作为标识符
    'no-undefined': 0,
    // 禁止出现未使用过的变量
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none'
    }],
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 2,
    // ]]]

    // [[[ Stylistic Issues
    // ------------------------------ 这些规则是关于风格指南的，而且是非常主观的 ------------------------------
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': 0,
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': [2, 'never'],
    // 强制数组元素间出现换行
    'array-element-newline': 0,
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': [2, 'always'],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': [2, '1tbs', {
      allowSingleLine: true
    }],
    // 强制使用骆驼拼写法命名约定
    'camelcase': [0, {
      properties: 'always'
    }],
    // 强制或禁止对注释的第一个字母大写
    'capitalized-comments': 0,
    // 要求或禁止末尾逗号
    'comma-dangle': [0],
    // 强制在逗号前后使用一致的空格
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    // 强制使用一致的逗号风格
    'comma-style': [2, 'last'],
    // 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': 0,
    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': 0,
    // 要求或禁止文件末尾存在空行
    'eol-last': 2,
    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': 0,
    // 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': 0,
    // 要求或禁止使用命名的 function 表达式
    'func-names': 0,
    // 强制一致地使用 function 声明或表达式
    'func-style': 0,
    // 强制在函数括号内使用一致的换行
    'function-paren-newline': [0],
    // 禁用指定的标识符
    'id-blacklist': 0,
    // 强制标识符的最小和最大长度
    'id-length': [2, {
      min: 1
    }],
    // 要求标识符匹配一个指定的正则表达式
    'id-match': 0,
    // 强制隐式返回的箭头函数体的位置
    'implicit-arrow - linebreak': 0,
    // 强制使用一致的缩进
    'indent': [2, 2, {
      SwitchCase: 1
    }],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': [2, 'prefer-single'],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [2, {
      before: true,
      after: true
    }],
    // 强制行注释的位置
    'line-comment-position': 0,
    // 强制使用一致的换行风格
    'linebreak-style': 0,
    // 要求在注释周围有空行
    'lines-around-comment': 0,
    // 要求或禁止类成员之间出现空行
    'lines-between-class-members': 0,
    // 强制可嵌套的块的最大深度
    'max-depth': 0,
    // 强制一行的最大长度
    'max-len': [0, {
      code: 500
    }],
    // 强制最大行数
    'max-lines': 0,
    // 强制函数最大代码行数
    'max-lines-per-function': 0,
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': 2,
    // 强制函数定义中最多允许的参数数量
    'max-params': [2, {
      max: 6
    }],
    // 强制函数块最多允许的的语句数量
    'max-statements': [2, {
      max: 200
    }],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': 0,
    // 强制对多行注释使用特定风格
    'multiline-comment-style': 0,
    // 要求或禁止在三元操作数中间换行
    'multiline-ternary': [2, 'always-multiline'],
    // 要求构造函数首字母大写
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false
    }],
    // 强制或禁止调用无参构造函数时有圆括号
    'new-parens': 2,
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': [0, {
      ignoreChainWithDepth: 3
    }],
    // 禁用 Array 构造函数
    'no-array-constructor': 2,
    // 禁用按位运算符
    'no-bitwise': 0,
    // 禁用 continue 语句
    'no-continue': 0,
    // 禁止在代码后使用内联注释
    'no-inline-comments': 2,
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 0,
    // 禁止混合使用不同的操作符
    'no-mixed-operators': 0,
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 2,
    // 禁止连续赋值
    'no-multi-assign': 0,
    // 禁止出现多行空行
    'no-multiple-empty-lines': [2, {
      max: 1
    }],
    // 禁用否定的表达式
    'no-negated-condition': 0,
    // 禁用嵌套的三元表达式
    'no-nested-ternary': 0,
    // 禁用 Object 的构造函数
    'no-new-object': 2,
    // 禁用一元操作符 ++ 和 --
    'no-plusplus': 0,
    // 禁用特定的语法
    'no-restricted-syntax': 0,
    // 禁用 tab
    'no-tabs': 0,
    // 禁用三元操作符
    'no-ternary': 0,
    // 禁用行尾空格
    'no-trailing-spaces': 2,
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 0,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': [2, {
      defaultAssignment: false
    }],
    // 禁止属性前有空白
    'no-whitespace-before-property': 2,
    // 强制单个语句的位置
    'nonblock-statement-body-position': 0,
    // 强制大括号内换行符的一致性
    'object-curly-newline': [2, {
      multiline: true,
      minProperties: 8,
      consistent: true
      // 'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
      // 'ObjectPattern': { 'multiline': true, 'minProperties': 3 },
      // 'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
      // 'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
    }],
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: true,
      arraysInObjects: false
    }],
    // 强制将对象的属性放在不同的行上
    'object-property-newline': [2, {
      allowAllPropertiesOnSameLine: true
    }],
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': [2, {
      initialized: 'never'
    }],
    // 要求或禁止在变量声明周围换行
    'one-var-declaration-per-line': 0,
    // 要求或禁止在可能的情况下使用简化的赋值操作符
    'operator-assignment': 2,
    // 强制操作符使用一致的换行符
    'operator-linebreak': [2, 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }],
    // 要求或禁止块内填充
    'padded-blocks': [2, 'never'],
    // 要求或禁止在语句间填充空行
    'padding-line-between-statements': 2,
    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    'prefer-object-spread': 0,
    // 要求对象字面量属性名称用引号括起来
    'quote-props': [2, 'consistent-as-needed'],
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    // 要求(always)或禁止(never)使用分号代替 ASI
    'semi': [2, 'always'],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    // 强制分号的位置
    'semi-style': 2,
    // 要求对象属性按序排列
    'sort-keys': 0,
    // 要求同一个声明块中的变量按顺序排列
    'sort-vars': 0,
    // 强制在块之前使用一致的空格
    'space-before-blocks': [2, 'always'],
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [2, 'always'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': [2, 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [2, 'always', {
      markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': 0,
    // 要求或禁止在模板标记和它们的字面量之间有空格
    'template-tag-spacing': 0,
    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'unicode-bom': 0,
    // 要求正则表达式被括号括起来
    'wrap-regex': 2,
    // ]]]

    // [[[ ECMAScript 6
    // ----------------------- 这些规则只与 ES6 有关, 即通常所说的 ES2015 -----------------------
    // 要求箭头函数体使用大括号
    'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: true }],
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': [0, 'as-needed', {
      requireForBlockBody: false
    }],
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    // 要求在构造函数中有 super() 的调用
    'constructor-super': 2,
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [2, {
      before: true,
      after: true
    }],
    // 禁止修改类声明的变量
    'no-class-assign': 2,
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': ['error', { allowParens: true }],
    // 禁止修改 const 声明的变量
    'no-const-assign': 2,
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 2,
    // 禁止重复模块导入
    'no-duplicate-imports': 2,
    // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-symbol': 2,
    // 禁止使用指定的 import 加载的模块
    'no-restricted-imports': 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 2,
    // 禁用不必要的构造函数
    'no-useless-constructor': 2,
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 0,
    // 要求使用 let 或 const 而不是 var
    'no-var': 2,
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': 2,
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': 0,
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 2,
    // 优先使用数组和对象解构
    'prefer-destructuring': [2, {
      VariableDeclarator: {
        array: false,
        object: false
      },
      AssignmentExpression: {
        array: false,
        object: false
      }
    }],
    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-numeric-literals': 0,
    // 要求使用剩余参数而不是 arguments
    'prefer-rest-params': 0,
    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': 0,
    // 要求使用模板字面量而非字符串连接
    'prefer-template': 0,
    // 要求 generator 函数内有 yield
    'require-yield': 0,
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': 0,
    // 强制模块内的 import 排序
    'sort-imports': 0,
    // 要求 symbol 描述
    'symbol-description': 0,
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': [2, 'never'],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [2, 'both'],
    // ]]]
    // 要求回调函数中有容错处理
    'handle-callback-err': [2, '^(err|error)$'],
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 2,
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 2

  },
});

"use strict";
module.exports = {
  root: "value",
  key: "'{{!key}}' ",
  messages: {
    wrapArrays: true
  },
  any: {
    unknown: "não é permitido",
    invalid: "contém um valor inválido",
    empty: "não pode estar vazio!",
    required: "é obrigatório",
    allowOnly: "deve conter um dos seguintes valores: {{valids}}",
    default: "lançou um erro ao executar o método padrão"
  },
  alternatives: {
    base: "não corresponde às alternativas permitidas"
  },
  array: {
    base: "deve ser um array",
    includes:
      "o valor na posição {{pos}} não corresponde à nenhum dos tipos permitidos",
    includesSingle:
      'valor único do "{{!key}}" não corresponde à nenhum dos tipos permitidos',
    includesOne: "o valor na posição {{pos}} falhou porque {{reason}}",
    includesOneSingle: 'valor único do "{{!key}}" falhou porque {{reason}}',
    includesRequiredUnknowns:
      "não contém {{unknownMisses}} o(s) valor(es) obrigatório(s)",
    includesRequiredKnowns:
      'não contémconst language = require("../utils/validator"); {{knownMisses}}',
    includesRequiredBoth:
      "não contém {{knownMisses}} e {{unknownMisses}} outro(s) valor(es) obrigatório(s)",
    excludes: "o valor na posição {{pos}} contém um valor excluído",
    excludesSingle: 'valor único do "{{!key}}" contém um valor excluído',
    min: "deve conter pelo menos {{limit}} itens",
    max: "deve conter {{limit}} ou menos itens",
    length: "deve conter exatamente {{limit}} itens",
    ordered: "o valor na posição {{pos}} falhou porque {{reason}}",
    orderedLength:
      "o valor na posição {{pos}} falhou porque o array pode ter no máximo {{limit}} itens",
    sparse: 'não deve ter valores vazios ou que representem um valor "falso"',
    unique: "a posição {{pos}} contém um valor duplicado"
  },
  boolean: {
    base: "deve ser um boleano"
  },
  binary: {
    base: "deve ser um buffer ou uma string",
    min: "deve ter no mínimo {{limit}} bytes",
    max: "deve ter no máximo {{limit}} bytes",
    length: "deve ter exatamente {{limit}} bytes"
  },
  date: {
    base: "must be a number of milliseconds or valid date string",
    format: "must be a string with one of the following formats {{format}}",
    strict: "must be a valid date",
    min: 'must be larger than or equal to "{{limit}}"',
    max: 'must be less than or equal to "{{limit}}"',
    isoDate: "must be a valid ISO 8601 date",
    timestamp: {
      javascript: "must be a valid timestamp or number of milliseconds",
      unix: "must be a valid timestamp or number of seconds"
    },
    ref: 'references "{{ref}}" which is not a date'
  },
  function: {
    base: "must be a Function",
    arity: "must have an arity of {{n}}",
    minArity: "must have an arity greater or equal to {{n}}",
    maxArity: "must have an arity lesser or equal to {{n}}",
    ref: "must be a Joi reference"
  },
  lazy: {
    base: "!!schema error: lazy schema must be set",
    schema: "!!schema error: lazy schema function must return a schema"
  },
  object: {
    base: "must be an object",
    child: '!!child "{{!child}}" fails because {{reason}}',
    min: "must have at least {{limit}} children",
    max: "must have less than or equal to {{limit}} children",
    length: "must have {{limit}} children",
    allowUnknown: '!!"{{!child}}" is not allowed',
    with: 'missing required peer "{{peer}}"',
    without: 'conflict with forbidden peer "{{peer}}"',
    missing: "must contain at least one of {{peers}}",
    xor: "contains a conflict between exclusive peers {{peers}}",
    or: "must contain at least one of {{peers}}",
    and: "contains {{present}} without its required peers {{missing}}",
    nand: '!!"{{main}}" must not exist simultaneously with {{peers}}',
    assert:
      '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
    rename: {
      multiple:
        'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
      override:
        'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists'
    },
    type: 'must be an instance of "{{type}}"',
    schema: "must be a Joi instance"
  },
  number: {
    base: "must be a number",
    min: "must be larger than or equal to {{limit}}",
    max: "must be less than or equal to {{limit}}",
    less: "must be less than {{limit}}",
    greater: "must be greater than {{limit}}",
    float: "must be a float or double",
    integer: "must be an integer",
    negative: "must be a negative number",
    positive: "must be a positive number",
    precision: "must have no more than {{limit}} decimal places",
    ref: 'references "{{ref}}" which is not a number',
    multiple: "must be a multiple of {{multiple}}"
  },
  string: {
    base: "deve ser um string",
    min: "deve ter a quantidade mínima de {{limit}} de caracteres!",
    max: "deve ter a quantidade máxima de {{limit}} de caracteres!",
    length: "deve ter exatamente {{limit}} caracteres!",
    alphanum: "must only contain alpha-numeric characters",
    token: "must only contain alpha-numeric and underscore characters",
    regex: {
      base:
        'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
      name: 'with value "{{!value}}" fails to match the {{name}} pattern'
    },
    email: "não é email válido.",
    uri: "must be a valid uri",
    uriCustomScheme:
      "must be a valid uri with a scheme matching the {{scheme}} pattern",
    isoDate: "must be a valid ISO 8601 date",
    guid: "must be a valid GUID",
    hex: "must only contain hexadecimal characters",
    hostname: "must be a valid hostname",
    lowercase: "must only contain lowercase characters",
    uppercase: "must only contain uppercase characters",
    trim: "must not have leading or trailing whitespace",
    creditCard: "must be a credit card",
    ref: 'references "{{ref}}" which is not a number',
    ip: "must be a valid ip address with a {{cidr}} CIDR",
    ipVersion:
      "must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR"
  }
};

/ *!
 * Biblioteca JavaScript jQuery v3.6.0
 * https://jquery.com/
 *
 * Inclui Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation e outros contribuidores
 * Lançado sob a licença MIT
 * https://jquery.org/license
 *
 * Data: 2021-03-02T17: 08Z
 * /
(função (global, fábrica) {

	"use estrito";

	if (typeof module === "object" && typeof module.exports === "object") {

		// Para ambientes do tipo CommonJS e CommonJS onde uma `janela` adequada
		// está presente, execute a fábrica e obtenha o jQuery.
		// Para ambientes que não possuem uma `janela` com um` documento`
		// (como Node.js), exponha uma fábrica como module.exports.
		// Isso acentua a necessidade de criação de uma `janela` real.
		// por exemplo, var jQuery = require ("jquery") (janela);
		// Veja tíquete # 14549 para mais informações.
		module.exports = global.document?
			fábrica (global, verdadeiro):
			function (w) {
				if (! w.document) {
					lançar um novo erro ("jQuery requer uma janela com um documento");
				}
				retorno de fábrica (w);
			};
	} outro {
		fábrica (global);
	}

// Passe se a janela ainda não estiver definida
}) (typeof window! == "undefined"? window: this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lança exceções quando o código não estrito (por exemplo, ASP.NET 4.5) acessa o modo estrito
// argumentos.callee.caller (trac-13335). Mas a partir do jQuery 3.0 (2016), o modo estrito deve ser comum
// o suficiente para que todas essas tentativas sejam protegidas em um bloco try.
"use estrito";

var arr = [];

var getProto = Object.getPrototypeOf;

fatia var = arr.slice;

var flat = arr.flat? function (array) {
	retornar arr.flat.call (array);
}: function (array) {
	retornar arr.concat.apply ([], array);
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Object);

var support = {};

var isFunction = function isFunction (obj) {

		// Suporte: Chrome <= 57, Firefox <= 52
		// Em alguns navegadores, typeof retorna "função" para elementos HTML <object>
		// (ou seja, `typeof document.createElement (" object ") ===" function "`).
		// Não queremos classificar * qualquer * nó DOM como uma função.
		// Suporte: QtWeb <= 3.8.5, WebKit <= 534.34, ferramenta wkhtmltopdf <= 0.12.5
		// Além disso, para o antigo WebKit, typeof retorna "função" para coleções HTML
		// (por exemplo, `typeof document.getElementsByTagName (" div ") ===" function "`). (gh-4756)
		return typeof obj === "função" && typeof obj.nodeType! == "número" &&
			typeof obj.item! == "função";
	};


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};


var document = window.document;



	var preserveScriptAttributes = {
		tipo: verdadeiro,
		src: verdadeiro,
		nonce: true,
		noModule: true
	};

	função DOMEval (código, nó, doc) {
		doc = doc || documento;

		var i, val,
			script = doc.createElement ("script");

		script.text = código;
		if (nó) {
			for (i in savedScriptAttributes) {

				// Suporte: Firefox 64+, Edge 18+
				// Alguns navegadores não suportam a propriedade "nonce" em scripts.
				// Por outro lado, apenas usar `getAttribute` não é suficiente, pois
				// o atributo `nonce` é redefinido para uma string vazia sempre que
				// torna-se conectado ao contexto de navegação.
				// Veja https://github.com/whatwg/html/issues/2369
				// Veja https://html.spec.whatwg.org/#nonce-attributes
				// A verificação `node.getAttribute` foi adicionada para fins de
				// `jQuery.globalEval` para que ele possa simular um nó contendo nonce
				// por meio de um objeto.
				val = nó [i] || node.getAttribute && node.getAttribute (i);
				if (val) {
					script.setAttribute (i, val);
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


function toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// Suporte: Android <= 2.3 apenas (RegExp funcional)
	return typeof obj === "objeto" || typeof obj === "função"?
		class2type [toString.call (obj)] || "objeto":
		typeof obj;
}
/ * símbolo global * /
// Definir este global em .eslintrc.json criaria o perigo de usar o global
// desprotegido em outro lugar, parece mais seguro definir global apenas para este módulo



var
	versão = "3.6.0",

	// Defina uma cópia local do jQuery
	jQuery = function (seletor, contexto) {

		// O objeto jQuery é na verdade apenas o construtor init 'aprimorado'
		// Precisa de init se jQuery for chamado (apenas permita que o erro seja lançado se não estiver incluído)
		retornar novo jQuery.fn.init (seletor, contexto);
	};

jQuery.fn = jQuery.prototype = {

	// A versão atual do jQuery sendo usado
	jquery: version,

	construtor: jQuery,

	// O comprimento padrão de um objeto jQuery é 0
	comprimento: 0,

	toArray: function () {
		return slice.call (this);
	},

	// Obtenha o enésimo elemento no conjunto de elementos correspondentes OU
	// Obtenha todo o elemento correspondente definido como uma matriz limpa
	get: function (num) {

		// Retorna todos os elementos em um array limpo
		if (num == null) {
			return slice.call (this);
		}

		// Retorna apenas um elemento do conjunto
		retornar num <0? this [num + this.length]: this [num];
	},

	// Pegue um array de elementos e coloque-o na pilha
	// (retornando o novo conjunto de elementos correspondentes)
	pushStack: function (elems) {

		// Construir um novo conjunto de elementos correspondentes do jQuery
		var ret = jQuery.merge (this.constructor (), elems);

		// Adicione o objeto antigo na pilha (como uma referência)
		ret.prevObject = this;

		// Retorna o conjunto de elementos recém-formado
		return ret;
	},

	// Execute um retorno de chamada para cada elemento no conjunto correspondente.
	each: function (callback) {
		return jQuery.each (this, callback);
	},

	map: function (callback) {
		return this.pushStack (jQuery.map (this, function (elem, i) {
			retornar callback.call (elem, i, elem);
		}));
	},

	fatia: função () {
		retornar this.pushStack (slice.apply (this, argumentos));
	},

	primeiro: function () {
		retornar this.eq (0);
	},

	último: function () {
		retornar this.eq (-1);
	},

	função par() {
		return this.pushStack (jQuery.grep (this, function (_elem, i) {
			retorno (i + 1)% 2;
		}));
	},

	Função estranha() {
		return this.pushStack (jQuery.grep (this, function (_elem, i) {
			retorno i% 2;
		}));
	},

	eq: função (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		return this.pushStack (j> = 0 && j <len? [this [j]]: []);
	},

	end: function () {
		return this.prevObject || this.constructor ();
	},

	// Apenas para uso interno.
	// Se comporta como um método de Array, não como um método jQuery.
	empurre empurre,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	opções de var, nome, src, cópia, copyIsArray, clone,
		destino = argumentos [0] || {},
		i = 1,
		comprimento = argumentos. comprimento,
		profundo = falso;

	// Lidar com uma situação de cópia profunda
	if (typeof target === "boolean") {
		profundo = alvo;

		// Pula o booleano e o destino
		alvo = argumentos [i] || {};
		i ++;
	}

	// Trate o caso quando o destino for uma string ou algo (possível em cópia profunda)
	if (typeof target! == "object" &&! isFunction (target)) {
		alvo = {};
	}

	// Estende o próprio jQuery se apenas um argumento for passado
	if (comprimento i ===) {
		alvo = isso;
		eu--;
	}

	para (; i <comprimento; i ++) {

		// Lidar apenas com valores não nulos / indefinidos
		if ((opções = argumentos [i])! = nulo) {

			// Estende o objeto base
			para (nome em opções) {
				copiar = opções [nome];

				// Impedir poluição de Object.prototype
				// Impedir loop sem fim
				if (nome === "__proto__" || destino === cópia) {
					Prosseguir;
				}

				// Recapitule se estivermos mesclando objetos simples ou matrizes
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copiar)))) {
					src = destino [nome];

					// Garanta o tipo adequado para o valor de origem
					if (copyIsArray &&! Array.isArray (src)) {
						clone = [];
					} else if (! copyIsArray &&! jQuery.isPlainObject (src)) {
						clone = {};
					} outro {
						clone = src;
					}
					copyIsArray = false;

					// Nunca mova objetos originais, clone-os
					destino [nome] = jQuery.extend (profundo, clone, cópia);

				// Não introduza valores indefinidos
				} else if (copy! == undefined) {
					destino [nome] = cópia;
				}
			}
		}
	}

	// Retorna o objeto modificado
	alvo de retorno;
};

jQuery.extend ({

	// Único para cada cópia do jQuery na página
	expando: "jQuery" + (version + Math.random ()) .replace (/ \ D / g, ""),

	// Assume que o jQuery está pronto sem o módulo pronto
	isReady: true,

	erro: função (msg) {
		lançar novo erro (msg);
	},

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, Ctor;

		// Detecta negativos óbvios
		// Use toString em vez de jQuery.type para capturar objetos de host
		if (! obj || toString.call (obj)! == "[Object Object]") {
			retorna falso;
		}

		proto = getProto (obj);

		// Objetos sem protótipo (por exemplo, `Object.create (null)`) são simples
		if (! proto) {
			return true;
		}

		// Objetos com protótipo são simples se foram construídos por uma função de objeto global
		Ctor = hasOwn.call (proto, "construtor") && proto.constructor;
		return typeof Ctor === "função" && fnToString.call (Ctor) === ObjectFunctionString;
	},

	isEmptyObject: function (obj) {
		var name;

		para (nome em obj) {
			retorna falso;
		}
		return true;
	},

	// Avalia um script em um contexto fornecido; volta para o global
	// se não for especificado.
	globalEval: function (code, options, doc) {
		DOMEval (código, {nonce: options && options.nonce}, doc);
	},

	each: function (obj, callback) {
		comprimento var, i = 0;

		if (isArrayLike (obj)) {
			comprimento = obj.length;
			para (; i <comprimento; i ++) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					intervalo;
				}
			}
		} outro {
			para (i em obj) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					intervalo;
				}
			}
		}

		return obj;
	},

	// resultados são apenas para uso interno
	makeArray: function (arr, results) {
		var ret = resultados || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "string"?
						[arr]: arr
				);
			} outro {
				push.call (ret, arr);
			}
		}

		return ret;
	},

	inArray: function (elem, arr, i) {
		return arr == null? -1: indexOf.call (arr, elem, i);
	},

	// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
	// push.apply (_, arraylike) lança no antigo WebKit
	mesclar: função (primeiro, segundo) {
		var len = + second.length,
			j = 0,
			i = primeiro.comprimento;

		para (; j <len; j ++) {
			primeiro [i ++] = segundo [j];
		}

		primeiro.comprimento = i;

		volte primeiro;
	},

	grep: function (elems, callback, invert) {
		var callbackInverse,
			jogos = [],
			i = 0,
			comprimento = elems.length,
			callbackExpect =! invert;

		// Percorra a matriz, salvando apenas os itens
		// que passa a função de validador
		para (; i <comprimento; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				match.push (elems [i]);
			}
		}

		retornar partidas;
	},

	// arg é apenas para uso interno
	map: function (elems, callback, arg) {
		comprimento var, valor,
			i = 0,
			ret = [];

		// Percorra a matriz, traduzindo cada um dos itens para seus novos valores
		if (isArrayLike (elems)) {
			comprimento = elems.length;
			para (; i <comprimento; i ++) {
				valor = retorno de chamada (elems [i], i, arg);

				if (valor! = nulo) {
					ret.push (valor);
				}
			}

		// Passe por cada chave do objeto,
		} outro {
			para (i em elementos) {
				valor = retorno de chamada (elems [i], i, arg);

				if (valor! = nulo) {
					ret.push (valor);
				}
			}
		}

		// Achatar quaisquer matrizes aninhadas
		retorno plano (ret);
	},

	// Um ​​contador GUID global para objetos
	guid: 1,

	// jQuery.support não é usado no Core, mas outros projetos anexam seus
	// propriedades para ele, então ele precisa existir.
	suporte: suporte
});

if (símbolo typeof === "função") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Preencher o mapa class2type
jQuery.each ("Boolean Number String Função Array Date RegExp Object Error Symbol" .split (""),
	função (_i, nome) {
		class2type ["[objeto" + nome + "]"] = name.toLowerCase ();
	});

function isArrayLike (obj) {

	// Suporte: apenas iOS 8.2 real (não reproduzível no simulador)
	// verificação `in` usada para evitar erro JIT (gh-2145)
	// hasOwn não é usado aqui devido a falsos negativos
	// em relação ao comprimento Nodelist no IE
	var length = !! obj && "comprimento" em obj && obj.length,
		type = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		retorna falso;
	}

	return type === "array" || comprimento === 0 ||
		typeof length === "número" && length> 0 && (length - 1) in obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation e outros contribuidores
 * Lançado sob a licença MIT
 * https://js.foundation/
 *
 * Data: 2021-02-16
 * /
(função (janela) {
var i,
	Apoio, suporte,
	Expr,
	getText,
	isXML,
	tokenizar,
	compilar,
	selecione,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Vars do documento local
	setDocument,
	documento,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	partidas,
	contém,

	// Dados específicos da instância
	expando = "chiar" + 1 * nova data (),
	preferredDoc = window.document,
	dirruns = 0,
	feito = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	nonnativeSelectorCache = createCache (),
	sortOrder = function (a, b) {
		if (a === b) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Métodos de instância
	hasOwn = ({}) .hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	fatia = arr.slice,

	// Use um indexOf reduzido, pois é mais rápido que o nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = função (lista, elem) {
		var i = 0,
			len = list.length;
		para (; i <len; i ++) {
			if (list [i] === elem) {
				return i;
			}
		}
		return -1;
	},

	booleans = "marcado | selecionado | assíncrono | foco automático | reprodução automática | controles | adiar | desativado | oculto |" +
		"ismap | loop | multiple | open | readonly | required | scoped",

	// Expressões regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	espaço em branco = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?: \\\\ [\\ da-fA-F] {1,6}" + espaço em branco +
		"? | \\\\ [^ \\ r \\ n \\ f] | [\\ w-] | [^ \ 0 - \\ x7f]) +",

	// Seletores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\ [" + espaço em branco + "* (" + identificador + ") (?:" + espaço em branco +

		// Operador (captura 2)
		"* ([* ^ $ |! ~]? =)" + espaço em branco +

		// "Os valores dos atributos devem ser identificadores CSS [captura 5]
		// ou strings [capture 3 ou capture 4] "
		"* (?: '((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| (" + identificador + ")) |)" +
		espaço em branco + "* \\]",

	pseudos = ":(" + identificador + ") (?: \\ ((" +

		// Para reduzir o número de seletores que precisam de token no preFilter, prefira os argumentos:
		// 1. citado (captura 3; captura 4 ou captura 5)
		"('((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +

		// 2. simples (captura 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + atributos + ") *) |" +

		// 3. qualquer outra coisa (captura 2)
		". *" +
		") \\) |)",

	// Espaços em branco à esquerda e não escapados, capturando alguns caracteres que não são de espaço em branco precedendo o último
	rwhitespace = novo RegExp (espaço em branco + "+", "g"),
	rtrim = new RegExp ("^" + espaço em branco + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" +
		espaço em branco + "+ $", "g"),

	rcomma = new RegExp ("^" + espaço em branco + "*," + espaço em branco + "*"),
	rcombinators = new RegExp ("^" + whitespace + "* ([> + ~] |" + whitespace + ")" + whitespace +
		"*"),
	rdescend = novo RegExp (espaço em branco + "|>"),

	rpseudo = novo RegExp (pseudos),
	ridentifier = new RegExp ("^" + identificador + "$"),

	matchExpr = {
		"ID": novo RegExp ("^ # (" + identificador + ")"),
		"CLASSE": novo RegExp ("^ \\. (" + Identificador + ")"),
		"TAG": novo RegExp ("^ (" + identificador + "| [*])"),
		"ATTR": novo RegExp ("^" + atributos),
		"PSEUDO": novo RegExp ("^" + pseudos),
		"CHILD": novo RegExp ("^ :( apenas | primeiro | último | enésimo | enésimo último) - (filho | do tipo) (?: \\ (" +
			espaço em branco + "* (par | ímpar | (([+ -] |) (\\ d *) n |)" + espaço em branco + "* (?: ([+ -] |)" +
			espaço em branco + "* (\\ d +) |))" + espaço em branco + "* \\) |)", "i"),
		"bool": novo RegExp ("^ (?:" + booleanos + ") $", "i"),

		// Para uso em bibliotecas que implementam .is ()
		// Usamos isso para correspondência de PDV em `select`
		"needsContext": novo RegExp ("^" + espaço em branco +
			"* [> + ~] |: (par | ímpar | eq | gt | lt | enésimo | primeiro | último) (?: \\ (" + espaço em branco +
			"* ((?: - \\ d)? \\ d *)" + espaço em branco + "* \\) |) (? = [^ -] | $)", "i")
	},

	rhtml = / HTML $ / i,
	rinputs = / ^ (?: input | select | textarea | botão) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [nativo \ w /,

	// ID facilmente analisável / recuperável ou seletores de TAG ou CLASSE
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ [\\ da-fA-F] {1,6}" + espaço em branco + "? | \\\\ ([^ \\ r \\ n \\ f])" , "g"),
	funescape = function (escape, nonHex) {
		var high = "0x" + escape.slice (1) - 0x10000;

		retornar não hexadecimal?

			// Retira o prefixo da barra invertida de uma sequência de escape não hexadecimal
			não hex:

			// Substitua uma sequência de escape hexadecimal pelo ponto de código Unicode codificado
			// Suporte: IE <= 11 +
			// Para valores fora do plano multilíngue básico (BMP), construa manualmente um
			// par substituto
			alto <0?
				String.fromCharCode (alta + 0x10000):
				String.fromCharCode (alto >> 10 | 0xD800, alto & 0x3FF | 0xDC00);
	},

	// string CSS / serialização de identificador
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL torna-se U + FFFD REPLACEMENT CHARACTER
			if (ch === "\ 0") {
				return "\ uFFFD";
			}

			// Caracteres de controle e (dependendo da posição) números são escapados como pontos de código
			return ch.slice (0, -1) + "\\" +
				ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// Outros caracteres ASCII potencialmente especiais recebem escape de barra invertida
		return "\\" + ch;
	},

	// Usado para iframes
	// Veja setDocument ()
	// Remover o wrapper da função causa uma "Permissão Negada"
	// erro no IE
	unloadHandler = function () {
		setDocument ();
	},

	inDisabledFieldset = addCombinator (
		função (elem) {
			return elem.disabled === true && elem.nodeName.toLowerCase () === "fieldset";
		},
		{dir: "parentNode", próximo: "legend"}
	);

// Otimize para push.apply (_, NodeList)
tentar {
	push.apply (
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);

	// Suporte: Android <4.0
	// Detecta push.apply com falha silenciosa
	// eslint-disable-next-line no-unused-extensions
	arr [preferredDoc.childNodes.length] .nodeType;
} catch (e) {
	push = {aplicar: arr.length?

		// Aproveite a fatia, se possível
		função (destino, els) {
			pushNative.apply (target, slice.call (els));
		}:

		// Suporte: IE <9
		// Caso contrário, anexe diretamente
		função (destino, els) {
			var j = target.length,
				i = 0;

			// Não posso confiar em NodeList.length
			while ((destino [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

função Sizzle (seletor, contexto, resultados, semente) {
	var m, i, elem, nid, corresponder, grupos, novoSeletor,
		newContext = context && context.ownerDocument,

		// nodeType padronizado para 9, já que o contexto é padronizado para document
		nodeType = context? context.nodeType: 9;

	resultados = resultados || [];

	// Retorna antes das chamadas com seletor ou contexto inválido
	if (seletor de tipo! == "string" ||! seletor ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		resultados de retorno;
	}

	// Tente atalho para localizar operações (em oposição a filtros) em documentos HTML
	if (! seed) {
		setDocument (contexto);
		contexto = contexto || documento;

		if (documentIsHTML) {

			// Se o seletor for suficientemente simples, tente usar um método DOM "get * By *"
			// (exceto o contexto DocumentFragment, onde os métodos não existem)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector))) {

				// seletor de ID
				if ((m = match [1])) {

					// Contexto do documento
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// Suporte: IE, Opera, Webkit
							// TODO: identificar versões
							// getElementById pode combinar elementos por nome em vez de ID
							if (elem.id === m) {
								results.push (elem);
								resultados de retorno;
							}
						} outro {
							resultados de retorno;
						}

					// Contexto do elemento
					} outro {

						// Suporte: IE, Opera, Webkit
						// TODO: identificar versões
						// getElementById pode combinar elementos por nome em vez de ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contém (contexto, elem) &&
							elem.id === m) {

							results.push (elem);
							resultados de retorno;
						}
					}

				// Seletor de tipo
				} else if (match [2]) {
					push.apply (resultados, context.getElementsByTagName (seletor));
					resultados de retorno;

				// Class selector
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (resultados, context.getElementsByClassName (m));
					resultados de retorno;
				}
			}

			// Aproveite as vantagens de querySelectorAll
			if (support.qsa &&
				! nonnativeSelectorCache [selector + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (seletor)) &&

				// Suporte: apenas IE 8
				// Excluir elementos do objeto
				(nodeType! == 1 || context.nodeName.toLowerCase ()! == "objeto")) {

				newSelector = selector;
				newContext = contexto;

				// qSA considera elementos fora de uma raiz de escopo ao avaliar filho ou
				// combinadores descendentes, que não é o que queremos.
				// Nesses casos, contornamos o comportamento prefixando cada seletor no
				// lista com um seletor de ID referenciando o contexto do escopo.
				// A técnica também deve ser usada quando um combinador líder é usado
				// pois esses seletores não são reconhecidos por querySelectorAll.
				// Obrigado a Andrew Dupont por esta técnica.
				if (nodeType === 1 &&
					(rdescend.test (seletor) || rcombinators.test (seletor))) {

					// Expanda o contexto para seletores irmãos
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						contexto;

					// Podemos usar: escopo em vez do hack de ID se o navegador
					// suporta isso e se não estivermos mudando o contexto.
					if (newContext! == context ||! support.scope) {

						// Capture o ID do contexto, configurando-o primeiro, se necessário
						if ((nid = context.getAttribute ("id"))) {
							nid = nid.replace (rcssescape, fcssescape);
						} outro {
							context.setAttribute ("id", (nid = expando));
						}
					}

					// Prefixa cada seletor na lista
					grupos = tokenizar (seletor);
					i = grupos.comprimento;
					enquanto eu-- ) {
						grupos [i] = (nid? "#" + nid: ": escopo") + "" +
							toSelector (grupos [i]);
					}
					newSelector = groups.join (",");
				}

				tentar {
					push.apply (resultados,
						newContext.querySelectorAll (newSelector)
					);
					resultados de retorno;
				} catch (qsaError) {
					nonnativeSelectorCache (seletor, verdadeiro);
				} finalmente {
					if (nid === expando) {
						context.removeAttribute ("id");
					}
				}
			}
		}
	}

	// Todos os outros
	return select (selector.replace (rtrim, "$ 1"), contexto, resultados, semente);
}

/ **
 * Crie caches de valor-chave de tamanho limitado
 * @returns {function (string, object)} Retorna os dados do objeto após armazená-los em si mesmo com
 * nome da propriedade a string (com sufixo de espaço) e (se o cache for maior que Expr.cacheLength)
 * excluindo a entrada mais antiga
 * /
function createCache () {
	var keys = [];

	cache de função (chave, valor) {

		// Use (tecla + "") para evitar a colisão com as propriedades do protótipo nativo (consulte a edição nº 157)
		if (keys.push (key + "")> Expr.cacheLength) {

			// Mantém apenas as entradas mais recentes
			excluir cache [keys.shift ()];
		}
		retorno (cache [chave + ""] = valor);
	}
	cache de retorno;
}

/ **
 * Marque uma função para uso especial pelo Sizzle
 * @param {Function} fn A função para marcar
 * /
function markFunction (fn) {
	fn [expando] = verdadeiro;
	return fn;
}

/ **
 * Suporte a testes usando um elemento
 * @param {Function} fn Passou o elemento criado e retorna um resultado booleano
 * /
function assert (fn) {
	var el = document.createElement ("fieldset");

	tentar {
		retornar !! fn (el);
	} catch (e) {
		retorna falso;
	} finalmente {

		// Remover de seu pai por padrão
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}

		// libera memória no IE
		el = nulo;
	}
}

/ **
 * Adiciona o mesmo manipulador para todos os atributos especificados
 * @param {String} Attrs lista de atributos separados por pipe
 * @param {Function} handler O método que será aplicado
 * /
function addHandle (attrs, handler) {
	var arr = attrs.split ("|"),
		i = comprimento.rr;

	enquanto eu-- ) {
		Expr.attrHandle [arr [i]] = manipulador;
	}
}

/ **
 * Verifica a ordem do documento de dois irmãos
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Retorna menos que 0 se a preceder b, maior que 0 se a seguir b
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use o IE sourceIndex se estiver disponível em ambos os nós
	if (diff) {
		return diff;
	}

	// Verifique se b segue a
	if (cur) {
		while ((cur = cur.nextSibling)) {
			if (cur === b) {
				return -1;
			}
		}
	}

	retornar um? 1: -1;
}

/ **
 * Retorna uma função para usar em pseudos para tipos de entrada
 * @param {String} tipo
 * /
function createInputPseudo (type) {
	função de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		nome de retorno === "entrada" && elem.type === tipo;
	};
}

/ **
 * Retorna uma função para usar em pseudos para botões
 * @param {String} tipo
 * /
function createButtonPseudo (type) {
	função de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/ **
 * Retorna uma função para usar em pseudos para: ativado /: desativado
 * @param {Boolean} disabled true para: disabled; falso para: ativado
 * /
function createDisabledPseudo (disabled) {

	// Conhecido: falsos positivos desativados: fieldset [desativado]> legenda: enésimo-do-tipo (n + 2): pode-desativar
	função de retorno (elem) {

		// Apenas certos elementos podem corresponder: ativado ou: desativado
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("forma" em elem) {

			// Verifique se há deficiência herdada em elementos relevantes não desativados:
			// * elementos associados a formulários listados em um conjunto de campos desativado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opção em um optgroup desativado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos esses elementos têm uma propriedade "formulário".
			if (elem.parentNode && elem.disabled === false) {

				// Os elementos de opção diferem para um optgroup pai, se presente
				if ("rótulo" no elem) {
					if ("rótulo" em elem.parentNode) {
						return elem.parentNode.disabled === disabled;
					} outro {
						return elem.disabled === disabled;
					}
				}

				// Suporte: IE 6 - 11
				// Use a propriedade de atalho isDisabled para verificar os ancestrais fieldset desativados
				return elem.isDisabled === disabled ||

					// Onde não houver isDisabled, verifique manualmente
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
					inDisabledFieldset (elem) === disabled;
			}

			return elem.disabled === disabled;

		// Tente separar os elementos que não podem ser desabilitados antes de confiar na propriedade desabilitada.
		// Algumas vítimas ficam presas em nossa rede (rótulo, legenda, menu, trilha), mas não deveria
		// ainda existe neles, quanto mais ter um valor booleano.
		} else if ("rótulo" no elem) {
			return elem.disabled === disabled;
		}

		// Os elementos restantes não são: habilitados nem: desabilitados
		retorna falso;
	};
}

/ **
 * Retorna uma função para usar em pseudos para posições
 * @param {Function} fn
 * /
function createPositionalPseudo (fn) {
	return markFunction (função (argumento) {
		argumento = + argumento;
		return markFunction (function (seed, match) {
			var j,
				matchIndexes = fn ([], seed.length, argument),
				i = matchIndexes.length;

			// Corresponde aos elementos encontrados nos índices especificados
			enquanto eu-- ) {
				if (seed [(j = matchIndexes [i])]) {
					semente [j] =! (corresponde a [j] = semente [j]);
				}
			}
		});
	});
}

/ **
 * Verifica um nó para validade como um contexto Sizzle
 * @param {Element | Object =} context
 * @returns {Element | Object | Boolean} O nó de entrada se aceitável, caso contrário, um valor falso
 * /
function testContext (context) {
	contexto de retorno && typeof context.getElementsByTagName! == "undefined" && context;
}

// Expor vars de suporte por conveniência
suporte = Sizzle.support = {};

/ **
 * Detecta nós XML
 * @param {Element | Object} elem Um elemento ou documento
 * @returns {Boolean} True iff elem é um nó XML não HTML
 * /
isXML = Sizzle.isXML = function (elem) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && (elem.ownerDocument || elem) .documentElement;

	// Suporte: IE <= 8
	// Assume HTML quando documentElement ainda não existe, como dentro de iframes de carregamento
	// https://bugs.jquery.com/ticket/4833
	return! rhtml.test (namespace || docElem && docElem.nodeName || "HTML");
};

/ **
 * Define as variáveis ​​relacionadas ao documento uma vez com base no documento atual
 * @param {Element | Object} [doc] Um elemento ou objeto de documento a ser usado para definir o documento
 * @returns {Object} Retorna o documento atual
 * /
setDocument = Sizzle.setDocument = function (node) {
	var hasCompare, subWindow,
		doc = nó? node.ownerDocument || nó: preferredDoc;

	// Retorne mais cedo se o documento for inválido ou já estiver selecionado
	// Suporte: IE 11+, Edge 17 - 18+
	// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
	// dois documentos; comparações superficiais funcionam.
	// eslint-disable-next-line eqeqeq
	if (doc == document || doc.nodeType! == 9 ||! doc.documentElement) {
		documento de devolução;
	}

	// Atualizar variáveis ​​globais
	documento = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (documento);

	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// Acessar documentos iframe após descarregar gera erros de "permissão negada" (jQuery # 13936)
	// Suporte: IE 11+, Edge 17 - 18+
	// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
	// dois documentos; comparações superficiais funcionam.
	// eslint-disable-next-line eqeqeq
	if (preferredDoc! = documento &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Suporte: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("unload", unloadHandler, false);

		// Suporte: IE 9 - 10 apenas
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	// Suporte: IE 8 - 11+, Edge 12 - 18+, Chrome <= 16 - 25 apenas, Firefox <= 3,6 - 31 apenas,
	// Safari 4 - 5 apenas, Opera <= 11.6 - 12.x apenas
	// IE / Edge e navegadores mais antigos não suportam a pseudo classe: scope.
	// Suporte: Safari 6.0 apenas
	// Safari 6.0 suporta: scope mas é um alias de: root ali.
	support.scope = assert (function (el) {
		docElem.appendChild (el) .appendChild (document.createElement ("div"));
		return typeof el.querySelectorAll! == "undefined" &&
			! el.querySelectorAll (": scope fieldset div") .length;
	});

	/* Atributos
	-------------------------------------------------- -------------------- * /

	// Suporte: IE <8
	// Verifique se getAttribute realmente retorna atributos e não propriedades
	// (exceto booleanos do IE8)
	support.attributes = assert (function (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) por *
	-------------------------------------------------- -------------------- * /

	// Verifique se getElementsByTagName ("*") retorna apenas elementos
	support.getElementsByTagName = assert (function (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*") .length;
	});

	// Suporte: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Suporte: IE <10
	// Verifique se getElementById retorna elementos por nome
	// Os métodos getElementById quebrados não selecionam nomes definidos programaticamente,
	// então, use um teste getElementsByName rotatório
	support.getById = assert (function (el) {
		docElem.appendChild (el) .id = expando;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// Filtro de ID e encontrar
	if (support.getById) {
		Expr.filter ["ID"] = função (id) {
			var attrId = id.replace (runescape, funescape);
			função de retorno (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = função (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var elem = context.getElementById (id);
				return elem? [elem]: [];
			}
		};
	} outro {
		Expr.filter ["ID"] = função (id) {
			var attrId = id.replace (runescape, funescape);
			função de retorno (elem) {
				var node = typeof elem.getAttributeNode! == "undefined" &&
					elem.getAttributeNode ("id");
				return node && node.value === attrId;
			};
		};

		// Suporte: IE 6 - 7 apenas
		// getElementById não é confiável como um atalho de localização
		Expr.find ["ID"] = função (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				nó var, i, elems,
					elem = context.getElementById (id);

				if (elem) {

					// Verifique o atributo id
					node = elem.getAttributeNode ("id");
					if (node ​​&& node.value === id) {
						return [elem];
					}

					// Recue em getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						node = elem.getAttributeNode ("id");
						if (node ​​&& node.value === id) {
							return [elem];
						}
					}
				}

				Retorna [];
			}
		};
	}

	// Marcação
	Expr.find ["TAG"] = support.getElementsByTagName?
		função (tag, contexto) {
			if (typeof context.getElementsByTagName! == "undefined") {
				return context.getElementsByTagName (tag);

			// Nós DocumentFragment não têm gEBTN
			} else if (support.qsa) {
				return context.querySelectorAll (tag);
			}
		}:

		função (tag, contexto) {
			var elem,
				tmp = [],
				i = 0,

				// Por feliz coincidência, um gEBTN (quebrado) também aparece nos nós DocumentFragment
				resultados = context.getElementsByTagName (tag);

			// Filtre comentários possíveis
			if (tag === "*") {
				while ((elem = resultados [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				return tmp;
			}
			resultados de retorno;
		};

	// Aula
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "undefined" && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / MatchSelector
	-------------------------------------------------- -------------------- * /

	// QSA e suporte para MatchSelector

	// MatchSelector (: active) relata falso quando verdadeiro (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) relata falso quando verdadeiro (Chrome 21)
	// Permitimos isso por causa de um bug no IE8 / 9 que gera um erro
	// sempre que `document.activeElement` é acessado em um iframe
	// Portanto, permitimos que: focus passe pelo QSA o tempo todo para evitar o erro do IE
	// Veja https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {

		// Construir QSA regex
		// Estratégia Regex adotada de Diego Perini
		assert (função (el) {

			var input;

			// Select é definido como string vazia propositalmente
			// Isso é para testar o tratamento do IE de não explicitamente
			// definindo um atributo de conteúdo booleano,
			// já que sua presença deve ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </option> </select>";

			// Suporte: IE8, Opera 11-12.16
			// Nada deve ser selecionado quando strings vazias seguem ^ = ou $ = ou * =
			// O atributo de teste deve ser desconhecido no Opera, mas "seguro" para WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[msallowcapture ^ = '']") .length) {
				rbuggyQSA.push ("[* ^ $] =" + espaço em branco + "* (?: '' | \" \ ")");
			}

			// Suporte: IE8
			// Atributos booleanos e "valor" não são tratados corretamente
			if (! el.querySelectorAll ("[selected]") .length) {
				rbuggyQSA.push ("\\ [" + espaço em branco + "* (?: valor |" + booleanos + ")");
			}

			// Suporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				rbuggyQSA.push ("~ =");
			}

			// Suporte: IE 11+, Edge 15 - 18+
			// IE 11 / Edge não encontra elementos em uma consulta `[name = '']` em alguns casos.
			// Adicionando um atributo temporário ao documento antes que a seleção funcione
			// em torno do problema.
			// Curiosamente, o IE 10 e mais antigos não parecem ter esse problema.
			input = document.createElement ("input");
			input.setAttribute ("nome", "");
			el.appendChild (entrada);
			if (! el.querySelectorAll ("[name = '']") .length) {
				rbuggyQSA.push ("\\ [" + espaço em branco + "* nome" + espaço em branco + "* =" +
					espaço em branco + "* (?: '' | \" \ ")");
			}

			// Webkit / Opera -: marcada deve retornar os elementos de opção selecionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 gera erro aqui e não verá testes posteriores
			if (! el.querySelectorAll (": verificado") .length) {
				rbuggyQSA.push (": verificado");
			}

			// Suporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector # id sibling-combinator selector` falha
			if (! el.querySelectorAll ("a #" + expando + "+ *") .length) {
				rbuggyQSA.push (". #. + [+ ~]");
			}

			// Suporte: Firefox <= 3,6 - 5 apenas
			// O Firefox antigo não apresenta um identificador com escape incorreto.
			el.querySelectorAll ("\\\ f");
			rbuggyQSA.push ("[\\ r \\ n \\ f]");
		});

		assert (função (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </select>";

			// Suporte: Aplicativos nativos do Windows 8
			// Os atributos de tipo e nome são restritos durante a atribuição de .innerHTML
			var input = document.createElement ("input");
			input.setAttribute ("type", "hidden");
			el.appendChild (entrada) .setAttribute ("nome", "D");

			// Suporte: IE8
			// Aplicar a diferenciação de maiúsculas e minúsculas do atributo de nome
			if (el.querySelectorAll ("[name = d]") .length) {
				rbuggyQSA.push ("nome" + espaço em branco + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: habilitado /: desabilitado e elementos ocultos (elementos ocultos ainda estão habilitados)
			// IE8 gera erro aqui e não verá testes posteriores
			if (el.querySelectorAll (": enabled") .length! == 2) {
				rbuggyQSA.push (": ativado", ": desativado");
			}

			// Suporte: IE9-11 +
			// IE's: o seletor desativado não pega os filhos de conjuntos de campos desativados
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled") .length! == 2) {
				rbuggyQSA.push (": ativado", ": desativado");
			}

			// Suporte: Opera 10-11 apenas
			// Opera 10-11 não lança pseudos inválidos pós-vírgula
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((coincide = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		assert (função (el) {

			// Verifique se é possível fazer matchSelector
			// em um nó desconectado (IE 9)
			support.disconnectedMatch = match.call (el, "*");

			// Isso deve falhar com uma exceção
			// Gecko não dá erro, retorna falso ao invés
			match.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contém
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// Elemento contém outro
	// Intencionalmente auto-exclusivo
	// Como em, um elemento não se contém
	contém = hasCompare || rnative.test (docElem.contains)?
		função (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			return a === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) e 16
			));
		}:
		função (a, b) {
			if (b) {
				while ((b = b.parentNode)) {
					if (b === a) {
						return true;
					}
				}
			}
			retorna falso;
		};

	/* Ordenação
	-------------------------------------------------- -------------------- * /

	// Classificação da ordem do documento
	sortOrder = hasCompare?
	função (a, b) {

		// Sinalizar para remoção duplicada
		if (a === b) {
			hasDuplicate = true;
			return 0;
		}

		// Classifica na existência do método se apenas uma entrada tiver compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		if (compare) {
			retornar comparar;
		}

		// Calcula a posição se ambas as entradas pertencem ao mesmo documento
		// Suporte: IE 11+, Edge 17 - 18+
		// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
		// dois documentos; comparações superficiais funcionam.
		// eslint-disable-next-line eqeqeq
		compare = (a.ownerDocument || a) == (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// Caso contrário, sabemos que eles estão desconectados
			1;

		// Nós desconectados
		if (compare & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === compare)) {

			// Escolha o primeiro elemento que está relacionado ao nosso documento preferido
			// Suporte: IE 11+, Edge 17 - 18+
			// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
			// dois documentos; comparações superficiais funcionam.
			// eslint-disable-next-line eqeqeq
			if (a == documento || a.ownerDocument == preferredDoc &&
				contém (preferencialDoc, a)) {
				return -1;
			}

			// Suporte: IE 11+, Edge 17 - 18+
			// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
			// dois documentos; comparações superficiais funcionam.
			// eslint-disable-next-line eqeqeq
			if (b == documento || b.ownerDocument == preferredDoc &&
				contém (preferidoDoc, b)) {
				return 1;
			}

			// Manter a ordem original
			return sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		retornar comparar & 4? -1: 1;
	}:
	função (a, b) {

		// Saia mais cedo se os nós forem idênticos
		if (a === b) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// Nós sem pais são documentos ou desconectados
		if (! aup ||! bup) {

			// Suporte: IE 11+, Edge 17 - 18+
			// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
			// dois documentos; comparações superficiais funcionam.
			/ * eslint-disable eqeqeq * /
			retornar um documento ==? -1:
				b == documento? 1:
				/ * eslint-enable eqeqeq * /
				aup? -1:
				bup? 1:
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Se os nós forem irmãos, podemos fazer uma verificação rápida
		} else if (aup === bup) {
			return siblingCheck (a, b);
		}

		// Caso contrário, precisamos de listas completas de seus ancestrais para comparação
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Desça a árvore procurando por uma discrepância
		enquanto (ap [i] === bp [i]) {
			i ++;
		}

		retorno eu?

			// Faça uma verificação de irmão se os nós têm um ancestral comum
			siblingCheck (ap [i], bp [i]):

			// Caso contrário, os nós em nosso documento são classificados primeiro
			// Suporte: IE 11+, Edge 17 - 18+
			// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
			// dois documentos; comparações superficiais funcionam.
			/ * eslint-disable eqeqeq * /
			ap [i] == preferredDoc? -1:
			bp [i] == preferredDoc? 1:
			/ * eslint-enable eqeqeq * /
			0;
	};

	documento de devolução;
};

Sizzle.matches = function (expr, elements) {
	retornar Sizzle (expr, nulo, nulo, elementos);
};

Sizzle.matchesSelector = function (elem, expr) {
	setDocument (elem);

	if (support.matchesSelector && documentIsHTML &&
		! nonnativeSelectorCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		tentar {
			var ret = jogos.call (elem, expr);

			// MatchSelector do IE 9 retorna falso em nós desconectados
			if (ret || support.disconnectedMatch ||

				// Da mesma forma, nós desconectados são considerados em um documento
				// fragmento no IE 9
				elem.document && elem.document.nodeType! == 11) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache (expr, true);
		}
	}

	retornar Sizzle (expr, documento, nulo, [elem]) .comprimento> 0;
};

Sizzle.contains = função (contexto, elem) {

	// Definir vars do documento se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
	// dois documentos; comparações superficiais funcionam.
	// eslint-disable-next-line eqeqeq
	if ((context.ownerDocument || context)! = document) {
		setDocument (contexto);
	}
	retorno contém (contexto, elem);
};

Sizzle.attr = function (elem, nome) {

	// Definir vars do documento se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
	// dois documentos; comparações superficiais funcionam.
	// eslint-disable-next-line eqeqeq
	if ((elem.ownerDocument || elem)! = documento) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],

		// Não se deixe enganar por propriedades Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, nome,! documentIsHTML):
			Indefinido;

	return val! == undefined?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (nome):
			(val = elem.getAttributeNode (nome)) && val.specified?
				val.value:
				nulo;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	lançar novo Erro ("Erro de sintaxe, expressão não reconhecida:" + msg);
};

/ **
 * Classificação de documentos e remoção de duplicatas
 * @param {ArrayLike} resultados
 * /
Sizzle.uniqueSort = function (resultados) {
	var elem,
		duplicatas = [],
		j = 0,
		i = 0;

	// A menos que * saibamos *, podemos detectar duplicatas, assuma a presença delas
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = resultados [i ++])) {
			if (elem === resultados [i]) {
				j = duplicatas.push (i);
			}
		}
		enquanto (j--) {
			resultados.splice (duplicatas [j], 1);
		}
	}

	// Limpe a entrada após a classificação para liberar objetos
	// Veja https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	resultados de retorno;
};

/ **
 * Função de utilidade para recuperar o valor de texto de uma matriz de nós DOM
 * @param {Array | Elemento} elem
 * /
getText = Sizzle.getText = function (elem) {
	nó var,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {

		// Se nenhum nodeType, espera-se que seja uma matriz
		while ((nó = elem [i ++])) {

			// Não atravesse os nós de comentários
			ret + = getText (nó);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {

		// Use textContent para elementos
		// uso de innerText removido para consistência de novas linhas (jQuery # 11153)
		if (typeof elem.textContent === "string") {
			return elem.textContent;
		} outro {

			// Atravesse seus filhos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = obterTexto (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}

	// Não inclua comentários ou nós de instrução de processamento

	return ret;
};

Expr = Sizzle.selectors = {

	// Pode ser ajustado pelo usuário
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	achar: {},

	relativo: {
		">": {dir: "parentNode", primeiro: verdadeiro},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", first: true},
		"~": {dir: "previousSibling"}
	},

	preFilter: {
		"ATTR": função (correspondência) {
			correspondência [1] = correspondência [1] .replace (runescape, funescape);

			// Mova o valor fornecido para corresponder a [3] entre aspas
			correspondência [3] = (correspondência [3] || correspondência [4] ||
				combinar [5] || "") .replace (runescape, funescape);

			if (corresponder [2] === "~ =") {
				correspondência [3] = "" + correspondência [3] + "";
			}

			retornar match.slice (0, 4);
		},

		"CRIANÇA": função (correspondência) {

			/ * corresponde a matchExpr ["CHILD"]
				1 tipo (apenas | enésimo | ...)
				2 o que (filho | do tipo)
				3 argumentos (par | ímpar | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 componente xn do argumento xn + y ([+ -]? \ D * n |)
				5 sinal do componente xn
				6 x do componente xn
				7 sinais do componente y
				8 y do componente y
			* /
			correspondência [1] = correspondência [1] .toLowerCase ();

			if (match [1] .slice (0, 3) === "enésimo") {

				// nth- * requer argumento
				if (! match [3]) {
					Sizzle.error (match [0]);
				}

				// parâmetros numéricos xey para Expr.filter.CHILD
				// lembre-se daquele elenco falso / verdadeiro respectivamente para 0/1
				correspondência [4] = + (correspondência [4]?
					correspondência [5] + (correspondência [6] || 1):
					2 * (correspondência [3] === "par" || correspondência [3] === "ímpar"));
				correspondência [5] = + ((correspondência [7] + correspondência [8]) || correspondência [3] === "ímpar");

				// outros tipos proíbem argumentos
			} else if (match [3]) {
				Sizzle.error (match [0]);
			}

			jogo de retorno;
		},

		"PSEUDO": função (correspondência) {
			excesso de var,
				unquoted =! match [6] && match [2];

			if (matchExpr ["CHILD"] .test (match [0])) {
				return null;
			}

			// Aceita argumentos citados como estão
			if (match [3]) {
				correspondência [2] = correspondência [4] || combinar [5] || "";

			// Retire o excesso de caracteres de argumentos não citados
			} else if (sem aspas && rpseudo.test (sem as aspas) &&

				// Obtenha o excesso do tokenize (recursivamente)
				(excesso = tokenizar (sem aspas, verdadeiro)) &&

				// avança para o próximo parêntese de fechamento
				(excesso = unquoted.indexOf (")", unquoted.length - excess) - unquoted.length)) {

				// excesso é um índice negativo
				correspondência [0] = correspondência [0] .slice (0, excesso);
				correspondência [2] = unquoted.slice (0, excesso);
			}

			// Retorna apenas as capturas necessárias para o método do pseudo-filtro (tipo e argumento)
			retornar match.slice (0, 3);
		}
	},

	filtro: {

		"TAG": função (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			return nodeNameSelector === "*"?
				function () {
					return true;
				}:
				função (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASS": função (className) {
			var pattern = classCache [className + ""];

			padrão de retorno ||
				(padrão = novo RegExp ("(^ |" + espaço em branco +
					")" + className + "(" + espaço em branco + "| $)")) && classCache (
						className, function (elem) {
							return pattern.test (
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute! == "undefined" &&
									elem.getAttribute ("classe") ||
								""
							);
				});
		},

		"ATTR": função (nome, operador, verificação) {
			função de retorno (elem) {
				var result = Sizzle.attr (elem, nome);

				if (resultado == null) {
					operador de retorno === "! =";
				}
				if (! operador) {
					return true;
				}

				resultado + = "";

				/ * eslint-disable max-len * /

				operador de retorno === "="? resultado === verificar:
					operador === "! ="? resultado! == verificar:
					operador === "^ ="? check && result.indexOf (check) === 0:
					operador === "* ="? check && result.indexOf (check)> -1:
					operador === "$ ="? check && result.slice (-check.length) === verificar:
					operador === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (verificar)> -1:
					operador === "| ="? resultado === verificar || result.slice (0, check.length + 1) === check + "-":
					falso;
				/ * eslint-enable max-len * /

			};
		},

		"CRIANÇA": função (tipo, o quê, _argumento, primeiro, último) {
			var simple = type.slice (0, 3)! == "enésimo",
				forward = type.slice (-4)! == "último",
				ofType = what === "of-type";

			retornar primeiro === 1 && último === 0?

				// Atalho para: enésimo - * (n)
				função (elem) {
					return !! elem.parentNode;
				}:

				function (elem, _context, xml) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simples! == para a frente? "nextSibling": "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = falso;

					if (pai) {

						//: (primeiro | último | apenas) - (filho | do tipo)
						if (simples) {
							while (dir) {
								nó = elem;
								while ((nó = nó [dir])) {
									if (ofType?
										node.nodeName.toLowerCase () === nome:
										node.nodeType === 1) {

										retorna falso;
									}
								}

								// Inverter direção para: only- * (se ainda não o tivermos feito)
								start = dir = type === "apenas" &&! start && "nextSibling";
							}
							return true;
						}

						start = [avançar? parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) armazena dados de cache no `pai`
						if (forward && useCache) {

							// Buscar `elem` de um índice previamente armazenado em cache

							// ... de uma forma amigável ao gzip
							nó = pai;
							outerCache = nó [expando] || (nó [expando] = {});

							// Suporte: apenas IE <9
							// Defenda-se contra as propriedades clonadas (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							cache = uniqueCache [tipo] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && node && node [dir] ||

								// Retorne à busca de `elem` desde o início
								(diff = nodeIndex = 0) || start.pop ())) {

								// Quando encontrado, os índices de cache em `pai` e quebram
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [tipo] = [dirruns, nodeIndex, diff];
									intervalo;
								}
							}

						} outro {

							// Use o índice do elemento previamente armazenado em cache, se disponível
							if (useCache) {

								// ... de uma forma amigável ao gzip
								nó = elem;
								outerCache = nó [expando] || (nó [expando] = {});

								// Suporte: apenas IE <9
								// Defenda-se contra as propriedades clonadas (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								cache = uniqueCache [tipo] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: n-ésimo filho (...)
							// ou: enésimo último filho (...) ou: enésimo (último)? - do tipo (...)
							if (diff === false) {

								// Use o mesmo loop acima para buscar `elem` desde o início
								while ((node ​​= ++ nodeIndex && node && node [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									if ((ofType?
										node.nodeName.toLowerCase () === nome:
										node.nodeType === 1) &&
										++ diff) {

										// Armazena em cache o índice de cada elemento encontrado
										if (useCache) {
											outerCache = nó [expando] ||
												(nó [expando] = {});

											// Suporte: apenas IE <9
											// Defenda-se contra as propriedades clonadas (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [tipo] = [dirruns, diff];
										}

										if (nó === elem) {
											intervalo;
										}
									}
								}
							}
						}

						// Incorpore o deslocamento e verifique o tamanho do ciclo
						diff - = último;
						retornar diff === primeiro || (diff% primeiro === 0 && diff / first> = 0);
					}
				};
		},

		"PSEUDO": função (pseudo, argumento) {

			// nomes de pseudoclasse não diferenciam maiúsculas de minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorizar diferenciando maiúsculas de minúsculas no caso de pseudos personalizados serem adicionados com letras maiúsculas
			// Lembre-se de que setFilters herda de pseudos
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo sem suporte:" + pseudo);

			// O usuário pode usar createPseudo para indicar que
			// argumentos são necessários para criar a função de filtro
			// assim como Sizzle faz
			if (fn [expando]) {
				return fn (argumento);
			}

			// Mas mantenha o suporte para assinaturas antigas
			if (fn.length> 1) {
				args = [pseudo, pseudo, "", argumento];
				return Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (function (seed, match) {
						var idx,
							correspondido = fn (semente, argumento),
							i = matched.length;
						enquanto eu-- ) {
							idx = indexOf (semente, correspondido [i]);
							semente [idx] =! (corresponde a [idx] = correspondido [i]);
						}
					}):
					função (elem) {
						retornar fn (elem, 0, args);
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Pseudos potencialmente complexos
		"não": markFunction (function (selector) {

			// Corte o seletor passado para compilar
			// para evitar o tratamento à frente e atrás
			// espaços como combinadores
			var input = [],
				resultados = [],
				matcher = compilar (selector.replace (rtrim, "$ 1"));

			return matcher [expando]?
				markFunction (function (seed, match, _context, xml) {
					var elem,
						unmatched = matcher (seed, null, xml, []),
						i = seed.length;

					// Corresponde a elementos não correspondidos por `matcher`
					enquanto eu-- ) {
						if ((elem = sem correspondência [i])) {
							semente [i] =! (corresponde a [i] = elem);
						}
					}
				}):
				function (elem, _context, xml) {
					entrada [0] = elem;
					matcher (entrada, nulo, xml, resultados);

					// Não guarde o elemento (edição # 299)
					entrada [0] = nulo;
					return! results.pop ();
				};
		}),

		"tem": markFunction (function (selector) {
			função de retorno (elem) {
				retorno Sizzle (seletor, elem) .length> 0;
			};
		}),

		"contém": markFunction (function (text) {
			text = text.replace (runescape, funescape);
			função de retorno (elem) {
				return (elem.textContent || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// "Se um elemento é representado por um seletor: lang ()
		// é baseado unicamente no valor de linguagem do elemento
		// sendo igual ao identificador C,
		// ou começando com o identificador C seguido imediatamente por "-".
		// A correspondência de C com o valor de linguagem do elemento é realizada sem distinção entre maiúsculas e minúsculas.
		// O identificador C não precisa ser um nome de idioma válido. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {

			// o valor lang deve ser um identificador válido
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("idioma não suportado:" + idioma);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			função de retorno (elem) {
				var elemLang;
				Faz {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				retorna falso;
			};
		}),

		// Diversos
		"destino": função (elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice (1) === elem.id;
		},

		"root": função (elem) {
			return elem === docElem;
		},

		"foco": função (elem) {
			return elem === document.activeElement &&
				(! document.hasFocus || document.hasFocus ()) &&
				!! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// propriedades booleanas
		"ativado": createDisabledPseudo (false),
		"disabled": createDisabledPseudo (true),

		"verificado": função (elem) {

			// Em CSS3,: check deve retornar os elementos selecionados e selecionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) ||
				(nodeName === "opção" && !! elem.selected);
		},

		"selecionado": função (elem) {

			// Acessar esta propriedade torna selecionado por padrão
			// opções no Safari funcionam corretamente
			if (elem.parentNode) {
				// eslint-disable-next-line no-unused-extensions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Conteúdo
		"vazio": função (elem) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: vazio é negado pelo elemento (1) ou nós de conteúdo (texto: 3; cdata: 4; entidade ref: 5),
			// mas não por outros (comentário: 8; instrução de processamento: 7; etc.)
			// nodeType <6 funciona porque os atributos (2) não aparecem como filhos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					retorna falso;
				}
			}
			return true;
		},

		"pai": função (elem) {
			return! Expr.pseudos ["vazio"] (elem);
		},

		// Tipos de elemento / entrada
		"cabeçalho": função (elem) {
			return rheader.test (elem.nodeName);
		},

		"entrada": função (elem) {
			return rinputs.test (elem.nodeName);
		},

		"botão": função (elem) {
			var name = elem.nodeName.toLowerCase ();
			return name === "input" && elem.type === "button" || nome === "botão";
		},

		"texto": função (elem) {
			var attr;
			return elem.nodeName.toLowerCase () === "input" &&
				elem.type === "texto" &&

				// Suporte: IE <8
				// Novos valores de atributo HTML5 (por exemplo, "pesquisa") aparecem com elem.type === "texto"
				((attr = elem.getAttribute ("type")) == null ||
					attr.toLowerCase () === "texto");
		},

		// Posição na coleção
		"primeiro": createPositionalPseudo (function () {
			return [0];
		}),

		"último": createPositionalPseudo (function (_matchIndexes, length) {
			return [comprimento - 1];
		}),

		"eq": createPositionalPseudo (function (_matchIndexes, length, argument) {
			retornar [argumento <0? argumento + comprimento: argumento];
		}),

		"even": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			para (; i <comprimento; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"ímpar": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			para (; i <comprimento; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0?
				argumento + comprimento:
				argumento> comprimento?
					comprimento :
					argumento;
			para (; --i> = 0;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0? argumento + comprimento: argumento;
			para (; ++ i <comprimento;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Adicionar botão / tipo de entrada pseudos
for (i in {radio: true, checkbox: true, file: true, password: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
for (i in {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API fácil para criar novos setFilters
function setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	var correspondido, correspondência, tokens, tipo,
		soFar, groups, preFilters,
		cached = tokenCache [seletor + ""];

	if (em cache) {
		return parseOnly? 0: cached.slice (0);
	}

	soFar = seletor;
	grupos = [];
	preFilters = Expr.preFilter;

	while (soFar) {

		// Vírgula e primeira execução
		if (! correspondido || (match = rcomma.exec (soFar))) {
			if (match) {

				// Não consuma vírgulas finais como válidas
				soFar = soFar.slice (match [0] .length) || até aqui;
			}
			groups.push ((tokens = []));
		}

		correspondido = falso;

		// Combinadores
		if ((match = rcombinators.exec (soFar))) {
			correspondido = match.shift ();
			tokens.push ({
				valor: correspondido,

				// Lança combinadores descendentes para o espaço
				tipo: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// Filtros
		para (digite Expr.filter) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(match = preFilters [type] (match)))) {
				correspondido = match.shift ();
				tokens.push ({
					valor: correspondido,
					tipo: tipo,
					jogos: jogo
				});
				soFar = soFar.slice (matched.length);
			}
		}

		if (! correspondido) {
			intervalo;
		}
	}

	// Retorna o comprimento do excesso inválido
	// se estamos apenas analisando
	// Caso contrário, lança um erro ou retorna tokens
	return parseOnly?
		soFar.length:
		até aqui ?
			Sizzle.error (seletor):

			// Armazene os tokens em cache
			tokenCache (seletor, grupos) .slice (0);
};

function toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		seletor = "";
	para (; i <len; i ++) {
		seletor + = tokens [i] .value;
	}
	seletor de retorno;
}

function addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		chave = pular || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done ++;

	retornar combinator.first?

		// Verifique o ancestral mais próximo / elemento anterior
		função (elem, contexto, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, contexto, xml);
				}
			}
			retorna falso;
		}:

		// Verifique todos os elementos ancestrais / precedentes
		função (elem, contexto, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// Não podemos definir dados arbitrários em nós XML, então eles não se beneficiam do armazenamento em cache do combinador
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, contexto, xml)) {
							return true;
						}
					}
				}
			} outro {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [expando] || (elem [expando] = {});

						// Suporte: apenas IE <9
						// Defenda-se contra as propriedades clonadas (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] ||
							(outerCache [elem.uniqueID] = {});

						if (skip && skip === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem;
						} else if ((oldCache = uniqueCache [chave]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Atribuir a newCache para que os resultados sejam propagados de volta para os elementos anteriores
							return (newCache [2] = oldCache [2]);
						} outro {

							// Reutilize o newcache para que os resultados se propaguem de volta para os elementos anteriores
							UniqueCache [chave] = newCache;

							// Uma correspondência significa que terminamos; uma falha significa que temos que continuar verificando
							if ((newCache [2] = matcher (elem, contexto, xml))) {
								return true;
							}
						}
					}
				}
			}
			retorna falso;
		};
}

function elementMatcher (matchers) {
	retornar matchers.length> 1?
		função (elem, contexto, xml) {
			var i = matchers.length;
			enquanto eu-- ) {
				if (! matchers [i] (elem, contexto, xml)) {
					retorna falso;
				}
			}
			return true;
		}:
		matchers [0];
}

function multipleContexts (seletor, contextos, resultados) {
	var i = 0,
		len = contexts.length;
	para (; i <len; i ++) {
		Sizzle (seletor, contextos [i], resultados);
	}
	resultados de retorno;
}

função condensar (sem correspondência, mapa, filtro, contexto, xml) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapeado = mapa! = nulo;

	para (; i <len; i ++) {
		if ((elem = sem correspondência [i])) {
			if (! filtro || filtro (elem, contexto, xml)) {
				newUnmatched.push (elem);
				if (mapeado) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (function (seed, results, context, xml) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Obtenha os elementos iniciais da semente ou do contexto
			elems = semente || multipleContexts (
				seletor || "*",
				context.nodeType? [contexto]: contexto,
				[]
			),

			// Pré-filtro para obter a entrada do matcher, preservando um mapa para a sincronização dos resultados iniciais
			matcherIn = preFilter && (seed ||! selector)?
				condensar (elems, preMap, preFilter, contexto, xml):
				elems,

			matcherOut = matcher?

				// Se tivermos um postFinder, ou semente filtrada, ou postFilter não semente ou resultados preexistentes,
				postFinder || (seed? preFilter: preexisting || postFilter)?

					// ... o processamento intermediário é necessário
					[]:

					// ... caso contrário, use os resultados diretamente
					resultados :
				matcherIn;

		// Encontre correspondências primárias
		if (matcher) {
			matcher (matcherIn, matcherOut, contexto, xml);
		}

		// Aplicar postFilter
		if (postFilter) {
			temp = condensar (matcherOut, postMap);
			postFilter (temp, [], contexto, xml);

			// Desfaça a correspondência de elementos com falha movendo-os de volta para matcherIn
			i = temp.length;
			enquanto eu-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		if (seed) {
			if (postFinder || preFilter) {
				if (postFinder) {

					// Obtenha o matcherOut final condensando este intermediário em contextos postFinder
					temp = [];
					i = matcherOut.length;
					enquanto eu-- ) {
						if ((elem = matcherOut [i])) {

							// Restaura matcherIn visto que elem ainda não é uma partida final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Mova os elementos correspondentes da semente aos resultados para mantê-los sincronizados
				i = matcherOut.length;
				enquanto eu-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (seed, elem): preMap [i])> -1) {

						semente [temp] =! (resultados [temp] = elem);
					}
				}
			}

		// Adicionar elementos aos resultados, por meio de postFinder se definido
		} outro {
			matcherOut = condensar (
				matcherOut === resultados?
					matcherOut.splice (preexisting, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (nulo, resultados, matcherOut, xml);
			} outro {
				push.apply (resultados, matcherOut);
			}
		}
	});
}

function matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadRelative = Expr.relative [tokens [0] .type],
		implicitRelative = LeadRelative || Expr.relative [""],
		i = líderRelativo? 1: 0,

		// O matcher básico garante que os elementos sejam alcançáveis ​​a partir de contextos de nível superior
		matchContext = addCombinator (function (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			retornar indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [função (elem, contexto, xml) {
			var ret = (! LeadRelative && (xml || context! == outermostContext)) || (
				(checkContext = contexto) .nodeType?
					matchContext (elem, contexto, xml):
					matchAnyContext (elem, contexto, xml));

			// Evite pendurar no elemento (problema # 299)
			checkContext = null;
			return ret;
		}];

	para (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} outro {
			matcher = Expr.filter [tokens [i] .type] .apply (null, tokens [i] .matches);

			// Retorne especial ao ver uma correspondência posicional
			if (matcher [expando]) {

				// Encontre o próximo operador relativo (se houver) para um tratamento adequado
				j = ++ i;
				para (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						intervalo;
					}
				}
				return setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (

					// Se o token anterior era um combinador descendente, insira um elemento qualquer implícito `*`
					fichas
						.slice (0, i - 1)
						.concat ({value: tokens [i - 2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					matcher,
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (tokens)
				);
			}
			matchers.push (matcher);
		}
	}

	return elementMatcher (matchers);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = function (seed, context, xml, results, outermost) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				incomparável = semente && [],
				setMatched = [],
				contextBackup = outermostContext,

				// Devemos sempre ter elementos semente ou contexto externo
				elems = semente || byElement && Expr.find ["TAG"] ("*", externo),

				// Use dirruns inteiros iff este for o matcher externo
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			if (externo) {

				// Suporte: IE 11+, Edge 17 - 18+
				// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
				// dois documentos; comparações superficiais funcionam.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || contexto || ultraperiféricas;
			}

			// Adicionar elementos passando elementMatchers diretamente aos resultados
			// Suporte: IE <9, Safari
			// Tolerar propriedades de NodeList (IE: "comprimento"; Safari: <número>) combinando elementos por id
			for (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;

					// Suporte: IE 11+, Edge 17 - 18+
					// IE / Edge às vezes gera um erro "Permissão negada" ao comparar estritamente
					// dois documentos; comparações superficiais funcionam.
					// eslint-disable-next-line eqeqeq
					if (! context && elem.ownerDocument! = document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, contexto || documento, xml)) {
							results.push (elem);
							intervalo;
						}
					}
					if (externo) {
						dirruns = dirrunsUnique;
					}
				}

				// Rastreia elementos sem correspondência para filtros definidos
				if (bySet) {

					// Eles terão passado por todos os combinadores possíveis
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Aumente o array para cada elemento, correspondido ou não
					if (seed) {
						unmatched.push (elem);
					}
				}
			}

			// `i` agora é a contagem dos elementos visitados acima, e adicionando-o a` matchedCount`
			// torna o último não negativo.
			matchedCount + = i;

			// Aplicar filtros definidos a elementos sem correspondência
			// NOTA: Isso pode ser ignorado se não houver elementos não correspondentes (ou seja, `matchedCount`
			// é igual a `i`), a menos que não visitamos _qualquer_ elementos no loop acima porque temos
			// sem correspondências de elemento e sem semente.
			// Incrementar uma string inicial "0" `i` permite que` i` permaneça uma string apenas naquele
			// caso, o que resultará em um "00" `matchedCount` que difere de` i`, mas também é
			// numericamente zero.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					matcher (incomparável, setMatched, contexto, xml);
				}

				if (seed) {

					// Reintegrar correspondências de elementos para eliminar a necessidade de classificação
					if (matchedCount> 0) {
						enquanto eu-- ) {
							if (! (unmatched [i] || setMatched [i])) {
								setMatched [i] = pop.call (resultados);
							}
						}
					}

					// Descarte os valores de espaço reservado do índice para obter apenas correspondências reais
					setMatched = condensar (setMatched);
				}

				// Adicionar correspondências aos resultados
				push.apply (resultados, setMatched);

				// As correspondências de conjuntos sem sementes sucessivas a várias correspondências bem-sucedidas estipulam a classificação
				if (ultraperiférico &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Substitui a manipulação de globais por matchers aninhados
			if (externo) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			retornar incomparável;
		};

	retornar bySet?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (selector, match / * Internal Use Only * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [seletor + ""];

	if (! cached) {

		// Gere uma função de funções recursivas que podem ser usadas para verificar cada elemento
		if (! match) {
			match = tokenize (seletor);
		}
		i = match.length;
		enquanto eu-- ) {
			cached = matcherFromTokens (match [i]);
			if (em cache [expando]) {
				setMatchers.push (em cache);
			} outro {
				elementMatchers.push (em cache);
			}
		}

		// Cache a função compilada
		cached = compilerCache (
			seletor,
			matcherFromGroupMatchers (elementMatchers, setMatchers)
		);

		// Salvar seletor e tokenização
		cached.selector = selector;
	}
	return cached;
};

/ **
 * Uma função de seleção de baixo nível que funciona com o compilado do Sizzle
 * funções do seletor
 * @param {String | Function} seletor Um seletor ou um pré-compilado
 * função de seletor construída com Sizzle.compile
 * @param {Element} context
 * @param {Array} [resultados]
 * @param {Array} [seed] Um conjunto de elementos para comparar
 * /
select = Sizzle.select = function (seletor, contexto, resultados, semente) {
	var i, tokens, token, type, find,
		compilado = seletor de tipo === "função" && seletor,
		match =! seed && tokenize ((selector = compilado.seletor || seletor));

	resultados = resultados || [];

	// Tente minimizar as operações se houver apenas um seletor na lista e nenhuma semente
	// (o último dos quais nos garante o contexto)
	if (match.length === 1) {

		// Reduza o contexto se o seletor de composto principal for um ID
		tokens = correspondência [0] = correspondência [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]) .type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0]
				.replace (runescape, funescape), context) || []) [0];
			if (! contexto) {
				resultados de retorno;

			// Matchers pré-compilados ainda verificarão ancestralidade, então suba um nível
			} else if (compilado) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). valor.length);
		}

		// Buscar um conjunto de sementes para correspondência da direita para a esquerda
		i = matchExpr ["needsContext"] .test (seletor)? 0: tokens.length;
		enquanto eu-- ) {
			token = tokens [i];

			// Aborta se atingirmos um combinador
			if (Expr.relative [(type = token.type)]) {
				intervalo;
			}
			if ((find = Expr.find [type])) {

				// Pesquisar, expandir o contexto para os principais combinadores de irmãos
				if ((seed = find (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) ||
						contexto
				))) {

					// Se a semente estiver vazia ou nenhum token permanecer, podemos retornar mais cedo
					tokens.splice (i, 1);
					seletor = seed.length && toSelector (tokens);
					if (! selector) {
						push.apply (resultados, semente);
						resultados de retorno;
					}

					intervalo;
				}
			}
		}
	}

	// Compila e executa uma função de filtragem se nenhuma for fornecida
	// Fornece `match` para evitar a retocagem se modificarmos o seletor acima
	(compilado || compilar (seletor, combinar)) (
		semente,
		contexto,
		! documentIsHTML,
		resultados,
		! contexto || rsibling.test (seletor) && testContext (context.parentNode) || contexto
	);
	resultados de retorno;
};

// Atribuições únicas

// Classificar estabilidade
support.sortStable = expando.split ("") .sort (sortOrder) .join ("") === expando;

// Suporte: Chrome 14-35 +
// Sempre assume duplicatas se elas não são passadas para a função de comparação
support.detectDuplicates = !! hasDuplicate;

// Inicializa no documento padrão
setDocument ();

// Suporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (corrigido no Chrome 27)
// Nós separados seguem confusamente * uns aos outros *
support.sortDetached = assert (function (el) {

	// Deve retornar 1, mas retorna 4 (seguinte)
	return el.compareDocumentPosition (document.createElement ("fieldset")) & 1;
});

// Suporte: IE <8
// Impedir atributo / propriedade "interpolação"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! assert (function (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("type | href | height | width", function (elem, name, isXML) {
		if (! isXML) {
			return elem.getAttribute (name, name.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Suporte: IE <9
// Use defaultValue no lugar de getAttribute ("value")
if (! support.attributes ||! assert (function (el) {
	el.innerHTML = "<input />";
	el.firstChild.setAttribute ("valor", "");
	return el.firstChild.getAttribute ("valor") === "";
})) {
	addHandle ("valor", função (elem, _name, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// Suporte: IE <9
// Use getAttributeNode para buscar booleanos quando getAttribute estiver
if (! assert (function (el) {
	return el.getAttribute ("disabled") == null;
})) {
	addHandle (booleanos, função (elem, nome, isXML) {
		var val;
		if (! isXML) {
			return elem [nome] === verdadeiro? name.toLowerCase ():
				(val = elem.getAttributeNode (nome)) && val.specified?
					val.value:
					nulo;
		}
	});
}

retorno Sizzle;

} )( janela );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Descontinuada
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = função (elem, dir, até) {
	var correspondido = [],
		truncar = até! == indefinido;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncar && jQuery (elem) .is (até)) {
				intervalo;
			}
			matched.push (elem);
		}
	}
	retorno correspondido;
};


var irmãos = função (n, elem) {
	var correspondido = [];

	para (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			matched.push (n);
		}
	}

	retorno correspondido;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName (elem, nome) {

	return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

}
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implementar a funcionalidade idêntica para o filtro e não
função winnow (elementos, qualificador, não) {
	if (isFunction (qualifier)) {
		return jQuery.grep (elementos, função (elem, i) {
			return !! qualifier.call (elem, i, elem)! == not;
		});
	}

	// Único elemento
	if (qualifier.nodeType) {
		return jQuery.grep (elementos, função (elem) {
			return (elem === qualifier)! == not;
		});
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if (qualificador typeof! == "string") {
		return jQuery.grep (elementos, função (elem) {
			return (indexOf.call (qualifier, elem)> -1)! == not;
		});
	}

	// Filtrado diretamente para seletores simples e complexos
	retornar jQuery.filter (qualificador, elementos, não);
}

jQuery.filter = function (expr, elems, não) {
	var elem = elems [0];

	se não ) {
		expr = ": não (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	return jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	find: function (selector) {
		var i, ret,
			len = this.length,
			self = this;

		if (seletor de tipo! == "string") {
			return this.pushStack (jQuery (selector) .filter (function () {
				para (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						return true;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		para (i = 0; i <len; i ++) {
			jQuery.find (seletor, self [i], ret);
		}

		return len> 1? jQuery.uniqueSort (ret): ret;
	},
	filtro: função (seletor) {
		return this.pushStack (winnow (this, seletor || [], false));
	},
	not: function (selector) {
		return this.pushStack (winnow (this, seletor || [], true));
	},
	é: função (seletor) {
		voltar !! winnow (
			esta,

			// Se este for um seletor posicional / relativo, verifique a associação no conjunto retornado
			// então $ ("p: primeiro"). is ("p: último") não retornará verdadeiro para um documento com dois "p".
			seletor typeof === "string" && rneedsContext.test (seletor)?
				jQuery (seletor):
				seletor || [],
			falso
		).comprimento;
	}
});


// Inicializa um objeto jQuery


// Uma referência central para o jQuery raiz (documento)
var rootjQuery,

	// Uma maneira simples de verificar strings HTML
	// Priorize #id sobre <tag> para evitar XSS via location.hash (# 9521)
	// Reconhecimento estrito de HTML (# 11290: deve começar com <)
	// Atalho simples #id case para velocidade
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = function (seletor, contexto, raiz) {
		var match, elem;

		// ALÇA: $ (""), $ (nulo), $ (indefinido), $ (falso)
		if (! selector) {
			devolva isso;
		}

		// O método init () aceita um rootjQuery alternativo
		// então a migração pode suportar jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Manipular strings HTML
		if (seletor de tipo === "string") {
			if (seletor [0] === "<" &&
				seletor [selector.length - 1] === ">" &&
				selector.length> = 3) {

				// Suponha que as strings que começam e terminam com <> são HTML e ignoram a verificação de regex
				correspondência = [nulo, seletor, nulo];

			} outro {
				match = rquickExpr.exec (seletor);
			}

			// Corresponda html ou certifique-se de que nenhum contexto seja especificado para #id
			if (match && (match [1] ||! contexto)) {

				// HANDLE: $ (html) -> $ (array)
				if (match [1]) {
					context = context instanceof jQuery? contexto [0]: contexto;

					// A opção de executar scripts é verdadeira para back-compat
					// Deixar intencionalmente o erro ser lançado se parseHTML não estiver presente
					jQuery.merge (this, jQuery.parseHTML (
						partida [1],
						context && context.nodeType? context.ownerDocument || contexto: documento,
						verdade
					));

					// HANDLE: $ (html, props)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (contexto)) {
						para (corresponder no contexto) {

							// As propriedades do contexto são chamadas como métodos, se possível
							if (isFunction (this [match])) {
								esta [correspondência] (contexto [correspondência]);

							// ... e de outra forma definido como atributos
							} outro {
								this.attr (correspondência, contexto [correspondência]);
							}
						}
					}

					devolva isso;

				// ALÇA: $ (# id)
				} outro {
					elem = document.getElementById (correspondência [2]);

					if (elem) {

						// Injetar o elemento diretamente no objeto jQuery
						este [0] = elem;
						this.length = 1;
					}
					devolva isso;
				}

			// ALÇA: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (context || root) .find (seletor);

			// HANDLE: $ (expr, contexto)
			// (que é apenas equivalente a: $ (contexto) .find (expr)
			} outro {
				retornar this.constructor (contexto) .find (seletor);
			}

		// HANDLE: $ (DOMElement)
		} else if (selector.nodeType) {
			este [0] = seletor;
			this.length = 1;
			devolva isso;

		// HANDLE: $ (função)
		// Atalho para documento pronto
		} else if (isFunction (selector)) {
			return root.ready! == undefined?
				root.ready (seletor):

				// Execute imediatamente se pronto não estiver presente
				seletor (jQuery);
		}

		return jQuery.makeArray (seletor, este);
	};

// Dê à função init o protótipo jQuery para instanciação posterior
init.prototype = jQuery.fn;

// Inicializa a referência central
rootjQuery = jQuery (documento);


var rparentsprev = / ^ (?: pais | prev (?: Até | Todos)) /,

	// Métodos garantidos para produzir um conjunto único ao iniciar de um conjunto único
	GuaranteedUnique = {
		filhos: verdade,
		conteúdo: verdadeiro,
		próximo: verdadeiro,
		prev: true
	};

jQuery.fn.extend ({
	has: function (target) {
		var targets = jQuery (target, this),
			l = targets.length;

		return this.filter (function () {
			var i = 0;
			para (; i <l; i ++) {
				if (jQuery.contains (this, targets [i])) {
					return true;
				}
			}
		});
	},

	mais próximo: função (seletores, contexto) {
		var cur,
			i = 0,
			l = this.length,
			correspondido = [],
			alvos = seletores de tipo! == "string" && jQuery (seletores);

		// Os seletores posicionais nunca combinam, uma vez que não há contexto _selection_
		if (! rneedsContext.test (seletores)) {
			para (; i <l; i ++) {
				for (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {

					// Sempre pule fragmentos de documentos
					if (cur.nodeType <11 && (alvos?
						targets.index (cur)> -1:

						// Não passe não elementos para Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, seletores))) {

						matched.push (cur);
						intervalo;
					}
				}
			}
		}

		retornar this.pushStack (matched.length> 1? jQuery.uniqueSort (correspondido): correspondido);
	},

	// Determine a posição de um elemento dentro do conjunto
	índice: função (elem) {

		// Sem argumento, retorna o índice no pai
		if (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Índice no seletor
		if (typeof elem === "string") {
			retornar indexOf.call (jQuery (elem), este [0]);
		}

		// Localize a posição do elemento desejado
		retornar indexOf.call (este,

			// Se receber um objeto jQuery, o primeiro elemento é usado
			elem.jquery? elem [0]: elem
		);
	},

	add: function (selector, context) {
		return this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (seletor, contexto))
			)
		);
	},

	addBack: function (selector) {
		return this.add (selector == null?
			this.prevObject: this.prevObject.filter (seletor)
		);
	}
});

irmão função (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	return cur;
}

jQuery.each ({
	pai: função (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? pai: nulo;
	},
	pais: função (elem) {
		return dir (elem, "parentNode");
	},
	pais até: função (elem, _i, até) {
		return dir (elem, "parentNode", até);
	},
	próximo: função (elem) {
		return sibling (elem, "nextSibling");
	},
	prev: função (elem) {
		return sibling (elem, "previousSibling");
	},
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	},
	prevAll: function (elem) {
		return dir (elem, "previousSibling");
	},
	próximo até: função (elem, _i, até) {
		return dir (elem, "nextSibling", até);
	},
	prevUntil: function (elem, _i, até) {
		return dir (elem, "previousSibling", até);
	},
	irmãos: função (elem) {
		retornar irmãos ((elem.parentNode || {}) .firstChild, elem);
	},
	filhos: função (elem) {
		retornar irmãos (elem.firstChild);
	},
	conteúdo: função (elem) {
		if (elem.contentDocument! = null &&

			// Suporte: IE 11+
			// Os elementos <object> sem atributo `data` têm um objeto
			// `contentDocument` com um protótipo` null`.
			getProto (elem.contentDocument)) {

			return elem.contentDocument;
		}

		// Suporte: apenas IE 9-11, apenas iOS 7, navegador Android <= 4.3 apenas
		// Trate o elemento do modelo como um elemento normal em navegadores que
		// não suporta isso.
		if (nodeName (elem, "template")) {
			elem = elem.content || elem;
		}

		return jQuery.merge ([], elem.childNodes);
	}
}, função (nome, fn) {
	jQuery.fn [nome] = função (até, seletor) {
		var matched = jQuery.map (this, fn, até);

		if (name.slice (-5)! == "Até") {
			seletor = até;
		}

		if (seletor && typeof selector === "string") {
			correspondido = jQuery.filter (seletor, correspondido);
		}

		if (this.length> 1) {

			// Remover duplicatas
			if (! GuaranteedUnique [nome]) {
				jQuery.uniqueSort (combinado);
			}

			// Ordem reversa para pais * e derivados anteriores
			if (rparentsprev.test (nome)) {
				matched.reverse ();
			}
		}

		return this.pushStack (combinado);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Converter opções formatadas em String em opções formatadas em Objeto
function createOptions (options) {
	var object = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		objeto [sinalizador] = verdadeiro;
	});
	objeto de retorno;
}

/ *
 * Crie uma lista de retorno de chamada usando os seguintes parâmetros:
 *
 * options: uma lista opcional de opções separadas por espaços que irão mudar como
 * a lista de retorno de chamada se comporta ou um objeto de opção mais tradicional
 *
 * Por padrão, uma lista de retorno de chamada agirá como uma lista de retorno de chamada de evento e pode ser
 * "disparado" várias vezes.
 *
 * Opções possíveis:
 *
 * uma vez: irá garantir que a lista de retorno de chamada só possa ser disparada uma vez (como um Adiado)
 *
 * memória: manterá o controle dos valores anteriores e chamará qualquer retorno de chamada adicionado
 * depois que a lista foi disparada imediatamente com o último "memorizado"
 * valores (como Adiado)
 *
 * exclusivo: garantirá que um retorno de chamada só possa ser adicionado uma vez (sem duplicatas na lista)
 *
 * stopOnFalse: interrompe chamadas quando um retorno de chamada retorna falso
 *
 * /
jQuery.Callbacks = função (opções) {

	// Converta opções de formatado em string para formatado em objeto, se necessário
	// (verificamos no cache primeiro)
	options = typeof options === "string"?
		createOptions (opções):
		jQuery.extend ({}, opções);

	var // Sinalizar para saber se a lista está disparando no momento
		disparando,

		// Último valor de disparo para listas não esquecíveis
		memória,

		// Sinalize para saber se a lista já foi disparada
		despedido,

		// Sinalize para evitar disparos
		trancado,

		// Lista real de retorno de chamada
		lista = [],

		// Fila de dados de execução para listas repetíveis
		fila = [],

		// Índice do retorno de chamada atualmente disparado (modificado por adicionar / remover conforme necessário)
		firingIndex = -1,

		// Fire callbacks
		fogo = função () {

			// Aplicar disparo único
			bloqueado = bloqueado || options.once;

			// Execute callbacks para todas as execuções pendentes,
			// respeitando as substituições firingIndex e as mudanças no tempo de execução
			disparado = disparado = verdadeiro;
			para (; queue.length; firingIndex = -1) {
				memória = queue.shift ();
				while (++ firingIndex <list.length) {

					// Execute o retorno de chamada e verifique o encerramento antecipado
					if (list [firingIndex] .apply (memory [0], memory [1]) === false &&
						options.stopOnFalse) {

						// Pule para o fim e esqueça os dados para que .add não seja disparado novamente
						firingIndex = list.length;
						memória = falso;
					}
				}
			}

			// Esqueça os dados se terminarmos com eles
			if (! options.memory) {
				memória = falso;
			}

			disparo = falso;

			// Limpe se terminarmos de atirar para sempre
			if (bloqueado) {

				// Mantenha uma lista vazia se tivermos dados para chamadas de adição futuras
				if (memória) {
					lista = [];

				// Caso contrário, este objeto é gasto
				} outro {
					lista = "";
				}
			}
		},

		// Objeto de callbacks reais
		self = {

			// Adicione um retorno de chamada ou uma coleção de retornos de chamada à lista
			add: function () {
				if (lista) {

					// Se tivermos memória de uma execução anterior, devemos disparar após adicionar
					if (memória &&! disparo) {
						firingIndex = list.length - 1;
						queue.push (memória);
					}

					(função add (args) {
						jQuery.each (args, function (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "string") {

								// Inspecione recursivamente
								add (arg);
							}
						});
					}) (argumentos);

					if (memória &&! disparo) {
						fogo();
					}
				}
				devolva isso;
			},

			// Remova um retorno de chamada da lista
			remove: function () {
				jQuery.each (argumentos, função (_, arg) {
					índice var;
					while ((index = jQuery.inArray (arg, list, index))> -1) {
						lista.splice (índice, 1);

						// Lidar com índices de disparo
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				devolva isso;
			},

			// Verifique se um determinado retorno de chamada está na lista.
			// Se nenhum argumento for fornecido, retorna se a lista tem callbacks anexados ou não.
			tem: função (fn) {
				retornar fn?
					jQuery.inArray (fn, list)> -1:
					comprimento da lista> 0;
			},

			// Remova todos os retornos de chamada da lista
			vazio: function () {
				if (lista) {
					lista = [];
				}
				devolva isso;
			},

			// Desativar .fire e .add
			// Aborta qualquer execução atual / pendente
			// Limpa todos os retornos de chamada e valores
			desativar: função () {
				bloqueado = fila = [];
				lista = memória = "";
				devolva isso;
			},
			disabled: function () {
				return! list;
			},

			// Desativar .fire
			// Também desative .add, a menos que tenhamos memória (uma vez que não teria efeito)
			// Aborta todas as execuções pendentes
			lock: function () {
				bloqueado = fila = [];
				if (! memória &&! disparo) {
					lista = memória = "";
				}
				devolva isso;
			},
			bloqueado: função () {
				retorno !! bloqueado;
			},

			// Chame todos os retornos de chamada com o contexto e os argumentos fornecidos
			fireWith: function (context, args) {
				if (! bloqueado) {
					args = args || [];
					args = [contexto, args.slice? args.slice (): args];
					queue.push (args);
					if (! disparando) {
						fogo();
					}
				}
				devolva isso;
			},

			// Chame todos os callbacks com os argumentos fornecidos
			fogo: função () {
				self.fireWith (this, argumentos);
				devolva isso;
			},

			// Para saber se os callbacks já foram chamados pelo menos uma vez
			disparado: function () {
				voltar !! despedido;
			}
		};

	retornar a si mesmo;
};


função Identidade (v) {
	return v;
}
function Thrower (ex) {
	jogue ex;
}

function adoptValue (valor, resolver, rejeitar, noValue) {
	método var;

	tentar {

		// Verifique o aspecto da promessa primeiro para privilegiar o comportamento síncrono
		if (value && isFunction ((method = value.promise))) {
			método.call (valor) .done (resolver) .fail (rejeitar);

		// Outros então
		} else if (value && isFunction ((method = value.then))) {
			método.call (valor, resolver, rejeitar);

		// Outros não-tenáveis
		} outro {

			// Controle os argumentos `resolve` permitindo que Array # slice converta o booleano` noValue` em um inteiro:
			// * falso: [valor] .slice (0) => resolver (valor)
			// * verdadeiro: [valor] .slice (1) => resolve ()
			resolve.apply (undefined, [value] .slice (noValue));
		}

	// Para Promises / A +, converta exceções em rejeições
	// Uma vez que jQuery.when não desembrulhará os itens, podemos pular as verificações extras que aparecem em
	// Adiado # então para suprimir condicionalmente a rejeição.
	} catch (value) {

		// Suporte: Android 4.0 apenas
		// Funções de modo estrito invocadas sem .call / .apply obter contexto de objeto global
		rejeitar.aplicar (indefinido, [valor]);
	}
}

jQuery.extend ({

	Adiado: function (func) {
		var tuples = [

				// ação, adicionar ouvinte, retornos de chamada,
				// ... .então manipuladores, índice de argumento, [estado final]
				["notificar", "progresso", jQuery.Callbacks ("memória"),
					jQuery.Callbacks ("memória"), 2],
				["resolver", "feito", jQuery.Callbacks ("memória única"),
					jQuery.Callbacks ("uma vez na memória"), 0, "resolvido"],
				["rejeitar", "falhar", jQuery.Callbacks ("uma vez na memória"),
					jQuery.Callbacks ("uma vez na memória"), 1, "rejeitado"]
			],
			estado = "pendente",
			promessa = {
				função estatal() {
					estado de retorno;
				},
				sempre: function () {
					deferred.done (argumentos) .fail (argumentos);
					devolva isso;
				},
				"catch": function (fn) {
					retornar promessa.então (nulo, fn);
				},

				// Manter o tubo para back-compat
				pipe: function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = argumentos;

					return jQuery.Deferred (function (newDefer) {
						jQuery.each (tuplas, função (_i, tupla) {

							// Mapeia tuplas (progresso, concluído, falha) para argumentos (concluído, falha, progresso)
							var fn = isFunction (fns [tupla [4]]) && fns [tupla [4]];

							// deferred.progress (function () {vincular a newDefer ou newDefer.notify})
							// deferred.done (function () {vincular a newDefer ou newDefer.resolve})
							// deferred.fail (function () {vincular a newDefer ou newDefer.reject})
							diferido [tupla [1]] (função () {
								var retornou = fn && fn.apply (isto, argumentos);
								if (return && isFunction (return.promise)) {
									return.promise ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} outro {
									newDefer [tuple [0] + "Com"] (
										esta,
										fn? [retornou]: argumentos
									);
								}
							});
						});
						fns = nulo;
					} ).promessa();
				},
				então: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					função resolver (profundidade, diferido, manipulador, especial) {
						return function () {
							var that = this,
								args = argumentos,
								mayThrow = function () {
									var voltou, então;

									// Suporte: Promessas / A + seção 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignora as tentativas de resolução dupla
									if (profundidade <maxDepth) {
										Retorna;
									}

									return = handler.apply (that, args);

									// Suporte: Promessas / A + seção 2.3.1
									// https://promisesaplus.com/#point-48
									if (return === deferred.promise ()) {
										lance novo TypeError ("Thenable self-resolution");
									}

									// Suporte: Promessas / A + seções 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recupere `then` apenas uma vez
									então = retornou &&

										// Suporte: Promessas / A + seção 2.3.4
										// https://promisesaplus.com/#point-64
										// Verifique apenas objetos e funções para sua capacidade
										(typeof retornou === "objeto" ||
											typeof retornou === "função") &&
										retornou.então;

									// Lidar com um thenable retornado
									if (isFunction (then)) {

										// Processadores especiais (notificar) apenas aguardem a resolução
										if (especial) {
											Em seguida, ligue(
												devolvida,
												resolver (maxDepth, diferido, identidade, especial),
												resolver (maxDepth, diferido, lançador, especial)
											);

										// Processadores normais (resolver) também entram em andamento
										} outro {

											// ... e desconsiderar os valores de resolução mais antigos
											maxDepth ++;

											Em seguida, ligue(
												devolvida,
												resolver (maxDepth, diferido, identidade, especial),
												resolver (maxDepth, adiado, Lançador, especial),
												resolver (maxDepth, diferido, identidade,
													deferred.notifyWith)
											);
										}

									// Lida com todos os outros valores retornados
									} outro {

										// Apenas manipuladores substitutos passam o contexto
										// e vários valores (comportamento não específico)
										if (handler! == Identity) {
											que = indefinido;
											args = [retornado];
										}

										// Processa o (s) valor (es)
										// O processo padrão é resolvido
										(especial || deferred.resolveWith) (que, args);
									}
								},

								// Apenas processadores normais (resolvem) capturam e rejeitam exceções
								processo = especial?
									mayThrow:
									function () {
										tentar {
											mayThrow ();
										} catch (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Suporte: Promessas / A + seção 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar exceções de pós-resolução
											if (profundidade + 1> = maxDepth) {

												// Apenas manipuladores substitutos passam o contexto
												// e vários valores (comportamento não específico)
												if (manipulador! == Lançador) {
													que = indefinido;
													args = [e];
												}

												deferred.rejectWith (that, args);
											}
										}
									};

							// Suporte: Promessas / A + seção 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Resolva as promessas imediatamente para evitar a falsa rejeição de
							// erros subsequentes
							if (profundidade) {
								processar();
							} outro {

								// Chame um gancho opcional para registrar a pilha, em caso de exceção
								// já que é perdido quando a execução fica assíncrona
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (processo);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuplas [0] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onProgress)?
									em progresso :
									Identidade,
								newDefer.notifyWith
							)
						);

						// preenchido_handlers.add (...)
						tuplas [1] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onFulfilled)?
									onFulfilled:
									Identidade
							)
						);

						// rejeitado manipuladores.add (...)
						tuplas [2] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onRejected)?
									onRejected:
									Atirador
							)
						);
					} ).promessa();
				},

				// Faça uma promessa por este adiado
				// Se obj for fornecido, o aspecto da promessa é adicionado ao objeto
				promessa: função (obj) {
					return obj! = null? jQuery.extend (obj, promessa): promessa;
				}
			},
			diferido = {};

		// Adicionar métodos específicos de lista
		jQuery.each (tuplas, função (i, tupla) {
			var list = tuple [2],
				stateString = tupla [5];

			// promessa.progress = list.add
			// promessa.done = list.add
			// promessa.fail = list.add
			promessa [tupla [1]] = list.add;

			// Handle state
			if (stateString) {
				list.add (
					function () {

						// estado = "resolvido" (ou seja, cumprido)
						// estado = "rejeitado"
						state = stateString;
					},

					// rejeitado_callbacks.disable
					// cumprido_callbacks.disable
					tuplas [3 - i] [2]. desabilitar,

					// rejeitado manipuladores.disable
					// completed_handlers.disable
					tuplas [3 - i] [3]. desabilitar,

					// progress_callbacks.lock
					tuplas [0] [2] .lock,

					// progress_handlers.lock
					tuplas [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// Complilled_handlers.fire
			// rejeitado_handlers.fire
			list.add (tupla [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			diferido [tupla [0]] = função () {
				diferido [tupla [0] + "Com"] (isto === diferido? indefinido: isto, argumentos);
				devolva isso;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			adiada [tupla [0] + "Com"] = list.fireWith;
		});

		// Faça ao adiado uma promessa
		promessa.promessa (adiada);

		// Chame a função dada, se houver
		if (func) {
			func.call (diferido, diferido);
		}

		// Tudo feito!
		retorno adiado;
	},

	// Auxiliar adiado
	quando: function (singleValue) {
		var

			// contagem de subordinados incompletos
			restante = argumentos.comprimento,

			// contagem de argumentos não processados
			i = restante,

			// dados de cumprimento subordinados
			resolveContexts = Array (i),
			resolveValues ​​= slice.call (argumentos),

			// o principal Adiado
			primário = jQuery.Deferred (),

			// fábrica de retorno de chamada subordinada
			updateFunc = function (i) {
				função de retorno (valor) {
					resolveContexts [i] = isso;
					resolveValues ​​[i] = arguments.length> 1? slice.call (argumentos): valor;
					if (! (--remaining)) {
						primary.resolveWith (resolveContexts, resolveValues);
					}
				};
			};

		// Argumentos simples e vazios são adotados como Promise.resolve
		if (restante <= 1) {
			adoptValue (singleValue, primary.done (updateFunc (i)) .resolve, primary.reject,
				!remanescente );

			// Use .then () para desembrulhar thenables secundários (cf. gh-3000)
			if (primary.state () === "pendente" ||
				isFunction (resolveValues ​​[i] && resolveValues ​​[i] .then)) {

				return primary.then ();
			}
		}

		// Vários argumentos são agregados como elementos da matriz Promise.all
		enquanto eu-- ) {
			adoptValue (resolveValues ​​[i], updateFunc (i), primary.reject);
		}

		return primary.promise ();
	}
});


// Isso geralmente indica um erro do programador durante o desenvolvimento,
// avisa sobre eles o mais rápido possível ao invés de engoli-los por padrão.
var rerrorNames = / ^ (Eval | Interno | Intervalo | Referência | Sintaxe | Tipo | URI) Erro $ /;

jQuery.Deferred.exceptionHook = função (erro, pilha) {

	// Suporte: IE 8 - 9 apenas
	// O console existe quando as ferramentas de desenvolvimento estão abertas, o que pode acontecer a qualquer momento
	if (window.console && window.console.warn && error && rerrorNames.test (error.name)) {
		window.console.warn ("exceção jQuery.Deferred:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		erro de lançamento;
	});
};




// O adiado usado no DOM pronto
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	readyList
		.então (fn)

		// Envolva jQuery.readyException em uma função para que a pesquisa
		// acontece no momento do tratamento do erro em vez do retorno de chamada
		// cadastro.
		.catch (função (erro) {
			jQuery.readyException (erro);
		});

	devolva isso;
};

jQuery.extend ({

	// O DOM está pronto para ser usado? Defina como verdadeiro assim que ocorrer.
	isReady: false,

	// Um ​​contador para rastrear quantos itens esperar antes
	// o evento pronto dispara. Veja # 6781
	readyWait: 1,

	// Manipular quando o DOM estiver pronto
	pronto: função (esperar) {

		// Aborta se houver retenções pendentes ou se já estivermos prontos
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			Retorna;
		}

		// Lembre-se de que o DOM está pronto
		jQuery.isReady = true;

		// Se um evento DOM Ready normal disparado, decrementar e esperar se necessário
		if (espere! == true && --jQuery.readyWait> 0) {
			Retorna;
		}

		// Se houver funções vinculadas, para executar
		readyList.resolveWith (document, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// O manipulador de eventos pronto e método de auto-limpeza
função concluída () {
	document.removeEventListener ("DOMContentLoaded", concluído);
	window.removeEventListener ("carregar", concluído);
	jQuery.ready ();
}

// Captura casos em que $ (document) .ready () é chamado
// depois que o evento do navegador já ocorreu.
// Suporte: IE <= 9 - 10 apenas
// IE mais antigo às vezes indica "interativo" cedo demais
if (document.readyState === "completo" ||
	(document.readyState! == "carregando" &&! document.documentElement.doScroll)) {

	// Manipule de forma assíncrona para permitir que os scripts tenham a oportunidade de ficar prontos
	window.setTimeout (jQuery.ready);

} outro {

	// Use o retorno de chamada de evento útil
	document.addEventListener ("DOMContentLoaded", concluído);

	// Um ​​fallback para window.onload, que sempre funcionará
	window.addEventListener ("carregar", concluído);
}




// Método multifuncional para obter e definir os valores de uma coleção
// O valor / s pode ser executado opcionalmente se for uma função
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Define muitos valores
	if (toType (key) === "objeto") {
		acorrentável = verdadeiro;
		para (i na chave) {
			access (elems, fn, i, key [i], true, emptyGet, raw);
		}

	// Define um valor
	} else if (value! == undefined) {
		acorrentável = verdadeiro;

		if (! isFunction (value)) {
			raw = true;
		}

		if (bulk) {

			// As operações em massa são executadas em todo o conjunto
			if (raw) {
				fn.call (elems, valor);
				fn = nulo;

			// ... exceto ao executar valores de função
			} outro {
				bulk = fn;
				fn = função (elem, _chave, valor) {
					retornar bulk.call (jQuery (elem), valor);
				};
			}
		}

		if (fn) {
			para (; i <len; i ++) {
				fn (
					elems [i], chave, cru?
						valor :
						valor.call (elems [i], i, fn (elems [i], chave))
				);
			}
		}
	}

	if (encadeavel) {
		return elems;
	}

	// Obtém
	if (bulk) {
		return fn.call (elems);
	}

	return len? fn (elems [0], tecla): emptyGet;
};


// Corresponde à string tracejada para camelizar
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// Usado por camelCase como retorno de chamada para replace ()
function fcamelCase (_all, letter) {
	return letter.toUpperCase ();
}

// Converter tracejado em camelCase; usado pelos módulos css e dados
// Suporte: IE <= 9 - 11, Edge 12 - 15
// A Microsoft esqueceu de alterar o prefixo do fornecedor (# 9572)
function camelCase (string) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = função (proprietário) {

	// Aceita apenas:
	// - Nó
	// - Node.ELEMENT_NODE
	// - Nó.DOCUMENT_NODE
	// - objeto
	// - Nenhum
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




function Data () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	cache: função (proprietário) {

		// Verifique se o objeto proprietário já tem um cache
		var value = owner [this.expando];

		// Caso contrário, crie um
		if (! valor) {
			valor = {};

			// Podemos aceitar dados para nós que não são elementos em navegadores modernos,
			// mas não devemos, consulte # 8335.
			// Sempre retorna um objeto vazio.
			if (acceptData (owner)) {

				// Se for um nó improvável de ser transformado em string ou em loop
				// use atribuição simples
				if (owner.nodeType) {
					proprietário [this.expando] = valor;

				// Caso contrário, proteja-o em uma propriedade não enumerável
				// configurável deve ser verdadeiro para permitir que a propriedade seja
				// excluído quando os dados são removidos
				} outro {
					Object.defineProperty (proprietário, this.expando, {
						valor: valor,
						configurável: verdadeiro
					});
				}
			}
		}

		valor de retorno;
	},
	conjunto: função (proprietário, dados, valor) {
		var prop,
			cache = this.cache (proprietário);

		// Handle: [owner, key, value] args
		// Sempre use a chave camelCase (gh-2257)
		if (typeof data === "string") {
			cache [camelCase (dados)] = valor;

		// Handle: [owner, {properties}] args
		} outro {

			// Copie as propriedades uma por uma para o objeto de cache
			para (prop em dados) {
				cache [camelCase (prop)] = dados [prop];
			}
		}
		cache de retorno;
	},
	get: function (owner, key) {
		chave de retorno === indefinido?
			this.cache (proprietário):

			// Sempre use a chave camelCase (gh-2257)
			owner [this.expando] && owner [this.expando] [camelCase (chave)];
	},
	acesso: função (proprietário, chave, valor) {

		// Nos casos em que:
		//
		// 1. Nenhuma chave foi especificada
		// 2. Uma chave de string foi especificada, mas nenhum valor fornecido
		//
		// Pegue o caminho "ler" e permita que o método get determine
		// qual valor retornar, respectivamente:
		//
		// 1. Todo o objeto de cache
		// 2. Os dados armazenados na chave
		//
		if (chave === indefinido ||
				((chave && typeof key === "string") && value === undefined)) {

			retornar this.get (proprietário, chave);
		}

		// Quando a chave não é uma string, ou uma chave e um valor
		// são especificados, definidos ou estendidos (objetos existentes) com:
		//
		// 1. Um objeto de propriedades
		// 2. Uma chave e um valor
		//
		this.set (proprietário, chave, valor);

		// Uma vez que o caminho "definido" pode ter dois pontos de entrada possíveis
		// retorna os dados esperados com base em qual caminho foi percorrido [*]
		valor de retorno! == undefined? valor: chave;
	},
	remover: função (proprietário, chave) {
		var i,
			cache = proprietário [this.expando];

		if (cache === indefinido) {
			Retorna;
		}

		if (chave! == undefined) {

			// Suporta array ou string de chaves separadas por espaço
			if (Array.isArray (key)) {

				// Se a chave é um array de chaves ...
				// Sempre definimos as chaves camelCase, portanto, remova-as.
				key = key.map (camelCase);
			} outro {
				chave = camelCase (chave);

				// Se existe uma chave com os espaços, use-a.
				// Caso contrário, crie uma matriz combinando espaços não em branco
				chave = chave no cache?
					[ chave ] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			enquanto eu-- ) {
				excluir cache [chave [i]];
			}
		}

		// Remova o expando se não houver mais dados
		if (key === undefined || jQuery.isEmptyObject (cache)) {

			// Suporte: Chrome <= 35 - 45
			// O desempenho do Webkit & Blink é afetado ao excluir propriedades
			// a partir de nós DOM, então defina como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restrito)
			if (owner.nodeType) {
				proprietário [this.expando] = indefinido;
			} outro {
				excluir proprietário [this.expando];
			}
		}
	},
	hasData: function (owner) {
		var cache = proprietário [this.expando];
		cache de retorno! == undefined &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// Resumo da implementação
//
// 1. Aplicar superfície API e compatibilidade semântica com branch 1.9.x
// 2. Melhore a capacidade de manutenção do módulo reduzindo o armazenamento
// caminhos para um único mecanismo.
// 3. Use o mesmo mecanismo único para suportar dados "privados" e "do usuário".
// 4. _Nunca_ exponha dados "privados" ao código do usuário (TODO: Drop _data, _removeData)
// 5. Evite expor detalhes de implementação em objetos de usuário (por exemplo, propriedades expando)
// 6. Fornece um caminho claro para a atualização de implementação do WeakMap em 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

function getData (data) {
	if (data === "true") {
		return true;
	}

	if (data === "false") {
		retorna falso;
	}

	if (dados === "nulo") {
		return null;
	}

	// Só converte para um número se não mudar a string
	if (dados === + dados + "") {
		return + data;
	}

	if (rbrace.test (data)) {
		retornar JSON.parse (dados);
	}

	dados de retorno;
}

function dataAttr (elem, chave, dados) {
	var name;

	// Se nada foi encontrado internamente, tente buscar qualquer
	// dados do atributo HTML5 data- *
	if (dados === undefined && elem.nodeType === 1) {
		nome = "dados-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		dados = elem.getAttribute (nome);

		if (typeof data === "string") {
			tentar {
				dados = getData (dados);
			} catch (e) {}

			// Certifique-se de definir os dados para que não sejam alterados posteriormente
			dataUser.set (elem, chave, dados);
		} outro {
			dados = indefinido;
		}
	}
	dados de retorno;
}

jQuery.extend ({
	hasData: function (elem) {
		return dataUser.hasData (elem) || dataPriv.hasData (elem);
	},

	dados: função (elem, nome, dados) {
		retornar dataUser.access (elem, nome, dados);
	},

	removeData: function (elem, name) {
		dataUser.remove (elem, nome);
	},

	// TODO: Agora que todas as chamadas para _data e _removeData foram substituídas
	// com chamadas diretas para métodos dataPriv, eles podem ser descontinuados.
	_data: função (elem, nome, dados) {
		retornar dataPriv.access (elem, nome, dados);
	},

	_removeData: função (elem, nome) {
		dataPriv.remove (elem, nome);
	}
});

jQuery.fn.extend ({
	dados: função (chave, valor) {
		var i, nome, dados,
			elem = este [0],
			attrs = elem && elem.attributes;

		// Obtém todos os valores
		if (chave === indefinido) {
			if (this.length) {
				dados = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = comprimento de atrito;
					enquanto eu-- ) {

						// Suporte: apenas IE 11
						// Os elementos attrs podem ser nulos (# 14894)
						if (attrs [i]) {
							name = attrs [i] .name;
							if (name.indexOf ("data-") === 0) {
								nome = camelCase (name.slice (5));
								dataAttr (elem, nome, dados [nome]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", true);
				}
			}

			dados de retorno;
		}

		// Define vários valores
		if (typeof key === "objeto") {
			return this.each (function () {
				dataUser.set (esta, chave);
			});
		}

		acesso de retorno (isto, função (valor) {
			var data;

			// O objeto jQuery de chamada (correspondências de elemento) não está vazio
			// (e, portanto, tem um elemento que aparece neste [0]) e o
			// parâmetro `valor` não foi indefinido. Um objeto jQuery vazio
			// resultará em `undefined` para elem = this [0] que irá
			// lança uma exceção se for feita uma tentativa de ler um cache de dados.
			if (elem && value === undefined) {

				// Tenta obter dados do cache
				// A chave sempre será camelCased in Data
				dados = dataUser.get (elem, chave);
				if (dados! == indefinido) {
					dados de retorno;
				}

				// Tenta "descobrir" os dados em
				// HTML5 custom data- * attrs
				data = dataAttr (elem, chave);
				if (dados! == indefinido) {
					dados de retorno;
				}

				// Nós tentamos muito, mas os dados não existem.
				Retorna;
			}

			// Defina os dados ...
			this.each (function () {

				// Sempre armazenamos a chave camelCased
				dataUser.set (isto, chave, valor);
			});
		}, nulo, valor, argumentos. comprimento> 1, nulo, verdadeiro);
	},

	removeData: function (key) {
		return this.each (function () {
			dataUser.remove (esta, chave);
		});
	}
});


jQuery.extend ({
	fila: função (elem, tipo, dados) {
		var queue;

		if (elem) {
			tipo = (digite || "fx") + "fila";
			fila = dataPriv.get (elem, tipo);

			// Acelere o desenfileiramento saindo rapidamente se for apenas uma pesquisa
			if (dados) {
				if (! queue || Array.isArray (data)) {
					fila = dataPriv.access (elem, tipo, jQuery.makeArray (dados));
				} outro {
					queue.push (dados);
				}
			}
			fila de retorno || [];
		}
	},

	dequeue: function (elem, type) {
		tipo = tipo || "fx";

		var queue = jQuery.queue (elem, tipo),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, tipo),
			próxima = função () {
				jQuery.dequeue (elem, tipo);
			};

		// Se a fila fx for retirada da fila, sempre remova a sentinela de progresso
		if (fn === "em andamento") {
			fn = queue.shift ();
			startLength--;
		}

		if (fn) {

			// Adicione uma sentinela de progresso para evitar que a fila de câmbio seja
			// desenfileirado automaticamente
			if (digite === "fx") {
				queue.unshift ("em andamento");
			}

			// Limpa a última função de parada da fila
			delete hooks.stop;
			fn.call (elem, próximo, ganchos);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	},

	// Não é público - gera um objeto queueHooks ou retorna o atual
	_queueHooks: function (elem, type) {
		var key = type + "queueHooks";
		return dataPriv.get (elem, key) || dataPriv.access (elem, key, {
			vazio: jQuery.Callbacks ("uma vez na memória") .add (function () {
				dataPriv.remove (elem, [digite + "fila", chave]);
			})
		});
	}
});

jQuery.fn.extend ({
	fila: função (tipo, dados) {
		var setter = 2;

		if (typeof type! == "string") {
			dados = tipo;
			tipo = "fx";
			normatizador--;
		}

		if (arguments.length <setter) {
			return jQuery.queue (this [0], tipo);
		}

		dados de retorno === indefinido?
			esta :
			this.each (function () {
				var queue = jQuery.queue (this, type, data);

				// Garanta ganchos para esta fila
				jQuery._queueHooks (este, digite);

				if (digite === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (this, type);
				}
			});
	},
	dequeue: function (type) {
		return this.each (function () {
			jQuery.dequeue (this, type);
		});
	},
	clearQueue: function (type) {
		retornar this.queue (digite || "fx", []);
	},

	// Obter uma promessa resolvida quando há filas de um certo tipo
	// são esvaziados (fx é o tipo por padrão)
	promessa: função (tipo, obj) {
		var tmp,
			contagem = 1,
			defer = jQuery.Deferred (),
			elementos = isso,
			i = this.length,
			resolve = function () {
				if (! (--count)) {
					defer.resolveWith (elements, [elements]);
				}
			};

		if (typeof type! == "string") {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		enquanto eu-- ) {
			tmp = dataPriv.get (elementos [i], digite + "queueHooks");
			if (tmp && tmp.empty) {
				contagem ++;
				tmp.empty.add (resolver);
			}
		}
		resolver();
		return defer.promise (obj);
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/) .source;

var rcssNum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Superior", "Direita", "Inferior", "Esquerda"];

var documentElement = document.documentElement;



	var isAttached = function (elem) {
			return jQuery.contains (elem.ownerDocument, elem);
		},
		composto = {composto: verdadeiro};

	// Suporte: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 apenas
	// Verifique o anexo através dos limites do DOM sombra, quando possível (gh-3504)
	// Suporte: iOS 10.0-10.2 apenas
	// As primeiras versões do iOS 10 suportam `attachShadow`, mas não` getRootNode`,
	// levando a erros. Precisamos verificar se há `getRootNode`.
	if (documentElement.getRootNode) {
		isAttached = function (elem) {
			return jQuery.contains (elem.ownerDocument, elem) ||
				elem.getRootNode (composto) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree pode ser chamado a partir da função de filtro # jQuery;
		// nesse caso, o elemento será o segundo argumento
		elem = el || elem;

		// Estilo embutido supera tudo
		return elem.style.display === "nenhum" ||
			elem.style.display === "" &&

			// Caso contrário, verifique o estilo calculado
			// Suporte: Firefox <= 43 - 45
			// Os elementos desconectados podem ter exibição computada: nenhum, então primeiro confirme se o elemento é
			// no documento.
			isAttached (elem) &&

			jQuery.css (elem, "display") === "nenhum";
	};



função AdjustCSS (elem, prop, valueParts, tween) {
	var ajustada, escala,
		maxIterations = 20,
		currentValue = tween?
			function () {
				return tween.cur ();
			}:
			function () {
				retornar jQuery.css (elem, prop, "");
			},
		inicial = valor atual (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// O cálculo do valor inicial é necessário para possíveis incompatibilidades de unidade
		initialInUnit = elem.nodeType &&
			(jQuery.cssNumber [prop] || unit! == "px" && + inicial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unidade) {

		// Suporte: Firefox <= 54
		// Divida pela metade o valor alvo da iteração para evitar a interferência dos limites superiores de CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confiança relatadas por jQuery.css
		unidade = unidade || initialInUnit [3];

		// Iterativamente aproximado de um ponto de partida diferente de zero
		initialInUnit = + inicial || 1;

		while (maxIterations--) {

			// Avalie e atualize nossa melhor estimativa (duplicando as estimativas que zeram).
			// Terminar se a escala for igual ou cruzar 1 (tornando o antigo * novo produto não positivo).
			jQuery.style (elem, prop, initialInUnit + unidade);
			if ((1 - escala) * (1 - (escala = valor atual () / inicial || 0,5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / escala;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unidade);

		// Certifique-se de atualizar as propriedades de interpolação mais tarde
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + inicial || 0;

		// Aplicar deslocamento relativo (+ = / - =) se especificado
		ajustado = valorPartes [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ peças de valor [2];
		if (tween) {
			tween.unit = unidade;
			tween.start = initialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

function getDefaultDisplay (elem) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [nodeName];

	if (display) {
		display de retorno;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	if (exibir === "nenhum") {
		display = "bloquear";
	}
	defaultDisplayMap [nodeName] = display;

	display de retorno;
}

function showHide (elements, show) {
	var display, elem,
		valores = [],
		índice = 0,
		length = elements.length;

	// Determine o novo valor de exibição para os elementos que precisam ser alterados
	para (; índice <comprimento; índice ++) {
		elem = elementos [índice];
		if (! elem.style) {
			Prosseguir;
		}

		display = elem.style.display;
		if (show) {

			// Uma vez que forçamos a visibilidade sobre os elementos ocultos em cascata, um imediato (e lento)
			// a verificação é necessária neste primeiro loop, a menos que tenhamos um valor de exibição não vazio (qualquer
			// inline ou prestes a ser restaurado)
			if (exibir === "nenhum") {
				valores [índice] = dataPriv.get (elem, "display") || nulo;
				if (! valores [índice]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				valores [índice] = getDefaultDisplay (elem);
			}
		} outro {
			if (display! == "none") {
				valores [índice] = "nenhum";

				// Lembre-se do que estamos substituindo
				dataPriv.set (elem, "exibir", exibir);
			}
		}
	}

	// Defina a exibição dos elementos em um segundo loop para evitar refluxo constante
	para (índice = 0; índice <comprimento; índice ++) {
		if (valores [índice]! = nulo) {
			elementos [índice] .style.display = valores [índice];
		}
	}

	elementos de retorno;
}

jQuery.fn.extend ({
	show: function () {
		return showHide (this, true);
	},
	ocultar: função () {
		return showHide (this);
	},
	alternar: função (estado) {
		if (typeof state === "boolean") {
			estado de retorno? this.show (): this.hide ();
		}

		return this.each (function () {
			if (isHiddenWithinTree (this)) {
				jQuery (this) .show ();
			} outro {
				jQuery (this) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: caixa de seleção | rádio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) / i);

var rscriptType = (/ ^ $ | ^ module $ | \ / (?: java | ecma) script / i);



(função () {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ("div")),
		input = document.createElement ("input");

	// Suporte: Android 4.0 - 4.3 apenas
	// Verifique o estado perdido se o nome estiver definido (# 11217)
	// Suporte: Windows Web Apps (WWA)
	// `name` e` type` devem usar .setAttribute para WWA (# 14901)
	input.setAttribute ("tipo", "rádio");
	input.setAttribute ("verificado", "verificado");
	input.setAttribute ("nome", "t");

	div.appendChild (entrada);

	// Suporte: Android <= 4.1 apenas
	// O WebKit mais antigo não clona o estado verificado corretamente em fragmentos
	support.checkClone = div.cloneNode (true) .cloneNode (true) .lastChild.checked;

	// Suporte: IE <= 11 apenas
	// Certifique-se de que textarea (e caixa de seleção) defaultValue está devidamente clonado
	div.innerHTML = "<textarea> x </textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;

	// Suporte: IE <= 9 apenas
	// IE <= 9 substitui as tags <option> por seu conteúdo quando inserido fora de
	// o elemento selecionado.
	div.innerHTML = "<option> </option>";
	support.option = !! div.lastChild;
}) ();


// Temos que fechar essas tags para suportar XHTML (# 13200)
var wrapMap = {

	// Os analisadores XHTML não inserem elementos magicamente no
	// da mesma forma que os analisadores de sopa de tags fazem. Portanto, não podemos encurtar
	// isso omitindo <tbody> ou outros elementos obrigatórios.
	thead: [1, "<table>", "</table>"],
	col: [2, "<table> <colgroup>", "</colgroup> </table>"],
	tr: [2, "<table> <tbody>", "</tbody> </table>"],
	td: [3, "<table> <tbody> <tr>", "</tr> </tbody> </table>"],

	_padrão: [0, "", ""]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Suporte: IE <= 9 apenas
if (! support.option) {
	wrapMap.optgroup = wrapMap.option = [1, "<select multiple = 'multiple'>", "</select>"];
}


function getAll (context, tag) {

	// Suporte: IE <= 9 - 11 apenas
	// Use typeof para evitar a invocação de método de argumento zero em objetos de host (# 15151)
	var ret;

	if (typeof context.getElementsByTagName! == "undefined") {
		ret = context.getElementsByTagName (tag || "*");

	} else if (typeof context.querySelectorAll! == "undefined") {
		ret = context.querySelectorAll (tag || "*");

	} outro {
		ret = [];
	}

	if (tag === undefined || tag && nodeName (context, tag)) {
		return jQuery.merge ([contexto], ret);
	}

	return ret;
}


// Marcar scripts como já avaliados
function setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		dataPriv.set (
			elems [i],
			"globalEval",
			! RefElements || dataPriv.get (refElements [i], "globalEval")
		);
	}
}


var rhtml = / <| & #? \ w +; /;

function buildFragment (elems, contexto, scripts, seleção, ignorado) {
	var elem, tmp, tag, wrap, anexado, j,
		fragment = context.createDocumentFragment (),
		nodes = [],
		i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		elem = elems [i];

		if (elem || elem === 0) {

			// Adicionar nós diretamente
			if (toType (elem) === "objeto") {

				// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
				// push.apply (_, arraylike) lança no antigo WebKit
				jQuery.merge (nós, elem.nodeType? [elem]: elem);

			// Converte não-html em um nó de texto
			} else if (! rhtml.test (elem)) {
				nodes.push (context.createTextNode (elem));

			// Converter html em nós DOM
			} outro {
				tmp = tmp || fragment.appendChild (context.createElement ("div"));

				// Desserializa uma representação padrão
				tag = (rtagName.exec (elem) || ["", ""]) [1] .toLowerCase ();
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter (elem) + wrap [2];

				// Desça através dos invólucros para o conteúdo certo
				j = embrulhar [0];
				enquanto (j--) {
					tmp = tmp.lastChild;
				}

				// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
				// push.apply (_, arraylike) lança no antigo WebKit
				jQuery.merge (nós, tmp.childNodes);

				// Lembre-se do contêiner de nível superior
				tmp = fragment.firstChild;

				// Certifique-se de que os nós criados sejam órfãos (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// Remova o invólucro do fragmento
	fragment.textContent = "";

	i = 0;
	while ((elem = nodes [i ++])) {

		// Pula elementos que já estão na coleção de contexto (trac-4087)
		if (seleção && jQuery.inArray (elem, seleção)> -1) {
			if (ignorado) {
				ignorado.push (elem);
			}
			Prosseguir;
		}

		anexado = isAttached (elem);

		// Anexar ao fragmento
		tmp = getAll (fragment.appendChild (elem), "script");

		// Preserve o histórico de avaliação do script
		if (anexado) {
			setGlobalEval (tmp);
		}

		// Captura executáveis
		if (scripts) {
			j = 0;
			while ((elem = tmp [j ++])) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	fragmento de retorno;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue () {
	return true;
}

function returnFalse () {
	retorna falso;
}

// Suporte: IE <= 9 - 11+
// focus () e blur () são assíncronos, exceto quando não operam.
// Portanto, espere que o foco seja síncrono quando o elemento já estiver ativo,
// e desfoque para ser síncrono quando o elemento ainda não estiver ativo.
// (o foco e o desfoque são sempre síncronos em outros navegadores compatíveis,
// isso apenas define quando podemos contar com isso).
function expectSync (elem, tipo) {
	return (elem === safeActiveElement ()) === (digite === "foco");
}

// Suporte: IE <= 9 apenas
// Acessar document.activeElement pode lançar inesperadamente
// https://bugs.jquery.com/ticket/13393
function safeActiveElement () {
	tentar {
		return document.activeElement;
	} pegar (errar) {}
}

função em (elem, tipos, seletor, dados, fn, um) {
	var origFn, tipo;

	// Tipos podem ser um mapa de tipos / manipuladores
	if (typeof types === "objeto") {

		// (tipos-objeto, seletor, dados)
		if (seletor de tipo! == "string") {

			// (tipos-objeto, dados)
			dados = dados || seletor;
			seletor = indefinido;
		}
		para (digite em tipos) {
			on (elem, tipo, seletor, dados, tipos [tipo], um);
		}
		return elem;
	}

	if (data == null && fn == null) {

		// (tipos, fn)
		fn = seletor;
		dados = seletor = indefinido;
	} else if (fn == null) {
		if (seletor de tipo === "string") {

			// (tipos, seletor, fn)
			fn = dados;
			dados = indefinido;
		} outro {

			// (tipos, dados, fn)
			fn = dados;
			dados = seletor;
			seletor = indefinido;
		}
	}
	if (fn === false) {
		fn = returnFalse;
	} else if (! fn) {
		return elem;
	}

	if (one === 1) {
		origFn = fn;
		fn = função (evento) {

			// Pode usar um conjunto vazio, uma vez que o evento contém a informação
			jQuery (). off (evento);
			retornar origFn.apply (this, argumentos);
		};

		// Use o mesmo guid para que o chamador possa remover usando origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
	}
	return elem.each (function () {
		jQuery.event.add (this, types, fn, data, selector);
	});
}

/ *
 * Funções auxiliares para gerenciamento de eventos - não faz parte da interface pública.
 * Adereços à biblioteca addEvent de Dean Edwards para muitas das idéias.
 * /
jQuery.event = {

	global: {},

	add: function (elem, types, handler, data, selector) {

		var handleObjIn, eventHandle, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.get (elem);

		// Apenas anexa eventos a objetos que aceitam dados
		if (! acceptData (elem)) {
			Retorna;
		}

		// O chamador pode passar um objeto de dados personalizados no lugar do manipulador
		if (handler.handler) {
			handleObjIn = manipulador;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Certifique-se de que os seletores inválidos gerem exceções no momento do anexo
		// Avalie em relação a documentElement no caso de elem ser um nó de não elemento (por exemplo, documento)
		if (seletor) {
			jQuery.find.matchesSelector (documentElement, selector);
		}

		// Certifique-se de que o manipulador tenha um ID exclusivo, usado para localizá-lo / removê-lo posteriormente
		if (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// Inicia a estrutura do evento do elemento e o manipulador principal, se este for o primeiro
		if (! (events = elemData.events)) {
			eventos = elemData.events = Object.create (nulo);
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {

				// Descarta o segundo evento de um jQuery.event.trigger () e
				// quando um evento é chamado depois que uma página foi descarregada
				return typeof jQuery! == "undefined" && jQuery.event.triggered! == e.type?
					jQuery.event.dispatch.apply (elem, argumentos): indefinido;
			};
		}

		// Lida com vários eventos separados por um espaço
		tipos = (tipos || "") .match (rnothtmlwhite) || [""];
		t = types.length;
		enquanto (t--) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// * Deve * haver um tipo, nenhum manipulador somente de namespace anexado
			if (! type) {
				Prosseguir;
			}

			// Se o evento mudar de tipo, use os manipuladores de eventos especiais para o tipo alterado
			special = jQuery.event.special [type] || {};

			// Se o seletor for definido, determine o tipo de API de evento especial, caso contrário, o tipo fornecido
			type = (selector? special.delegateType: special.bindType) || modelo;

			// Atualizar especial com base no tipo de redefinição recente
			special = jQuery.event.special [type] || {};

			// handleObj é passado para todos os manipuladores de eventos
			handleObj = jQuery.extend ({
				tipo: tipo,
				origType: origType,
				dados: dados,
				handler: handler,
				guid: handler.guid,
				seletor: seletor,
				needsContext: selector && jQuery.expr.match.needsContext.test (selector),
				namespace: namespaces.join (".")
			}, handleObjIn);

			// Inicie a fila do manipulador de eventos se formos os primeiros
			if (! (manipuladores = eventos [tipo])) {
				manipuladores = eventos [tipo] = [];
				handlers.delegateCount = 0;

				// Use apenas addEventListener se o manipulador de eventos especiais retornar falso
				if (! special.setup ||
					special.setup.call (elem, dados, namespaces, eventHandle) === false) {

					if (elem.addEventListener) {
						elem.addEventListener (type, eventHandle);
					}
				}
			}

			if (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Adicionar à lista de manipuladores do elemento, delegados na frente
			if (seletor) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} outro {
				handlers.push (handleObj);
			}

			// Acompanhe quais eventos já foram usados, para otimização de eventos
			jQuery.event.global [type] = true;
		}

	},

	// Desanexar um evento ou conjunto de eventos de um elemento
	remove: function (elem, types, handler, selector, mappedTypes) {

		var j, origCount, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.hasData (elem) && dataPriv.get (elem);

		if (! elemData ||! (events = elemData.events)) {
			Retorna;
		}

		// Uma vez para cada type.namespace em tipos; tipo pode ser omitido
		tipos = (tipos || "") .match (rnothtmlwhite) || [""];
		t = types.length;
		enquanto (t--) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// Desvincula todos os eventos (neste namespace, se fornecido) para o elemento
			if (! type) {
				para (digite eventos) {
					jQuery.event.remove (elem, tipo + tipos [t], manipulador, seletor, verdadeiro);
				}
				Prosseguir;
			}

			special = jQuery.event.special [type] || {};
			type = (selector? special.delegateType: special.bindType) || modelo;
			manipuladores = eventos [tipo] || [];
			tmp = tmp [2] &&
				new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)");

			// Remover eventos correspondentes
			origCount = j = handlers.length;
			enquanto (j--) {
				handleObj = manipuladores [j];

				if ((mappedTypes || origType === handleObj.origType) &&
					(! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(! selector || selector === handleObj.selector ||
						seletor === "**" && handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// Remova o manipulador de eventos genérico se removemos algo e não existem mais manipuladores
			// (evita o potencial de recursão infinita durante a remoção de manipuladores de eventos especiais)
			if (origCount &&! handlers.length) {
				if (! special.teardown ||
					special.teardown.call (elem, namespaces, elemData.handle) === false) {

					jQuery.removeEvent (elem, tipo, elemData.handle);
				}

				excluir eventos [tipo];
			}
		}

		// Remova os dados e o expando se não for mais usado
		if (jQuery.isEmptyObject (eventos)) {
			dataPriv.remove (elem, "manipular eventos");
		}
	},

	dispatch: function (nativeEvent) {

		var i, j, ret, combinado, handleObj, handlerQueue,
			args = new Array (arguments.length),

			// Faça um jQuery.Event gravável a partir do objeto de evento nativo
			event = jQuery.event.fix (nativeEvent),

			manipuladores = (
				dataPriv.get (this, "eventos") || Object.create (null)
			) [event.type] || [],
			special = jQuery.event.special [event.type] || {};

		// Use o jQuery.Event corrigido em vez do evento nativo (somente leitura)
		args [0] = evento;

		para (i = 1; i <argumentos.comprimento; i ++) {
			args [i] = argumentos [i];
		}

		event.delegateTarget = this;

		// Chame o gancho preDispatch para o tipo mapeado e deixe-o desaparecer, se desejar
		if (special.preDispatch && special.preDispatch.call (this, event) === false) {
			Retorna;
		}

		// Determinar manipuladores
		handlerQueue = jQuery.event.handlers.call (este, evento, manipuladores);

		// Execute os delegados primeiro; eles podem querer parar a propagação abaixo de nós
		i = 0;
		while ((correspondido = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matched.elem;

			j = 0;
			while ((handleObj = matched.handlers [j ++]) &&
				! event.isImmediatePropagationStopped ()) {

				// Se o evento tiver um namespace, cada manipulador só será invocado se for
				// especialmente universal ou seus namespaces são um superconjunto do do evento.
				if (! event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}) .handle ||
						handleObj.handler) .apply (matched.elem, args);

					if (ret! == indefinido) {
						if ((event.result = ret) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// Chame o gancho postDispatch para o tipo mapeado
		if (special.postDispatch) {
			special.postDispatch.call (este, evento);
		}

		return event.result;
	},

	manipuladores: função (evento, manipuladores) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Encontre manipuladores delegados
		if (delegateCount &&

			// Suporte: IE <= 9
			// Árvores de instância <use> de SVG de buraco negro (trac-13180)
			cur.nodeType &&

			// Suporte: Firefox <= 42
			// Suprime cliques que violam as especificações indicando um botão apontador não primário (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Suporte: apenas IE 11
			// ... mas não os "cliques" da tecla de seta das entradas de rádio, que podem ter `botão` -1 (gh-2343)
			! (event.type === "click" && event.button> = 1)) {

			for (; cur! == this; cur = cur.parentNode || this) {

				// Não verifique não elementos (# 13208)
				// Não processa cliques em elementos desativados (# 6911, # 8165, # 11382, # 11764)
				if (cur.nodeType === 1 &&! (event.type === "click" && cur.disabled === true)) {
					matchedHandlers = [];
					matchedSelectors = {};
					para (i = 0; i <delegateCount; i ++) {
						handleObj = manipuladores [i];

						// Não entre em conflito com as propriedades Object.prototype (# 13203)
						sel = handleObj.selector + "";

						if (matchedSelectors [sel] === undefined) {
							matchedSelectors [sel] = handleObj.needsContext?
								jQuery (sel, this) .index (cur)> -1:
								jQuery.find (sel, this, null, [cur]) .length;
						}
						if (matchedSelectors [sel]) {
							matchedHandlers.push (handleObj);
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push ({elem: cur, manipuladores: matchedHandlers});
					}
				}
			}
		}

		// Adicione os manipuladores restantes (ligados diretamente)
		cur = isso;
		if (delegateCount <handlers.length) {
			handlerQueue.push ({elem: cur, manipuladores: handlers.slice (delegateCount)});
		}

		return handlerQueue;
	},

	addProp: function (name, hook) {
		Object.defineProperty (jQuery.Event.prototype, name, {
			enumerável: verdadeiro,
			configurável: verdadeiro,

			get: isFunction (hook)?
				function () {
					if (this.originalEvent) {
						gancho de retorno (this.originalEvent);
					}
				}:
				function () {
					if (this.originalEvent) {
						retornar this.originalEvent [nome];
					}
				},

			definir: função (valor) {
				Object.defineProperty (this, name, {
					enumerável: verdadeiro,
					configurável: verdadeiro,
					gravável: verdadeiro,
					valor: valor
				});
			}
		});
	},

	fix: function (originalEvent) {
		return originalEvent [jQuery.expando]?
			originalEvent:
			novo jQuery.Event (originalEvent);
	},

	especial: {
		carregar: {

			// Evita que eventos de image.load acionados borbulhem em window.load
			noBubble: true
		},
		click: {

			// Utilize o evento nativo para garantir o estado correto para entradas verificáveis
			configuração: função (dados) {

				// Para compressibilidade mútua com _default, substitua o acesso `this` por um var local.
				// `|| data` é um código morto destinado apenas a preservar a variável por meio da minimização.
				var el = this || dados;

				// Solicite o primeiro manipulador
				if (rcheckableType.test (el.type) &&
					el.clique && nodeName (el, "input")) {

					// dataPriv.set (el, "click", ...)
					leverageNative (el, "clique", returnTrue);
				}

				// Retorna falso para permitir o processamento normal no chamador
				retorna falso;
			},
			gatilho: função (dados) {

				// Para compressibilidade mútua com _default, substitua o acesso `this` por um var local.
				// `|| data` é um código morto destinado apenas a preservar a variável por meio da minimização.
				var el = this || dados;

				// Força a configuração antes de acionar um clique
				if (rcheckableType.test (el.type) &&
					el.clique && nodeName (el, "input")) {

					leverageNative (el, "clique");
				}

				// Retorna não falso para permitir a propagação normal do caminho do evento
				return true;
			},

			// Para consistência entre navegadores, suprima .click () nativo nos links
			// Também evite se estivermos dentro de uma pilha de eventos nativos alavancada
			_default: function (event) {
				var target = event.target;
				return rcheckableType.test (target.type) &&
					target.click && nodeName (target, "input") &&
					dataPriv.get (target, "click") ||
					nodeName (destino, "a");
			}
		},

		beforeunload: {
			postDispatch: function (event) {

				// Suporte: Firefox 20+
				// O Firefox não alerta se o campo returnValue não estiver definido.
				if (event.result! == undefined && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Garanta a presença de um ouvinte de evento que lida com acionado manualmente
// eventos sintéticos interrompendo o progresso até ser reinvocado em resposta a
// eventos * nativos * que dispara diretamente, garantindo que as mudanças de estado
// já ocorreu antes que outros ouvintes sejam chamados.
function leverageNative (el, type, expectSync) {

	// Faltando expectSync indica uma chamada de gatilho, que deve forçar a configuração por meio de jQuery.event.add
	if (! expectSync) {
		if (dataPriv.get (el, type) === undefined) {
			jQuery.event.add (el, tipo, returnTrue);
		}
		Retorna;
	}

	// Registre o controlador como um manipulador universal especial para todos os namespaces de eventos
	dataPriv.set (el, tipo, falso);
	jQuery.event.add (el, tipo, {
		namespace: false,
		handler: function (event) {
			var notAsync, result,
				salvo = dataPriv.get (este, tipo);

			if ((event.isTrigger & 1) && this [type]) {

				// Interrompe o processamento do evento sintético externo .trigger () ed
				// Os dados salvos devem ser falsos nesses casos, mas podem ser um objeto de captura remanescente
				// de um manipulador nativo assíncrono (gh-4350)
				if (! saved.length) {

					// Armazena argumentos para uso ao manipular o evento nativo interno
					// Sempre haverá pelo menos um argumento (um objeto de evento), então este array
					// não será confundido com um objeto de captura restante.
					salvo = slice.call (argumentos);
					dataPriv.set (este, digite, salvo);

					// Aciona o evento nativo e captura seu resultado
					// Suporte: IE <= 9 - 11+
					// focus () e blur () são assíncronos
					notAsync = expectSync (este, digite);
					esse tipo ]();
					resultado = dataPriv.get (este, tipo);
					if (salvo! == resultado || notAsync) {
						dataPriv.set (this, type, false);
					} outro {
						resultado = {};
					}
					if (salvo! == resultado) {

						// Cancela o evento sintético externo
						event.stopImmediatePropagation ();
						event.preventDefault ();

						// Suporte: Chrome 86+
						// No Chrome, se um elemento com um manipulador focusout for desfocado por
						// clicando fora dele, ele invoca o manipulador de forma síncrona. Se
						// esse manipulador chama `.remove ()` no elemento, os dados são limpos,
						// deixando `result` indefinido. Precisamos nos proteger contra isso.
						resultado de retorno && result.value;
					}

				// Se este for um evento sintético interno para um evento com um substituto borbulhante
				// (foco ou desfoque), suponha que o substituto já se propagou ao disparar o
				// evento nativo e evitar que isso aconteça novamente aqui.
				// Isso tecnicamente obtém a ordem errada em `.trigger ()` (em que o
				// substituto borbulhante se propaga * após * a base não borbulhante), mas isso parece
				// menos ruim do que a duplicação.
				} else if ((jQuery.event.special [type] || {}) .delegateType) {
					event.stopPropagation ();
				}

			// Se este for um evento nativo disparado acima, agora tudo está em ordem
			// Dispare um evento sintético interno com os argumentos originais
			} else if (saved.length) {

				// ... e capturar o resultado
				dataPriv.set (this, type, {
					valor: jQuery.event.trigger (

						// Suporte: IE <= 9 - 11+
						// Estenda com o protótipo para redefinir o stopImmediatePropagation () acima
						jQuery.extend (salvo [0], jQuery.Event.prototype),
						salvo.slice (1),
						esta
					)
				});

				// Aborta o tratamento do evento nativo
				event.stopImmediatePropagation ();
			}
		}
	});
}

jQuery.removeEvent = function (elem, type, handle) {

	// Este "se" é necessário para objetos simples
	if (elem.removeEventListener) {
		elem.removeEventListener (tipo, identificador);
	}
};

jQuery.Event = function (src, props) {

	// Permitir instanciação sem a palavra-chave 'nova'
	if (! (esta instância de jQuery.Event)) {
		retornar novo jQuery.Event (src, props);
	}

	// Event object
	if (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;

		// Eventos que borbulham no documento podem ter sido marcados como evitados
		// por um manipulador mais abaixo na árvore; refletem o valor correto.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Suporte: Android <= 2.3 apenas
				src.returnValue === false?
			returnTrue:
			retorna falso;

		// Criar propriedades de destino
		// Suporte: Safari <= 6 - 7 apenas
		// O destino não deve ser um nó de texto (# 504, # 13143)
		this.target = (src.target && src.target.nodeType === 3)?
			src.target.parentNode:
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Tipo de evento
	} outro {
		this.type = src;
	}

	// Coloque as propriedades explicitamente fornecidas no objeto de evento
	if (adereços) {
		jQuery.extend (this, adereços);
	}

	// Crie um carimbo de data / hora se o evento de entrada não tiver um
	this.timeStamp = src && src.timeStamp || Date.now ();

	// Marque como corrigido
	este [jQuery.expando] = true;
};

// jQuery.Event é baseado em eventos DOM3 conforme especificado pelo ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	construtor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function () {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if (e &&! this.isSimulated) {
			e.preventDefault ();
		}
	},
	stopPropagation: function () {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopPropagation ();
		}
	},
	stopImmediatePropagation: function () {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopImmediatePropagation ();
		}

		this.stopPropagation ();
	}
};

// Inclui todos os adereços de evento comuns, incluindo acessórios específicos de KeyEvent e MouseEvent
jQuery.each ({
	altKey: true,
	bolhas: verdade,
	cancelável: verdadeiro,
	changesTouches: true,
	ctrlKey: verdadeiro,
	detalhe: verdadeiro,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: verdadeiro,
	view: true,
	"char": verdadeiro,
	código: verdadeiro,
	charCode: true,
	chave: verdadeiro,
	keyCode: true,
	botão: verdadeiro,
	botões: verdadeiro,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	toca: verdadeiro,
	qual: verdadeiro
}, jQuery.event.addProp);

jQuery.each ({focus: "focusin", blur: "focusout"}, function (type, delegateType) {
	jQuery.event.special [type] = {

		// Utilize o evento nativo se possível para que a sequência de desfoque / foco esteja correta
		configuração: função () {

			// Solicite o primeiro manipulador
			// dataPriv.set (this, "focus", ...)
			// dataPriv.set (this, "blur", ...)
			leverageNative (this, type, expectSync);

			// Retorna falso para permitir o processamento normal no chamador
			retorna falso;
		},
		trigger: function () {

			// Força a configuração antes do acionamento
			leverageNative (this, type);

			// Retorna não falso para permitir a propagação normal do caminho do evento
			return true;
		},

		// Suprime o foco nativo ou desfoque, pois já está sendo disparado
		// em leverageNative.
		_default: function () {
			return true;
		},

		delegateType: delegateType
	};
});

// Cria eventos mouseenter / leave usando mouseover / out e verificações de tempo de evento
// para que a delegação de eventos funcione no jQuery.
// Faça o mesmo para o ponteiroenter / ponteiroleave e o ponteiroover / ponteiroout
//
// Suporte: Safari 7 apenas
// Safari envia mouseenter com muita freqüência; Vejo:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para a descrição do bug (ele existia em versões mais antigas do Chrome também).
jQuery.each ({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function (orig, fix) {
	jQuery.event.special [orig] = {
		delegateType: fix,
		bindType: fix,

		lidar com: função (evento) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// Para mouseenter / leave chamar o manipulador se relacionado estiver fora do destino.
			// NB: Sem relatedTarget se o mouse saiu / entrou na janela do navegador
			if (! related || (related! == target &&! jQuery.contains (target, related))) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply (isto, argumentos);
				event.type = fix;
			}
			return ret;
		}
	};
});

jQuery.fn.extend ({

	on: função (tipos, seletor, dados, fn) {
		retorno on (this, types, selector, data, fn);
	},
	um: função (tipos, seletor, dados, fn) {
		retorno em (este, tipos, seletor, dados, fn, 1);
	},
	off: função (tipos, seletor, fn) {
		var handleObj, digite;
		if (tipos && types.preventDefault && types.handleObj) {

			// (evento) despachado jQuery.Event
			handleObj = types.handleObj;
			jQuery (types.delegateTarget) .off (
				handleObj.namespace?
					handleObj.origType + "." + handleObj.namespace:
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			devolva isso;
		}
		if (typeof types === "objeto") {

			// (objeto de tipos [, seletor])
			para (digite em tipos) {
				this.off (tipo, seletor, tipos [tipo]);
			}
			devolva isso;
		}
		if (seletor === falso || seletor de tipo === "função") {

			// (tipos [, fn])
			fn = seletor;
			seletor = indefinido;
		}
		if (fn === false) {
			fn = returnFalse;
		}
		return this.each (function () {
			jQuery.event.remove (this, types, fn, selector);
		});
	}
});


var

	// Suporte: IE <= 10 - 11, Edge 12 - 13 apenas
	// No IE / Edge, usar grupos regex aqui causa lentidão severa.
	// Veja https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <script | <estilo | <link / i,

	// verificado = "verificado" ou verificado
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = / ^ \ s * <! (?: \ [CDATA \ [| -) | (?: \] \] | -)> \ s * $ / g;

// Prefira um tbody em vez de sua tabela pai para conter novas linhas
function manipulationTarget (elem, content) {
	if (nodeName (elem, "tabela") &&
		nodeName (content.nodeType! == 11? content: content.firstChild, "tr")) {

		return jQuery (elem) .children ("tbody") [0] || elem;
	}

	return elem;
}

// Substitua / restaure o atributo type dos elementos do script para manipulação segura do DOM
function disableScript (elem) {
	elem.type = (elem.getAttribute ("type")! == null) + "/" + elem.type;
	return elem;
}
function restoreScript (elem) {
	if ((elem.type || "") .slice (0, 5) === "true /") {
		elem.type = elem.type.slice (5);
	} outro {
		elem.removeAttribute ("tipo");
	}

	return elem;
}

function cloneCopyEvent (src, dest) {
	var i, l, tipo, pdataOld, udataOld, udataCur, eventos;

	if (dest.nodeType! == 1) {
		Retorna;
	}

	// 1. Copiar dados privados: eventos, manipuladores, etc.
	if (dataPriv.hasData (src)) {
		pdataOld = dataPriv.get (src);
		events = pdataOld.events;

		if (eventos) {
			dataPriv.remove (dest, "manipular eventos");

			para (digite eventos) {
				para (i = 0, l = eventos [tipo] .comprimento; i <l; i ++) {
					jQuery.event.add (dest, tipo, eventos [tipo] [i]);
				}
			}
		}
	}

	// 2. Copiar dados do usuário
	if (dataUser.hasData (src)) {
		udataOld = dataUser.access (src);
		udataCur = jQuery.extend ({}, udataOld);

		dataUser.set (dest, udataCur);
	}
}

// Corrija os bugs do IE, consulte os testes de suporte
function fixInput (src, dest) {
	var nodeName = dest.nodeName.toLowerCase ();

	// Falha ao persistir o estado marcado de uma caixa de seleção ou botão de rádio clonado.
	if (nodeName === "input" && rcheckableType.test (src.type)) {
		dest.checked = src.checked;

	// Falha ao retornar a opção selecionada ao estado padrão selecionado ao clonar opções
	} else if (nodeName === "input" || nodeName === "textarea") {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip (coleção, args, retorno de chamada, ignorado) {

	// Achatar quaisquer matrizes aninhadas
	args = plano (args);

	fragmento var, primeiro, scripts, hasScripts, nó, doc,
		i = 0,
		l = coleção.l comprimento,
		iNoClone = l - 1,
		valor = args [0],
		valueIsFunction = isFunction (valor);

	// Não podemos cloneNode fragmentos que contêm verificados, no WebKit
	if (valueIsFunction ||
			(l> 1 && typeof value === "string" &&
				! support.checkClone && rchecked.test (value))) {
		return collection.each (function (index) {
			var self = coleção.eq (índice);
			if (valueIsFunction) {
				args [0] = value.call (this, index, self.html ());
			}
			domManip (self, args, callback, ignorado);
		});
	}

	if (l) {
		fragment = buildFragment (args, coleção [0] .ownerDocument, false, coleção, ignorado);
		primeiro = fragmento.firstChild;

		if (fragment.childNodes.length === 1) {
			fragmento = primeiro;
		}

		// Requer novo conteúdo ou interesse em elementos ignorados para invocar o retorno de chamada
		if (primeiro || ignorado) {
			scripts = jQuery.map (getAll (fragmento, "script"), disableScript);
			hasScripts = scripts.length;

			// Use o fragmento original para o último item
			// em vez do primeiro porque pode acabar
			// sendo esvaziado incorretamente em certas situações (# 8070).
			para (; i <l; i ++) {
				nó = fragmento;

				if (i! == iNoClone) {
					node = jQuery.clone (node, true, true);

					// Mantenha as referências aos scripts clonados para restauração posterior
					if (hasScripts) {

						// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
						// push.apply (_, arraylike) lança no antigo WebKit
						jQuery.merge (scripts, getAll (node, "script"));
					}
				}

				callback.call (coleção [i], nó, i);
			}

			if (hasScripts) {
				doc = scripts [scripts.length - 1] .ownerDocument;

				// Reativar scripts
				jQuery.map (scripts, restoreScript);

				// Avalie os scripts executáveis ​​na primeira inserção do documento
				para (i = 0; i <hasScripts; i ++) {
					nó = scripts [i];
					if (rscriptType.test (node.type || "") &&
						! dataPriv.access (node, "globalEval") &&
						jQuery.contains (doc, node)) {

						if (node.src && (node.type || "") .toLowerCase ()! == "módulo") {

							// Dependência AJAX opcional, mas não executará scripts se não estiver presente
							if (jQuery._evalUrl &&! node.noModule) {
								jQuery._evalUrl (node.src, {
									nonce: node.nonce || node.getAttribute ("nonce")
								}, doc);
							}
						} outro {
							DOMEval (node.textContent.replace (rcleanScript, ""), node, doc);
						}
					}
				}
			}
		}
	}

	coleta de retorno;
}

function remove (elem, selector, keepData) {
	nó var,
		nodes = seletor? jQuery.filter (seletor, elem): elem,
		i = 0;

	para (; (nó = nós [i])! = nulo; i ++) {
		if (! keepData && node.nodeType === 1) {
			jQuery.cleanData (getAll (node));
		}

		if (node.parentNode) {
			if (keepData && isAttached (node)) {
				setGlobalEval (getAll (node, "script"));
			}
			node.parentNode.removeChild (node);
		}
	}

	return elem;
}

jQuery.extend ({
	htmlPrefilter: function (html) {
		return html;
	},

	clone: ​​function (elem, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode (true),
			inPage = isAttached (elem);

		// Corrige problemas de clonagem do IE
		if (! support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
				! jQuery.isXMLDoc (elem)) {

			// Evitamos o Sizzle aqui por motivos de desempenho: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll (clone);
			srcElements = getAll (elem);

			para (i = 0, l = srcElements.length; i <l; i ++) {
				fixInput (srcElements [i], destElements [i]);
			}
		}

		// Copia os eventos do original para o clone
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll (elem);
				destElements = destElements || getAll (clone);

				para (i = 0, l = srcElements.length; i <l; i ++) {
					cloneCopyEvent (srcElements [i], destElements [i]);
				}
			} outro {
				cloneCopyEvent (elem, clone);
			}
		}

		// Preserve o histórico de avaliação do script
		destElements = getAll (clone, "script");
		if (destElements.length> 0) {
			setGlobalEval (destElements,! inPage && getAll (elem, "script"));
		}

		// Retorna o conjunto clonado
		retornar clone;
	},

	cleanData: function (elems) {
		dados var, elem, tipo,
			special = jQuery.event.special,
			i = 0;

		for (; (elem = elems [i])! == indefinido; i ++) {
			if (acceptData (elem)) {
				if ((dados = elem [dataPriv.expando])) {
					if (data.events) {
						para (digite data.events) {
							if (especial [tipo]) {
								jQuery.event.remove (elem, tipo);

							// Este é um atalho para evitar sobrecarga de jQuery.event.remove
							} outro {
								jQuery.removeEvent (elem, tipo, data.handle);
							}
						}
					}

					// Suporte: Chrome <= 35 - 45+
					// Atribuir undefined em vez de usar delete, consulte Data # remove
					elem [dataPriv.expando] = indefinido;
				}
				if (elem [dataUser.expando]) {

					// Suporte: Chrome <= 35 - 45+
					// Atribuir undefined em vez de usar delete, consulte Data # remove
					elem [dataUser.expando] = indefinido;
				}
			}
		}
	}
});

jQuery.fn.extend ({
	desanexar: função (seletor) {
		return remove (this, selector, true);
	},

	remove: function (selector) {
		return remove (this, selector);
	},

	texto: função (valor) {
		acesso de retorno (isto, função (valor) {
			valor de retorno === indefinido?
				jQuery.text (this):
				this.empty (). each (function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
		}, nulo, valor, argumentos. comprimento);
	},

	append: function () {
		retornar domManip (isto, argumentos, função (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (this, elem);
				target.appendChild (elem);
			}
		});
	},

	prepend: function () {
		retornar domManip (isto, argumentos, função (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (this, elem);
				target.insertBefore (elem, target.firstChild);
			}
		});
	},

	antes: function () {
		retornar domManip (isto, argumentos, função (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this);
			}
		});
	},

	depois: função () {
		retornar domManip (isto, argumentos, função (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	},

	vazio: function () {
		var elem,
			i = 0;

		para (; (elem = this [i])! = null; i ++) {
			if (elem.nodeType === 1) {

				// Evita vazamentos de memória
				jQuery.cleanData (getAll (elem, false));

				// Remova todos os nós restantes
				elem.textContent = "";
			}
		}

		devolva isso;
	},

	clone: ​​function (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null? falso: dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null? dataAndEvents: deepDataAndEvents;

		return this.map (function () {
			retornar jQuery.clone (this, dataAndEvents, deepDataAndEvents);
		});
	},

	html: function (value) {
		acesso de retorno (isto, função (valor) {
			var elem = este [0] || {},
				i = 0,
				l = this.length;

			if (value === undefined && elem.nodeType === 1) {
				return elem.innerHTML;
			}

			// Veja se podemos pegar um atalho e apenas usar innerHTML
			if (typeof value === "string" &&! rnoInnerhtml.test (value) &&
				! wrapMap [(rtagName.exec (value) || ["", ""]) [1] .toLowerCase ()]) {

				valor = jQuery.htmlPrefilter (valor);

				tentar {
					para (; i <l; i ++) {
						elem = este [i] || {};

						// Remova os nós do elemento e evite vazamentos de memória
						if (elem.nodeType === 1) {
							jQuery.cleanData (getAll (elem, false));
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// Se o uso de innerHTML gerar uma exceção, use o método de fallback
				} catch (e) {}
			}

			if (elem) {
				this.empty (). append (value);
			}
		}, nulo, valor, argumentos. comprimento);
	},

	replaceWith: function () {
		var ignorado = [];

		// Faça as alterações, substituindo cada elemento de contexto não ignorado pelo novo conteúdo
		retornar domManip (isto, argumentos, função (elem) {
			var parent = this.parentNode;

			if (jQuery.inArray (this, ignorado) <0) {
				jQuery.cleanData (getAll (this));
				if (pai) {
					parent.replaceChild (elem, este);
				}
			}

		// Forçar chamada de retorno
		}, ignorado);
	}
});

jQuery.each ({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "antes",
	insertAfter: "depois",
	replaceAll: "replaceWith"
}, função (nome, original) {
	jQuery.fn [nome] = função (seletor) {
		var elems,
			ret = [],
			insert = jQuery (seletor),
			last = insert.length - 1,
			i = 0;

		para (; i <= último; i ++) {
			elems = i === último? this: this.clone (true);
			jQuery (inserir [i]) [original] (elems);

			// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
			// .get () porque push.apply (_, arraylike) lança um antigo WebKit
			push.apply (ret, elems.get ());
		}

		return this.pushStack (ret);
	};
});
var rnumnonpx = new RegExp ("^ (" + pnum + ") (?! px) [az%] + $", "i");

var getStyles = function (elem) {

		// Suporte: IE <= 11 apenas, Firefox <= 30 (# 15098, # 14150)
		// IE lança elementos criados em pop-ups
		// Enquanto isso, FF lança elementos de quadro por meio de "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (! view ||! view.opener) {
			view = janela;
		}

		return view.getComputedStyle (elem);
	};

var swap = function (elem, opções, callback) {
	var ret, nome,
		antigo = {};

	// Lembre-se dos valores antigos e insira os novos
	para (nome em opções) {
		antigo [nome] = elem.style [nome];
		elem.style [nome] = opções [nome];
	}

	ret = callback.call (elem);

	// Reverter os valores antigos
	para (nome em opções) {
		elem.style [nome] = antigo [nome];
	}

	return ret;
};


var rboxStyle = novo RegExp (cssExpand.join ("|"), "i");



(função () {

	// A execução de testes pixelPosition e boxSizingReliable exige apenas um layout
	// então eles são executados ao mesmo tempo para salvar o segundo cálculo.
	function computeStyleTests () {

		// Este é um singleton, precisamos executá-lo apenas uma vez
		if (! div) {
			Retorna;
		}

		container.style.cssText = "posição: absoluta; esquerda: -11111px; largura: 60px;" +
			"margin-top: 1px; padding: 0; border: 0";
		div.style.cssText =
			"posição: relativa; exibição: bloco; tamanho da caixa: caixa da borda; estouro: rolar;" +
			"margin: auto; border: 1px; padding: 1px;" +
			"largura: 60%; topo: 1%";
		documentElement.appendChild (contêiner) .appendChild (div);

		var divStyle = window.getComputedStyle (div);
		pixelPositionVal = divStyle.top! == "1%";

		// Suporte: Android 4.0 - 4.3 apenas, Firefox <= 3 - 44
		confiávelMarginLeftVal = roundPixelMeasures (divStyle.marginLeft) === 12;

		// Suporte: Android 4.0 - 4.3 apenas, Safari <= 9.1 - 10.1, iOS <= 7.0 - 9.3
		// Alguns estilos voltam com valores percentuais, embora não devessem
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures (divStyle.right) === 36;

		// Suporte: IE 9-11 apenas
		// Detectar relatórios incorretos de dimensões de conteúdo para tamanho de caixa: elementos de caixa de borda
		boxSizingReliableVal = roundPixelMeasures (divStyle.width) === 36;

		// Suporte: apenas IE 9
		// Detectar estouro: confusão de rolagem (gh-3699)
		// Suporte: Chrome <= 64
		// Não se engane quando o zoom afetar offsetWidth (gh-4029)
		div.style.position = "absoluto";
		scrollboxSizeVal = roundPixelMeasures (div.offsetWidth / 3) === 12;

		documentElement.removeChild (contêiner);

		// Anula o div para que não seja armazenado na memória e
		// também será um sinal de que as verificações já realizadas
		div = null;
	}

	function roundPixelMeasures (measure) {
		retornar Math.round (parseFloat (medir));
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		trustTrDimensionsVal, trustedMarginLeftVal,
		container = document.createElement ("div"),
		div = document.createElement ("div");

	// Concluir cedo em ambientes limitados (sem navegador)
	if (! div.style) {
		Retorna;
	}

	// Suporte: IE <= 9 - 11 apenas
	// O estilo do elemento clonado afeta o elemento de origem clonado (# 8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode (true) .style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend (suporte, {
		boxSizingReliable: function () {
			computeStyleTests ();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function () {
			computeStyleTests ();
			return pixelBoxStylesVal;
		},
		pixelPosition: function () {
			computeStyleTests ();
			return pixelPositionVal;
		},
		confiávelMarginLeft: function () {
			computeStyleTests ();
			return confiávelMarginLeftVal;
		},
		scrollboxSize: function () {
			computeStyleTests ();
			return scrollboxSizeVal;
		},

		// Suporte: IE 9 - 11+, Edge 15 - 18+
		// IE / Edge relatório incorreto `getComputedStyle` de linhas da tabela com largura / altura
		// definido em CSS enquanto as propriedades `offset *` relatam os valores corretos.
		// O comportamento no IE 9 é mais sutil do que nas versões mais recentes e passa
		// algumas versões deste teste; certifique-se de não passar lá!
		//
		// Suporte: Firefox 70+
		// Apenas o Firefox inclui larguras de borda
		// em dimensões calculadas. (gh-4529)
		trustTrDimensions: function () {
			tabela var, tr, trChild, trStyle;
			if (trustedTrDimensionsVal == null) {
				tabela = document.createElement ("tabela");
				tr = document.createElement ("tr");
				trChild = document.createElement ("div");

				table.style.cssText = "posição: absoluta; esquerda: -11111px; redução da borda: separar";
				tr.style.cssText = "borda: 1px sólido";

				// Suporte: Chrome 86+
				// Altura definida por meio de cssText não é aplicada.
				// A altura calculada então volta para 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Suporte: Android 8 Chrome 86+
				// Em nosso bodyBackground.html iframe,
				// display para todos os elementos div é definido como "inline",
				// o que causa um problema apenas no Android 8 Chrome 86.
				// Garantindo que o div seja display: block
				// contorna esse problema.
				trChild.style.display = "bloquear";

				documentElement
					.appendChild (tabela)
					.appendChild (tr)
					.appendChild (trChild);

				trStyle = window.getComputedStyle (tr);
				confiávelTrDimensionsVal = (parseInt (trStyle.height, 10) +
					parseInt (trStyle.borderTopWidth, 10) +
					parseInt (trStyle.borderBottomWidth, 10)) === tr.offsetHeight;

				documentElement.removeChild (tabela);
			}
			return confiávelTrDimensionsVal;
		}
	});
}) ();


função curCSS (elem, nome, calculado) {
	var width, minWidth, maxWidth, ret,

		// Suporte: Firefox 51+
		// Recuperando o estilo antes de ser calculado de alguma forma
		// corrige um problema de obtenção de valores errados
		// em elementos separados
		style = elem.style;

	computado = computado || getStyles (elem);

	// getPropertyValue é necessário para:
	// .css ('filtro') (somente IE 9, # 12537)
	// .css ('- customProperty) (# 3144)
	if (calculado) {
		ret = computed.getPropertyValue (name) || computado [nome];

		if (ret === "" &&! isAttached (elem)) {
			ret = jQuery.style (elem, nome);
		}

		// Um ​​tributo ao "hack incrível de Dean Edwards"
		// O navegador Android retorna a porcentagem para alguns valores,
		// mas a largura parece ser pixels confiáveis.
		// Isso é contra a especificação de rascunho do CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if (! support.pixelBoxStyles () && rnumnonpx.test (ret) && rboxStyle.test (name)) {

			// Lembre-se dos valores originais
			largura = estilo. largura;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Insira os novos valores para obter um valor calculado
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Reverter os valores alterados
			style.width = largura;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret! == undefined?

		// Suporte: IE <= 9 - 11 apenas
		// IE retorna o valor zIndex como um inteiro.
		ret + "":
		ret;
}


function addGetHookIf (conditionFn, hookFn) {

	// Defina o gancho, verificaremos na primeira execução se ele é realmente necessário.
	Retorna {
		get: function () {
			if (conditionFn ()) {

				// Gancho não necessário (ou não é possível usá-lo devido
				// para a dependência ausente), remova-a.
				delete this.get;
				Retorna;
			}

			// Hook needed; redefina-o para que o teste de suporte não seja executado novamente.
			return (this.get = hookFn) .apply (this, argumentos);
		}
	};
}


var cssPrefixes = ["Webkit", "Moz", "ms"],
	emptyStyle = document.createElement ("div") .style,
	vendorProps = {};

// Retorna uma propriedade com prefixo do fornecedor ou indefinida
function vendorPropName (name) {

	// Verifique os nomes prefixados do fornecedor
	var capName = name [0] .toUpperCase () + name.slice (1),
		i = cssPrefixes.length;

	enquanto eu-- ) {
		name = cssPrefixes [i] + capName;
		if (nome em emptyStyle) {
			nome de retorno;
		}
	}
}

// Retorna um jQuery.cssProps potencialmente mapeado ou propriedade prefixada do fornecedor
function finalPropName (name) {
	var final = jQuery.cssProps [nome] || vendorProps [nome];

	if (final) {
		retorno final;
	}
	if (nome em emptyStyle) {
		nome de retorno;
	}
	return vendorProps [name] = vendorPropName (name) || nome;
}


var

	// Trocável se a exibição for nenhuma ou começar com a tabela
	// exceto "tabela", "célula da tabela" ou "legenda da tabela"
	// Veja aqui os valores de exibição: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = / ^ - /,
	cssShow = {posição: "absoluto", visibilidade: "oculto", exibição: "bloquear"},
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber (_elem, value, subtract) {

	// Quaisquer valores relativos (+/-) já foram
	// normalizado neste ponto
	var corresponde a rcssNum.exec (valor);
	retornar partidas?

		// Protege contra "subtrair" indefinido, por exemplo, quando usado como em cssHooks
		Math.max (0, corresponde a [2] - (subtrair || 0)) + (corresponde a [3] || "px"):
		valor;
}

function boxModelAdjustment (elem, dimension, box, isBorderBox, styles, computedVal) {
	var i = dimension === "largura"? 1: 0,
		extra = 0,
		delta = 0;

	// O ajuste pode não ser necessário
	if (box === (isBorderBox? "border": "content")) {
		return 0;
	}

	para (; i <4; i + = 2) {

		// Ambos os modelos de caixa excluem margem
		if (caixa === "margem") {
			delta + = jQuery.css (elem, box + cssExpand [i], true, estilos);
		}

		// Se chegarmos aqui com uma caixa de conteúdo, estamos buscando "preenchimento" ou "borda" ou "margem"
		if (! isBorderBox) {

			// Adicionar preenchimento
			delta + = jQuery.css (elem, "preenchimento" + cssExpand [i], verdadeiro, estilos);

			// Para "borda" ou "margem", adicione borda
			if (box! == "padding") {
				delta + = jQuery.css (elem, "borda" + cssExpand [i] + "Largura", verdadeiro, estilos);

			// Mas ainda mantenha o controle de outra forma
			} outro {
				extra + = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
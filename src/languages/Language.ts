const validateText = `[a-zA-Z0-9_\u4e00-\u9fa5]`;

const reservedWords = [
  'ACCESSIBLE',
  'ACTION',
  'AGAINST',
  'AGGREGATE',
  'ALGORITHM',
  'ALL',
  'ALTER',
  'ANALYSE',
  'ANALYZE',
  'AS',
  'ASC',
  'AUTOCOMMIT',
  'AUTO_INCREMENT',
  'BACKUP',
  'BEGIN',
  'BETWEEN',
  'BINLOG',
  'BOTH',
  'CASCADE',
  'CASE',
  'CHANGE',
  'CHANGED',
  'CHARACTER SET',
  'CHARSET',
  'CHECK',
  'CHECKSUM',
  'COLLATE',
  'COLLATION',
  'COLUMN',
  'COLUMNS',
  'COMMENT',
  'COMMIT',
  'COMMITTED',
  'COMPRESSED',
  'CONCURRENT',
  'CONSTRAINT',
  'CONTAINS',
  'CONVERT',
  'CREATE',
  'CROSS',
  'CURRENT_TIMESTAMP',
  'DATABASE',
  'DATABASES',
  'DAY',
  'DAY_HOUR',
  'DAY_MINUTE',
  'DAY_SECOND',
  'DEFAULT',
  'DEFINER',
  'DELAYED',
  'DELETE',
  'DESC',
  'DESCRIBE',
  'DETERMINISTIC',
  'DISTINCT',
  'DISTINCTROW',
  'DIV',
  'DO',
  'DROP',
  'DUMPFILE',
  'DUPLICATE',
  'DYNAMIC',
  'ELSE',
  'ENCLOSED',
  'END',
  'ENGINE',
  'ENGINES',
  'ENGINE_TYPE',
  'ESCAPE',
  'ESCAPED',
  'EVENTS',
  'EXEC',
  'EXECUTE',
  'EXISTS',
  'EXPLAIN',
  'EXTENDED',
  'FAST',
  'FETCH',
  'FIELDS',
  'FILE',
  'FIRST',
  'FIXED',
  'FLUSH',
  'FOR',
  'FORCE',
  'FOREIGN',
  'FULL',
  'FULLTEXT',
  'FUNCTION',
  'GLOBAL',
  'GRANT',
  'GRANTS',
  'GROUP_CONCAT',
  'HEAP',
  'HIGH_PRIORITY',
  'HOSTS',
  'HOUR',
  'HOUR_MINUTE',
  'HOUR_SECOND',
  'IDENTIFIED',
  'IF',
  'IFNULL',
  'IGNORE',
  'IN',
  'INDEX',
  'INDEXES',
  'INFILE',
  'INSERT',
  'INSERT_ID',
  'INSERT_METHOD',
  'INTERVAL',
  'INTO',
  'INVOKER',
  'IS',
  'ISOLATION',
  'KEY',
  'KEYS',
  'KILL',
  'LAST_INSERT_ID',
  'LEADING',
  'LEVEL',
  'LIKE',
  'LINEAR',
  'LINES',
  'LOAD',
  'LOCAL',
  'LOCK',
  'LOCKS',
  'LOGS',
  'LOW_PRIORITY',
  'MARIA',
  'MASTER',
  'MASTER_CONNECT_RETRY',
  'MASTER_HOST',
  'MASTER_LOG_FILE',
  'MATCH',
  'MAX_CONNECTIONS_PER_HOUR',
  'MAX_QUERIES_PER_HOUR',
  'MAX_ROWS',
  'MAX_UPDATES_PER_HOUR',
  'MAX_USER_CONNECTIONS',
  'MEDIUM',
  'MERGE',
  'MINUTE',
  'MINUTE_SECOND',
  'MIN_ROWS',
  'MODE',
  'MODIFY',
  'MONTH',
  'MRG_MYISAM',
  'MYISAM',
  'NAMES',
  'NATURAL',
  'NOT',
  'NOW()',
  'NULL',
  'OFFSET',
  'ON DELETE',
  'ON UPDATE',
  'ON',
  'ONLY',
  'OPEN',
  'OPTIMIZE',
  'OPTION',
  'OPTIONALLY',
  'OUTFILE',
  'PACK_KEYS',
  'PAGE',
  'PARTIAL',
  'PARTITION',
  'PARTITIONS',
  'PASSWORD',
  'PRIMARY',
  'PRIVILEGES',
  'PROCEDURE',
  'PROCESS',
  'PROCESSLIST',
  'PURGE',
  'QUICK',
  'RAID0',
  'RAID_CHUNKS',
  'RAID_CHUNKSIZE',
  'RAID_TYPE',
  'RANGE',
  'READ',
  'READ_ONLY',
  'READ_WRITE',
  'REFERENCES',
  'REGEXP',
  'RELOAD',
  'RENAME',
  'REPAIR',
  'REPEATABLE',
  'REPLACE',
  'REPLICATION',
  'RESET',
  'RESTORE',
  'RESTRICT',
  'RETURN',
  'RETURNS',
  'REVOKE',
  'RLIKE',
  'ROLLBACK',
  'ROW',
  'ROWS',
  'ROW_FORMAT',
  'SECOND',
  'SECURITY',
  'SEPARATOR',
  'SERIALIZABLE',
  'SESSION',
  'SHARE',
  'SHOW',
  'SHUTDOWN',
  'SLAVE',
  'SONAME',
  'SOUNDS',
  'SQL',
  'SQL_AUTO_IS_NULL',
  'SQL_BIG_RESULT',
  'SQL_BIG_SELECTS',
  'SQL_BIG_TABLES',
  'SQL_BUFFER_RESULT',
  'SQL_CACHE',
  'SQL_CALC_FOUND_ROWS',
  'SQL_LOG_BIN',
  'SQL_LOG_OFF',
  'SQL_LOG_UPDATE',
  'SQL_LOW_PRIORITY_UPDATES',
  'SQL_MAX_JOIN_SIZE',
  'SQL_NO_CACHE',
  'SQL_QUOTE_SHOW_CREATE',
  'SQL_SAFE_UPDATES',
  'SQL_SELECT_LIMIT',
  'SQL_SLAVE_SKIP_COUNTER',
  'SQL_SMALL_RESULT',
  'SQL_WARNINGS',
  'START',
  'STARTING',
  'STATUS',
  'STOP',
  'STORAGE',
  'STRAIGHT_JOIN',
  'STRING',
  'STRIPED',
  'SUPER',
  'TABLE',
  'TABLES',
  'TEMPORARY',
  'TERMINATED',
  'THEN',
  'TO',
  'TRAILING',
  'TRANSACTIONAL',
  'TRUE',
  'TRUNCATE',
  'TYPE',
  'TYPES',
  'UNCOMMITTED',
  'UNIQUE',
  'UNLOCK',
  'UNSIGNED',
  'USAGE',
  'USE',
  'USING',
  'VARIABLES',
  'VIEW',
  'WHEN',
  'WITH',
  'WORK',
  'WRITE',
  'YEAR_MONTH'
];

const reservedToplevelWords = [
  'ADD',
  'AFTER',
  'ALTER COLUMN',
  'ALTER TABLE',
  'DELETE FROM',
  'EXCEPT',
  'FETCH FIRST',
  'FROM',
  'GROUP BY',
  'GO',
  'HAVING',
  'INSERT INTO',
  'INSERT',
  'INTERSECT',
  'LIMIT',
  'MODIFY',
  'ORDER BY',
  'SELECT',
  'SET CURRENT SCHEMA',
  'SET SCHEMA',
  'SET',
  'UNION ALL',
  'UNION',
  'UPDATE',
  'VALUES',
  'WHERE'
];

const reservedNewlineWords = [
  'AND',
  'CROSS APPLY',
  'CROSS JOIN',
  'ELSE',
  'INNER JOIN',
  'JOIN',
  'LEFT JOIN',
  'LEFT OUTER JOIN',
  'OR',
  'OUTER APPLY',
  'OUTER JOIN',
  'RIGHT JOIN',
  'RIGHT OUTER JOIN',
  'WHEN',
  'XOR'
];

const stringTypes = [`""`, "N''", "''", '``', '[]'];

const indentRegex = '[a-zA-Z0-9._$:]+';

const openParens = ['(', 'CASE'];

const closeParens = [')', 'END'];

const indexedPlaceholderTypes = ['?'];

const namedPlaceholderTypes = []; // [':', '.']

const wordChars = [`${validateText}+`];

const lineCommentTypes = ['#', '--'];

interface ITokenConfig {
  reservedWords?: string[];
  reservedToplevelWords?: string[];
  reservedNewlineWords?: string[];
  stringTypes?: string[];
  indentRegex?: string;
  openParens?: string[];
  closeParens?: string[];
  indexedPlaceholderTypes?: string[];
  namedPlaceholderTypes?: string[];
  wordChars?: string[];
  lineCommentTypes?: string[];
}

export class Language {
  public extendTokenConfig: ITokenConfig;

  public reservedWords: string[] = reservedWords;
  public reservedToplevelWords: string[] = reservedToplevelWords;
  public reservedNewlineWords: string[] = reservedNewlineWords;
  public stringTypes: string[] = stringTypes;
  public indentRegex: string = indentRegex;
  public openParens: string[] = openParens;
  public closeParens: string[] = closeParens;
  public indexedPlaceholderTypes: string[] = indexedPlaceholderTypes;
  public namedPlaceholderTypes: string[] = [];
  public wordChars: string[] = wordChars;
  public lineCommentTypes: string[] = lineCommentTypes;

  constructor(extendTokenConfig: ITokenConfig = {}) {
    this.extendTokenConfig = extendTokenConfig;

    Object.keys(extendTokenConfig).forEach(key => {
      // @ts-ignore
      this.extends(key, extendTokenConfig[key]);
    });
  }

  private extends(key: string, content: string | string[]) {
    // @ts-ignore
    if (Array.isArray(this[key])) {
      // @ts-ignore
      this[key] = this[key].concat(content);
    } else {
      // @ts-ignore
      this[key] = content;
    }
  }
}
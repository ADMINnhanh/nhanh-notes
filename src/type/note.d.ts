interface Notes {
  /** 笔记名称 */
  name: string;
  /** 创建时间 */
  createTime: string;

  /** 笔记内容 */
  content: NotesContent[];
}

interface NotesContent {
  /** 笔记标题 */
  title?: string;
  /** 笔记链接 */
  link?: string;
  /** 笔记样式 */
  style: {
    /** 列表类型 */
    list?: "ol" | "ul";
    /** 标题类型 */
    h?: 1 | 2 | 3 | 4;
    /** 粗体 */
    bold?: boolean;
    /** 斜体 */
    italic?: boolean;
  };
  /** 代码块 */
  code: {
    /** 代码内容 */
    content?: string;
    /** 代码语言 */
    lang?: CodeLanguage;
  };
  /** 文件列表 */
  files: {
    name?: string;
    url?: string;
    type?: "image" | "video" | "audio" | "file";
  }[];

  /** 子内容 */
  children: NotesContent[];
}

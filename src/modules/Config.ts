export class ModuleConfig {
    constructor() {
        this.env = process.env.NODE_ENV === "development" ? "dev" : "prod";
    }

    /** 当前开发环境 */
    protected readonly env!: "dev" | "prod"

    /** 请求超时毫秒 */
    readonly requestOvertime = 8000;

    /** 开发环境 */
    protected readonly dev = {
        base: "http://192.168.89.53/api",
    }
    
    /** 生产环境 */
    protected readonly prod = {
        base: "https://huangjingsheng.com/api"
    }

    /** 基础请求域名 */
    get baseUrl() {
        return this[this.env].base;
    }
}

/** 配置模块 */
const config = new ModuleConfig();

export default config;
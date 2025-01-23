# Makefile

# 定义 Node.js 命令
INSTALL_CMD = npm install
START_CMD = npm run dev

# 默认目标：启动网站
all: start

# 安装依赖
install:
	$(INSTALL_CMD)

# 启动网站
start:
	$(START_CMD)

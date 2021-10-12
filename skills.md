# MAC 快捷键
- comm + 上 , finder 上层目录
- comm + m 最小化 + l 最大化（浏览器）
- comm + ctrl + f 最大化全屏切换
- comm + r 刷新浏览器
- 😀 ctrl + cmd + 空格 输入 emoji
- ctrl + 下 单个程序

# mysql
- 泛式：所有字段不可再分 所有字段可以直接由主键确定
- `explain` 查看执行细节
- 安装 https://blog.csdn.net/wz1226864411/article/details/76146180
- mysql -h 127.0.0.1 -u root -p
- 输入密码登录mysql
-  启动Mysql连接
$ sudo /usr/local/mysql/support-files/mysql.server start
$ sudo /usr/local/mysql/support-files/mysql.server stop
- 退出 quit
- show databases
- show tables
- CREATE DATABASE 数据库名
- use <数据库名> 设置当前数据库
- GROUP BY 用来配合 count() sum() 例如: SELECT continent, COUNT(name) FROM world GROUP BY continent;
SELECT continent, SUM(population)
FROM world
GROUP BY continent
HAVING SUM(population)>500000000
- where 必须在 group by 前面

# C语言、操作系统
- gcc <file> -o <objective>
- void *ptr 万能指针,这样的指针可以指向任意类型的数据
- 指针类型转化: `(char*)ptr` 将`ptr`由指向其他类型的指针转化为指向 char 类型的指针
- pthread_mutex_t 互斥锁, pthread_mutex_lock 抢锁 抢到了才继续下一步, pthread_mutex_unlock 操作完了解锁
- 为避免次线程在不必要的时候不停地 pthread_mutex_lock 抢锁, 在抢锁失败时先用 pthread_cond_wait 进入休眠, 在需要抢锁时 主线程再用 pthread_cond_broadcast 通知 次线程苏醒抢锁
- 锁未必是系统提供, 它是可以自己实现的
- 内核态会触发中断，一般来说需要访问内存以外的数据(网卡、硬盘等等)需要经过内核态，否则用户态即可
- 竞态 race condition

# IDLE
- ctrl+p 上一次的命令

# python
- id(x) x的内存地址  ，foo is bar 相当于 id(foo) == id(bar) 
- type(x) x的类
- None J就是 null
- help(x) 查询x的文档
- 列表生成器 list(range(11)) for if
- m[::10]#所有的数中，每10个数取一个，-1可以倒序
- del 删除变量

## python 骚语法
- a < b < c != d 等价于 a < b and b < c and c != d
- a = b = 1
- 解构赋值 [a, b] = [1,2]
- floor除法 1//2 返回0

# VScode
- alt + shift + 鼠标拖动 多光标
- shift + 滚轮 左右滚动
- Shift+Alt + ↓ / ↑    向上/向下复制行 Copy line up/down
- Ctrl+Shift+\    跳到匹配的括号 Jump to matching bracket
- Ctrl+K Ctrl+[    折叠（未折叠）所有子区域 Fold (collapse) all subregions
- alt+ 左/右 editor前进/后退
- ctrl + p :->转到行 #->显示符号 @->转到标签
- Alt +单击    插入光标 Insert cursor
- Shift + Alt + →    展开选择 Expand selection
- Ctrl + U    撤消上一个光标操作 Undo last cursor operation
- Ctrl+K ← / →    移动活动编辑器组 Move active editor group
- Ctrl+ 1 / 2 / 3    聚焦到第1，第2或第3编辑器组 Focus into 1st, 2nd or 3rd editor group
- Ctrl+K S    全部保存 Save All
- Ctrl+Shift+T    重新打开关闭的编辑器 Reopen closed editor
- Ctrl+K P    复制活动文件的路径 Copy path of active file
- Ctrl+K R    显示资源管理器中的活动文件 Reveal active file in Explorer
- 鼠标拖动window
- Ctrl+F2 选中全部
- Ctrl+G 行跳转
- PgUp/PgDn 快速下滚(一屏)
- Ctrl+PgUp/PgDn 向左/右切换tab
- Ctrl+K, 方向键 改变当前窗口布局
- html文件中 ! + tab html5标准模板
- mac Ctrl + - 
- mac Ctrl + Shift + - 前进
- mac Command + K Command + Left 切换到上一分组
- mac Command + 1 切换到第一分组
- setting.json 位置: 1.左下角齿轮图表 2.右上角花括号图标{}
- 选中一段文字，按shift+alt+i，可以在每行末尾出现光标
- 重命名变量 f2
- 关于默认换行(LF CRLF)的设置 eol

# webpack
- 反向https代理踩坑 不通的原因可能是：
  - 未在 target 同层设置 `secure: false` 来无视自签证书
  - 代理服务器不是 https
  - ps: 可通过 `logLevel: 'debug'` 打开日志
- `vue inspect` 查看 webpack 配置 加上 --plugins 展示所有插件名 --plugin xx 查看 xx 插件的配置
- webpack-dev-server 命令可通过--config build/webpack.dev.conf.js来指定config文件
- webpack-merge
- vue.config.js 中的 `webpack` 用于对底层进行自定义操作
- `vue inspect` 拿到解析好的 webpack 配置
- devServer
  - contentBase contentBasePublicPath 静态文件服务目录
- .env 变量注入 process `doenv` -> `DefinePlugin` 在 webpack 插件中注入页面

# git
- git branch 查看分支 加上branchName 新建分支 再加上commitId可基于commit新建分支
- git checkout xx 切换分支 -b 如果有同名
- git diff 查看改了什么
- git diff HEAD~1 HEAD 查看HEAD相对于HEAD~1的改动
- git diff filepath 工作区与暂存区比较
- git diff commitId filepath 与某一次提交进行比较
- git diff --staged 或 --cached  filepath 暂存区与HEAD比较
- git checkout -- filename 检出文件 -b 切换或创建分支 --orphan branchName 创建没有旧commit的分支
- git log 提交的日志 > 按下q推出 --graph 有图
- HEAD~3 往前3步的提交
- git pull = git fetch + git merge
- git merge xx 先切到目标分支 再 git merge 要合入的分支
- 平时更新用 pull --rebase
- git pull <远程主机名> <远程分支名>:<本地分支名>
- git push -f 强行push(当自己修改/合并了本地commit后可能会用到)
- git commit -am 不用add 直接commit
- git reset --hard upstream/master 强制与远程同步
- git rebase -i HEAD~1 合并commit
- git bash中 ctrl + w 撤销上次的输入
- saas项目不要add . 用commit -am 否则会新建package.lock
- git checkout -- <file> 撤销文件工作区相对于暂存区的修改
- git reset HEAD <file>可以把暂存区的修改撤销掉（unstage），重新放回工作区
- git reset --hard HEAD~x 按commit回退
- git commit --amend 修改commit信息
- git show commit_id 查看commit内容
- git reflog 对git更改的记录
- git reset --hard <hash> 回退操作至
- 未验证 git checkout <hash> 把HEAD挪至某commit(通过创建临时分支实现)
- git branch -d <branch_name> 删除分支
- git checkout -b <branch_name> <hash> 新建分支, 加上 hash 基于历史commit新建分支
- git reset --soft|--mixed|--hard <commit_id> 撤销提交，HEAD回退至之前的commit
- git reset HEAD~1 头部 commmit 回退至工作区
- git fetch origin <remote_branch_name>:<local_branch_name> 拉取远程分支到本地
- git remote -v 查看远程仓库详情
- git remote add <alias> <url>
- git reset 清除暂存区
- git checkout . 或 git checkout -- <filePath> discard工作区的修改
- git stash 清空工作区和暂存区 相应的当前修改放入缓存区 应用场景:写到一半想pull代码 又嫌commit太麻烦
- git stash pop 应用stash栈中顶部的diff到当前分支的工作区
- git push <远程主机名> <本地分支名>:<远程分支名>
- windows 下 git clone 会把换行的 LF 变成 CRLF；解决方法：设置 git 全局设置x3 然后 重新 git clone 或者 删掉相关文件 git reset --hard 远程分支

# vim
- http://linux.vbird.org/linux_basic/0310vi.php
- 按住shift
  - zz    保存退出
  - zq    不保存退出，q表示放弃
- D 删除本行在光标右侧的所有内容
- :q!不保存退出
- / 向后搜索 ? 向前搜索 n 重复上一个搜索动作, 直接 / 或 ？回车将搜索上一次的关键词
- u 撤销
- L 光标到屏幕最下方 H 光标到屏幕最上方 M 光标到屏幕最中间那行
- :w 保存
- nx n为数字 向后删除n个字符 如果x是大写 则是向前删除
- yy 复制光标那行 nyy n为数字 复制光标向下 n行
- p 粘贴到下一行 如果p是大写则粘贴到上一行
- u 撤销 ctrl + r 重做
- . 重复上一个动作..
- b	按照单词向前移动 字首
- e w	按照单词向后移动
- G 文档最后一行 gg 文档第一行
- v	进入光标模式，配合移动键选中多行
- Ctrl+f	向下翻页(forward)
- Ctrl+b	向上翻页(behind)
- Ctrl+d	向下翻半页
- Ctrl+u	向上翻半页
- `` 回到上次编辑的位置
- d^ d$ dG 删除本行光标前/后/光标到最后一行
- d 删除实际上都是剪切
- J 向下合并行
- ~ 切换光标位置的大小写
- n+ 光标下移动n行
- syntax on/off 语法高亮
- :>> :<< 当前行缩进
- o 向下插入空行并进入 insert 模式

# linux or mac terminal command
- `systemctl status` 查看整个系统的进程树
- `a=1 ./xx.sh` 这种方式 使得在 脚本 xx.sh 内部可取得变量 $a 而不会污染全局环境变量；这种方式在 windows 环境下貌似行不通，所以需要 `cross-env`
- 死锁：举个例子如果此时有一个线程 A ，按照先获持有锁 a 再获取锁 b的顺序获得锁，同时另外一个线程 B，按照先获取锁 b 再获取锁 a 的顺序获取锁。
- 陈旻： 硬盘 每个扇区有自己的控制块 通过格式化 成为分区，分区会出现在 /dev 下， 再将分区挂载到目录
- 考虑到磁盘IO是非常高昂的操作，计算机操作系统做了预读的优化，当一次IO时，不光把当前磁盘地址的数据，而是把相邻的数据也都读取到内存缓冲区内，每一次IO读取的数据我们称之为一页（B树的block），此行为称为`预读`, 一页的大小一般是 4k
- B树 B+树 https://juejin.im/post/6869532756498448392
- 一个物理核可以有两个逻辑核
- *并行* 一瞬间有多核同时工作 *并发* 一个核时间片轮转，看起来好像同时在干多件事，其实同一瞬间只能干一件事
- 进程是资源分配的最小单位 线程是调度的最小单位 https://zh.wikipedia.org/wiki/%E8%B0%83%E5%BA%A6_(%E8%AE%A1%E7%AE%97%E6%9C%BA)
- 线程上下文是进程上下文的子集
- 线程5状态 NEW READY RUNNING WAITING(waiting for event occur) TERMINATED
- *文件描述符* fd 非负整数 每个进程有一个 *fd表*
- 所谓“一切皆文件”，我的理解是：”文件“是一个 interface{ read(), write() } 实现了 read 和 write 方法的对象就是“文件”
- `/etc/resolv.conf` dns 服务器 ip 地址
- `tcpdump -i ens32 host 1.1.1.1 and port 3000 -w ./dwm.pcap` -i 指定网口(必填) ip 端口字段前可加上 `src` `dst` 表示源与目的, src 和 dst 可以用 `and` `or` 连接
- 进程重启自己的服务 `nohup service nginx restart &` 可能会起不来 此时 加一个 `> /dev/null` 即可
- 前面加 `nohup` 父进程被 kill 时 不会把当前进程干掉
- `jobs` 查看当前的后台任务
- `lsblk` 查看硬盘分区情况
- `fdisk -l` 列出当前连接的硬盘
- `mount` 挂载硬盘
- `du` 查看目录下的目录详情 `du -d 1` 深度为1 `-h` 便于阅读 `du -sh *` 查看目录下所有文件大小
- 末尾加 `&` 后台运行
- 淦： service 是 linux 提供的针对后台常驻进程的规范
- nohup 后台运行
- 定时任务 列表展示`crontab -l` 编辑`crontab -e`
- ssh key 生成 `ssh-keygen` `/Users/fy/.ssh/id_rsa` 登录`ssh -i id_rsa root@142.93.198.56`
- ssh 登录时 远程主机把公钥提供给 用户 存入文件 `~/.ssh/known_hosts`
- `ssh-copy-id user@host` 将公钥拷贝到机器上的文件`$HOME/.ssh/authorized_keys`，然后就可以免密登录了 `ssh user@host`
- `ln -s /xx/xx` 在当前目录下建立`xx/xx`的同名软链接
- top ; E 切换内存显示的单位
- 电脑安装的 shell 可以这样查看: cat /etc/shells
- cd /mnt 进入主系统根目录
- rm -rf 删除目录
- ubuntu子系统中 /mnt/c/.. 即可进入windows目录
- ll 当前目录下所有文件的信息 第一位：文件属性(-普通 d目录) 
rwx * 3 -表示否,  是否可读,是否可写,是否可执行 * 3 owner,group,other
- terminal 打开时貌似会读取文件 .profile 中的环境变量
- top 显示进程 q 退出 M 内存排序 P cpu 排序
- touch 创建文件
- cp [file] [newfile]	Copy file to file
- cp [file] [dir]	Copy file to directory
- mv [file] [new filename]	Move/Rename, e.g. mv -v [file] [dir]
- man [command]	Show the help manual for ‘command’,  / + 关键字 搜索 n 下一个关键字
- whatis [command]	Gives a one-line description of ‘command’
- ESC + backspace - will delete word, works better than ctrl + w in most cases.
- VAR="some text" 声明临时变量 等号两边不能有空格
- $work $workNote $skills 环境变量 位置 `/Users/fy/.bash_ ` `~/.bash_profile`
- 用 export 声明环境变量 可供子进程读取, 如果 export 后面没跟变量名 则所有变量成为环境变量
- env 或 printenv 打印所有环境变量
- echo $name 打印字符或变量 -e 开启转义
- 如果 出现 dquote> 原因是命令没有输完 输入"再回车即可
- find <dirPath> -name <fileName> 在目录下寻找文件 可用通配符 例如 *a.js; - - -type 根据类型查找(目录 文件) -ctime 最近 20 天 更新过的; `find . -name "*.zip" -o -name "*.sh"` -o 可以表示或; `find . ! -name '*.sh'` 用感叹号表示非; `find . -type d` 列出当前目录中的目录(递归); `-maxdepth 3` 向下最大深度3; `find . -type f -atime -7` 最近7天内访问过的文件 也可以 +7 和 -amin; -size ; `find . -name "*.md" | xargs grep "..."` 查找有 ... 内容的文件
- ls -al 查看文件 包括隐藏文件 -t 按时间排序 -F 目录结尾加上`/`
- ls 可加上万用字元来过滤文件(目录将不予显示) 例如 `ls *.html`
- cp source dest 复制文件
- ctrl + u, ctrl + x, delete 删整行
- ctrl+a / ctrl+e 光标移动至行首/行尾
- which 查看指令的绝对路径 比如 which python
- type <name> 判断是内建命令 还是 别名
- $PATH 中 以冒号分割
- $? 是一个特殊的变量 它是上一个命令的返回值
- $$ 是一个特殊的变量 进程 id 可 kill
- alias 指定 命令(脚本位置) 的别名 `alias ll='ls -lh'`
- gzip -d <file> 解压
- zip -r fileName.zip  dirPath 压缩包
- netstat -nat | grep 55007  查看 55007 端口使用情况; netstat -p 带上 program name; -a 表示 all, -n 表示 没有 localhost 等代称 都是数字, -t 只显示 tcp 的, -l 表示 listening
- 每个用户登录时都会读取`/etc/profile`
- cd - 进入上一个目录位置
- ps 查看进程
- if [ exp ]; then ; fi
- if [ -f someName ] 中的 [ -f someName ] 实际上等价于 `test -f someName`
- > 标准输出  ll >, 例如 `ll / > ~/rootfile`, > 覆盖 >> 累加
- pipe 一个进程的输出可以作为另一个进程的输入 例如: 当 ll 的内容太多 一屏幕的长度都远远不够时 可以 `ll | less` 将 ll 输出的内容 作为 less 的 参数; 管线后的 指令 必须能够接受标准输入
- `cut` 就是 split 例如 `echo ${PATH} | cut -d ':' -f 5` 将`PATH`变量中以`:`分隔, 截取第五个
- last 显示最近登录讯息
- grep 如果该行是我想要的 则输出那行 支持正则表达式; -v 没有指定的字符(反向); -n 高亮匹配的字符 -c 匹配个数 -A 匹配之后的几行 -B 匹配之前的几行
- netstat; show network status
- sort 排序(默认按每行首字母)
- uniq 去重(默认只去重连续的行，可以 `sort xx.txt | uniq`)
- tee <file> 读取文件并`标准输出`之 `tee file | grep sometext`
- $# ：代表後接的參數『個數』
"$@" ：代表『 "$1" "$2" "$3" "$4" 』之意，每個變數是獨立的(用雙引號括起來)；
"$*" ：代表『 "$1c$2c$3c$4" 』，其中 c 為分隔字元，預設為空白鍵， 所以本例中代表『 "$1 $2 $3 $4" 』之意。
- scp 远程 copy: scp /Users/fy/Documents/workProjects/frontend_dbaudit_common/dist/output/index.js root@192.168.30.131:/dbfw/web/public; scp 本地文件路径 root@192.168.30.162:/dbfw/web/public
- tar -zxvf FileName.tar.gz 解压 tar -zcvf FileName.tar.gz DirName 压缩
- 如果 curl 被 refuse 而访问的 ip 前端功能没问题 则很可能是 访问的端口被防火墙禁止访问
- 防火墙可以禁止外部访问未开放的端口 内部端口互访不会经过防火墙 iptables-save 可以查看所有开放的端口 如果要开放端口 可以 iptables -I + 复制 打印出 -A 后边的部分 并把端口替换成要开放的端口 防火墙也可能是 firewall
- 防火墙创建自定义链 `iptables -t filter -N IN_public_allow`, 自定义链必须
- issh 下 rz 命令可以 上传文件
- linux 的服务配置文件在 /etc/init.d 或 /etc/rc.d
- service serviceName 然后跟上命令: start stop status
- 更改文件名用 mv sourceName targetName
- 放包 tcpreplay -i eth0 -M1 xxx.pcap
- 如果 tcpreplay 放包时报错 message too long, mtu
- ifconfig 配置网卡
- /proc 下有各进程对应的进程号
- ps -ef; UID: 用户ID PID: 进程ID PPID: 父进程ID CMD 带中括号的进程都是内核态进程 PID 都是 2
- `nc -zv kmipptcjgh.dbaudit.aliyuncs.com 13001` 扫描 ip 或 域名的端口 
- ping 域名可得到 ip 地址
- rm * 删除该目录下所有文件
- chmod 改变用户对文件的权限(读写、执行)
- date 查看时间
- `a:-defaultVal` a变量若为空则使用默认值
- 在 shell 中直接执行 sh 脚本, 就是在当前 shell 进程 fork 一个子进程 shell 然后执行; 而如果是用 `source` 执行 则是在当前进程中运行
- test 命令用于检查某个条件是否成立，它可以进行数值、字符和文件(-e)三个方面的测试 `test -e /dmtsai && echo "exist" || echo "Not exist"` , 与-a或-o非! `test ! -d xx` 
- file 用于辨识文件类型
- 访问域名||ip失败，ping 域名，如果失败可能 dns 有问题, 如果成功 可以用 `tcping yuming.com 25` 探测端口
- 查看本机公网ip curl ifconfig.me
- dirname 去除文件名中的非目录部分 读取指定路径名保留最后一个/及其后面的字符，删除其他部分，并写结果到标准输出
- reboot 重新启动
- `if [ 1 -eq 1 ]` 中括号与内部表达式必须有空格隔开
- $() 或者 反引号 命令替换（command substitution），即完成引用的命令的执行，将其标准输出返回出来
- ${:} 与 ${::} 用于字符串提取 比如 ${w:1:4} 相当于 js 中的 `w.slice(0,4)`
- 让使用者输入变量 `read var; echo "var is $var"` 输入的字符被赋予 $var
- [] 中要有尽量多的空格 `[□"$HOME"□==□"$MAIL"□]`
- 单引号中都被识别为字符串(无法识别$变量) 双引号会识别变量 比如 "$foo xx" 或 "${foo} xx"
- for 循环: `list=(a,b); for key in ${list[@]} do ... done` `for ((i=1;i<=10;i++)); do ... done`
- seq 1 10
- 安装 rpm 包 `rpm -ivh 包全名`
- ls -F | grep /$ 查看所有目录
- $PWD 此变量表示当前目录
- 万用字元 wildcard；`*` 0到任意个任意字符；`?` 一个任意字符
- chmod 755
- curl -X POST --data '{"a": 1}' --header 'Content-Type:application/json; charset=UTF-8' `用 -X 指定请求的方法, 并用 --data 指定请求数据 -k 允许不用验证证书访问 ssl`
- Exit Status 命令返回码 表示命令执行成功与否 返回0表示成功，否则表示失败， 关于它有两个特殊命令： true 总是返回0 false 总是返回1
- shell script 中用 exit 命令来指定返回码
- Consider what happens if a variable is set to equal nothing.
- `#!/bin/bash -x` `set x; set +x` shell debug 模式 
- while shift 搭配 遍历所有 positional parameters
- 每个函数有自己的 $1 $2 ... 但 exit 是针对整个脚本的
- ${1:-"Unknown Error"} means that if parameter 1 ($1) is undefined, substitute the string "Unknown Error" in its place
- trap arg signals 收到信号则执行命令
- `grep b < a.txt` 输入重定向, 重定向文件要写在命令的最后
- nl 将输入字符每行前面加上数字标号
- `sed "s/text/TEXT/g" filePath` 将文本中的 `text` 替换为 `TEXT`, sed -> stream edit, `s/`代表 substitute 替换 还可以 `d/` 删除 两个/直接支持正则表达式匹配 `sed "/text/ d" filePath` 删除有 text 的那行, p 表示 print, q 表示 quit, 引号中可放置多个表达式(用分号分隔)
- `cat b.txt | awk '{FS=","} /pattern/ {print $2}'` 将文件内容中匹配 pattern 的行打印， 每行内容再以 "," 分隔， 打印每行第二项
- `df -h` 显示磁盘占用情况 -h 是为了加上单位
- `free -g` 内存使用情况 可 -g -m 表示 gb mb 单位
- 经典套路 `ls -t | grep zip | head -n 8 | awk '{ print "rm -rf "$0}' | sh` 删除最新的8个文件
- `traceroute ip` 每经过一个路由器返回一条 cool
- `pkill -f firewalld` 凭进程名称杀
- `xargs`

# windows powershell
- alt + 方向键 目录前进/后退
- 环境变量都在 `$env:` 中
- 命令行工具添加环境变量: 将目标目录(一般是bin) 添加到 Path 中，输入命令会在 Path 中依次搜寻
- win + 数字 按任务栏顺序切换程序 同一数字按多次->同程序的窗口间切换
- win + 方向 切换最大化最小化模式
- vscode ctrl + tab

# 网络
- arp 一台机器上 ip -> mac 映射表， 一台机器入网会在局域网吼一嗓子（可以伪造，中间人攻击）
- 数据包重放攻击 时效校验
- wifi 信号 数据包 类似无线电 一定空间范围内都能收到
- DNS 是应用层协议 基于 udp
- 回环地址 一般来说的 127.0.0.1 使这个ip直接指向本机
- 对 四层的 理解：网络层ip-机器到机器 传输层port-建立会话，端口的数量就是计算机并发会话数量的上限 应用层：业务行为数据
- 对 LAN 局域网 WAN 广域网 的理解: local 以交换机switch为核心连接少数几台设备形成的网络; wide 许多LAN的交换机连上router, 再把这些 router 相连
- 同一LAN内通信可用mac地址(mac address used only in LAN)，不同LAN之间通信要用ip地址(ip在LAN和WAN中都可以使用)
- 私有网段*3： 10.0.0.0/8 172.16.0.0/12 192.168.0.0/16 they can use NAT(net working translation) to communicate with other network
- 一个端口同一时间只能由一个进程使用
- voice(或直播) traffic use udp 因为如果用 tcp 一旦出错要恢复， 这就造成延迟
- 三次握手：SYN, ACK/SYN, ACK
- 四次挥手：FIN/ACK, (ACK, --------, FIN/ACK), ACK,
- sender 每发一个tcp包, receiver 要回应一个 ACK(一个ack可关联多个segment 这与 window size 有关， 当 window 归零， sender 要等收到 ack 才会发送下一个， 如果 receiver 有包没收到， 在返回的 ack 中会包含丢包的 seqence number，并且 ack 会要求减小 window size)
- csrf 通过识别 referer 防御

# sql
- 可尝试 update table set xx = xx + 1
- update 时间时 可以这么写: set col = '2018-10-10'
- in () 对 null 不起作用 必须 is null
- double类型声明时必须输入整数位和小数位 如: double(64, 1)

# mac
- cmd + H 隐藏窗口
- fn + up/down 向上/下 翻页
- cmd + alt + esc 任务管理器

# FAQ
- gitlab 要 push -f 成功 需先设置 repository-protected-branches-settings
- 如果访问不了公司的服务器 可能是因为连的不是dbAppSecurity

# 框架 react vue egg umi
- vue 组件中的 `model: { prop: string, event: string }` 可指定 v-model 用于该组件时对应的 value 和触发的事件，默认是 prop: value|checked, evnet: input|change
- vue provide inject
- vue 可通过 `<component :is="comp1">` 动态切换组件
- reactRouter 基于 window.history, 从上到下 find
- react 中 props 只要引用有变就触发组件渲染，而父组件渲染时必定会给一个新的props引用，这造成父组件的渲染必定导致子组件渲染，在 class 中可用 shouldComponentUpdate 或者 PureComponent 减少无用渲染， 函数组件中用 React.memo https://juejin.im/post/6844904000043614222
- useCallBack 可以实现类似 watch 的效果
- dva redux 的 hook 取数据用 useSelector 不要用 useStore
- 组件继承 PureComponent 时，自动有 pureComponent 浅比较 shouldComponentUpdate

# 浏览器 api css
- 通过地址栏输入url 去 get 资源，发出的请求会自动加上一个 header 字段：`cache-control: max-age=0` 禁止使用强缓存
- `cache-control: no-cache` 表示禁用强缓存，至少是协商缓存
- 可视化绘图 Canvas 的性能受画布尺寸影响更大，而 SVG 的性能受图形元素个数影响更大
- 获取 dom 节点的布局尺寸可能会造成回流等副作用，因此如果在循环中使用，应先在循环外存入变量
- `<video>` 控制播放速度 `v.playbackRate = 3`
- performance 中 点击右上小齿轮 可以模拟 network cpu 很慢的场景
- 懒加载 图片 scrollTop 碰线时通过 `var foo = new Image(); foo.src='http://xx.image.jpg'` 这里的 foo 实际上是一个没挂载的 dom 元素，因此给 src 赋值时，会立刻发出请求
- tab 进程的主线程 `main thread` 根据 css 计算每个 dom 节点的盒模型(computed) 并连接 生成 `layout tree`，再计算绘制顺序 `paint order`， 然后 栅格化 `rasterizing`：第一步就是 合成 `compositing` 将页面分层，分别栅格化(可复用)，再合成, 分层得到 `layer tree`,然后由 合成线程来合成，合成线程将图层分为小块，每个小块交付一个(分治) 栅格化线程(缓存到GPU,视口内的优先栅格化), 合成完成后得到 合成帧 交给浏览器进程，每次滚动都会提交新的 合成帧
- 主线程 `layout tree` -> 合成线程 `合成帧` -> 浏览器主进程
- `The benefit of compositing is that it is done without involving the main thread. Compositor thread does not need to wait on style calculation or JavaScript execution.`
- `If layout or paint needs to be calculated again then the main thread has to be involved` 所以我猜测，css 动画不会影响到 layout, 也就不会影响到 js 线程和 渲染主线程
- 有挂载回调函数的页面区域会被合成线程标记为 `Non-Fast Scrollable Region`, 如果触发事件在该 region 之外, 则合成线程不会等待主线程, 因此事件代理的元素不可过大, 在 `addEventListener` 的 options 中声明 `{passive: true}` 可以解决这个问题
- 触发时间很接近的事件将会批量被 dispatch
- 将 js 任务分为小块用 `requestAnimationFrame` 执行对于连续顺滑动画来说是较好的实践(在浏览器下一次重绘之前执行,它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次，这样就不会引起丢帧)
- reflow回流 布局变化，从头开始重渲染; repaint重绘 颜色变化 一部分要重画; reflow 必定导致 repaint, 反之则不成立
- `translate` 不会造成回流
- 慎用事件代理，如果代理的元素过大，`the compositor thread has to communicate with the main thread and wait for it every time an input event comes in` https://developers.google.com/web/updates/2018/09/inside-browser-part4#be_aware_when_you_write_event_handlers
- `document.images` 可获取页面的所有图片
- canvas context 可以:
  - 路径（beginPath开始 stroke 描边 fill 填充
  - 简单几何图形 设置描边和填充的样式 `fillStyle` `strokeStyle`
  - 文字 `fillText(text, x, y [, maxWidth])` `strokeText(text, x, y [, maxWidth])`
  - 内存中的图片 `drawImage(image, x, y, width, height)`
  - 保存画笔快照 `save()` `restore()`
- 浏览器解析 html 开始时将 pre-scan 外部资源，一遍一开始就发出并发请求 
- input 上传 可用 `accept` 在弹窗中过滤文件，例如 `.js` `text/*` `image/*`, 多个项目用逗号隔开
- https://developers.google.com/web/updates/2018/09/inside-browser-part1
- 浏览器构造(chrome): `top browser process` -> `renderer process for each tab`
- 列出浏览器进程详情 右上角菜单 > 更多工具 > 任务管理器
- 浏览器域名刷新后 network 旧域名的日志会被清除，如果必须看旧域名的请求，要勾选 `Preserve log`
- `link` 标签预加载：
  - preload 提供了一种声明式的命令，让浏览器提前加载指定资源(加载后并不执行)，需要执行时再执行, 必须配合 `as` 使用， 据说 preload 是不阻塞页面渲染的
  - prefetch 告诉浏览器加载下一页面可能会用到的资源 
  - 要使用预加载的脚本时，append 一个 同 src 的 script 标签即可，preload 脚本 不会发请求， prefetch 会发请求然后从缓存中找
  - dns-prefetch DNS 请求在带宽方面流量非常小，可是延迟会很高，尤其是在移动设备上。通过 prefetching 指定的 DNS 可以在特定的场景显著的减小延迟，比如用户点击链接的时候。有些时候，甚至可以减小一秒钟的延迟
- 多个 script 标签的情况下，首先会并发请求所有 js 脚本，然后前面的的脚本执行完了才能执行下一个脚本
- script 标签，默认情况下 解析阻塞的 Javascript 会导致浏览器必须加载并且执行脚本，之后才能继续解析，所以 vendor.js 必然放在 index.js 和 app.js 之前
- 图片压缩网站 tinypng
- 滚动常用： `overflow: auto`
- microTask 微任务不会造成重绘(因为执行栈没空)
- Chrome限制了所能使用的内存极限（64位为1.4GB，32位为1.0GB）
- Chrome 隐藏控制台 chrome://net-internals/#dns
- console.table() console.assert()
- console.trace() 输出当前堆栈位置
- console.dir() 打印所有属性
- 右键 条件断点(橙色)
- window.open window.history...
- window.reload 重载页面 无视缓存
- 路由 # 后的变化不会发给后端
- window.open 可能会被浏览器阻止 而 a 标签的 onClick 不会, 当 window.open 由 a 标签触发时不会被浏览器阻止
- text-overflow: ellipsis; 必须配合 overflow: hidden 使用 超出的文字部分 用省略号
- less 编译出的 css 文件中 class 等等往往会加上一个id 避免全局污染， 如果要禁止这个行为 可以这样写 `:global(.goodDiv){ color: yellow }`
- add Listener 最后一个参数 捕获阶段(默认false)
- stopPropagation stopImmediatePropagation 阻止剩余时间
- contextmenu 右键菜单事件
- user-select: none 
- textInput change
- white-space: nowrap 控制分词换行逻辑
- flex 布局： 父元素(display:flex justify-content 主轴排列 align-items 次轴对齐 flex-direction 主轴方向 flex-wrap 换行) 子元素(flex: 数字(在主轴上占的比例))
- text-transform: capitalize 文字大写
- `height: calc(100vh - 100px)` 高度相对于视口高度(100vh)
- 选择器： a+b: 跟在a后面的b; a~b: a的兄弟元素b foo:not(bar); 在xx的基础上排除bar(可以使用伪类);
- 字体流光效果：用 `-webkit-background-clip` 将 background-image 限定在文字范围，光是这样还看不出效果，因为字体默认黑色，会把 background-image 盖住，所以还要把 `color` 设置为透明 `transparent`
- `filter` 属性，可调用提供的各种函数产生滤镜效果 例如模糊滤镜：`filter: blur(4px);`
- `animation` 与 `@keyframes` 配合使用
- 教训：`animation` 中的时间必须带上单位，例如 `10s`, `10` 是无效的!
- 行内元素无法应用动画
- css 使用旋转动画时 可在元素的css上用 `transform-origin` 指定旋转轴心的位置坐标(左上为原点开始算)
- `pointer-events: none` 元素不会成为 click 的 target, 可用于水印
- js 内部下载文件(method 非 get 情况下会用到)：发出请求， 返回的 二进制 数据用 `new Blob` 包装, 在用 URL.createObjectURL(data) 得到临时 url, 在将临时 url 赋予一个 a 标签的 href, 调用 a 标签的 click 方法

# javascript typescript node npm yarn 防御编程
- `var foo = function bar(num) { return num > 0 ? bar(num - 1) + 1 : 0 }` 这种形式的 bar 不会声明在全局作用域, bar 会成为 bar 内部的变量，可用于递归
- 函数的 `length` 表示它的参数个数
- `NaN !== NaN` 返回 true
- namespace 相当于 d.ts 文件中的对象 例如在 namespace NNN 中声明 interface III, 则接下来便可以以 `NNN.III` 的方式使用 III
- declare module 可以在单个文件中 声明多个模块内的类型
- ts 扩展 window 接口 `declare global { Window { xx: string } }`
- tcp 通过 net 模块处理
- 父子进程 IPC通信 `process.on()` `process.send()`
- 文件描述符在形式上是一个非负整数。实际上，它是一个值，指向内核为每一个进程所维护的该进程打开文件的记录表。当程序打开一个现有文件或者创建一个新文件时，内核向进程返回一个文件描述符。
- 字符一旦在网络中传输，都要转成 buffer
- 异步的优势：IO是昂贵的(硬盘、网络)
- commonJS 核心模块(http、fs、process等等)缓存外最优先的，用户编写的模块如果与之重名将不可能加载 路径形式模块以真实路径为索引存放于缓存
- `require('xx')` 的时候， node 会依次遍历 `module.paths` 这个数组中的路径, 从自己开始向 parent 方向形成的链表, 每个路径后加上 `/node_modules` 因此这种模块加载的速度是最慢的， 如果得到文件则直接采用 如果得到目录 会JSON.parse(package.json),取出其中的`main`属性作为入口，若没有`main`,则默认index.js
- 操作失败可以被处理,也应当被处理。程序员的失误无法被处理或可靠地恢复（本不应该这么做），尝试这么做只会让问题更难调试。
- 捕获全局错误
```
process.on('uncaughtException', function (err) {
    console.log(err);
}); 
```
- process.nextTick 也是微任务 且优先级高于 promise.then
- 判断浮点数相等 `0.1 + 0.2 - 0.3 < Number.EPSILON`
- JSON.stringify($tmp, null, 2) 序列化时 缩进2
- Buffer 二进制数据流 在 V8 heap 之外, 创建: var foo = Buffer.from(), 提取: foo.toString('hex')
- streanm 流 每次收到的 buffer 须注意汉字被截断的问题
- buffer 拼接： Buffer.concat([], size)
- Buffer 类似于数组 每一位都是两位的16进制数字 也就是 0-255
- 项目中的 .npmrc 文件 可以配置 npm 的源等等
- yarn 四步 1.resolve 2.fetch 3.link 4.build
- https://juejin.im/post/5ab3f77df265da2392364341#heading-12
- npm run 命令在执行时会把 ./node_modules/.bin 加入到 PATH 中，使我们可直接调用所有提供了命令行调用接口(package.json 中有 bin)的依赖包
- Buffer 的内存不经过 V8 的分配机制，因此可以超出 1.5G 的限制
- V8 HEAP 分为新生代和老生代 scavenge算法 新生代GC: 分为 from to(闲置) 两个区，把from中的存活对象复制到to,然后from和to互换，空间换时间(这种说法的原因可能和内存连续性有关)，使它速度相当快，但多占了一倍的空间，所以用于规模较小的新生代，经过多次复制的对象将进入老生代, 老生代使用 mark-sweep mark-compact 算法，正常情况下用 mark-sweep, 效率更高，但可用内存会形成小碎片较难利用， 当剩下的完整内存不够利用时使用 mark-compact，存活的对象被移动到一边，然后直接清除边界外的内存
- 文件写入比数据库写入更高效
- 无法立刻回收(出栈时)的内存对象：1. 全局变量 2. 闭包
- `stream` 可通过 highWaterMark 指定传输数据每次达到多少触发 `data` 事件， 每次拿到的都是一个 buffer
- `0xa` 表示 16进制 10
- *防御* 防止对0取余 比如 `1 % 0`
- npm run script 新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写mocha test就可以了

# golang
- 函数可以 return 多个值
- 协程之间通过 chanel 通信 

# 正则表达式
- `非`的表达方式`[^abc]`,非a非b非c
- 捕获组可以将一部分被替换的字符串还原 记得括号和$
- 在量词`* {3}`后面加上`?` 非贪婪模式

# 其他(加密,es,数学)
- 辗转相除法用来求最大公约数(除数和被除数都由公约数组成，因此余数也是由公约数组成，每轮取余，余数一轮比一轮小，最终止于最大公约数) 如果最后要对乘积取余，那么在事先对乘数取余不会对结果造成影响
- 一个磁盘上的数据在另一个磁盘上存在一个完全相同的副本即为镜像 格式有 ISO、BIN、IMG、TAO、DAO、CIF、FCD
- 172.16.0.0/12 这是 ip 网段的掩码表示法，12是掩码中1的个数，也就是12个1，之后都是0
- 非对称加密: 公钥用来加密 私钥用来解密， ssl 属于非对称加密, 服务端找 CA 申请证书(由服务端网址生成，方便客户端校验), 然后与客户端的交互不再返回公钥而是返回证书, 客户端浏览器用内置的 CA 验证证书
- 双向认证：绝大部分网站是单向认证，即客户端验证服务端的身份，但在一些toB的情况下，服务端也要验证客户端，比如AiNTA日志外送到大数据平台，于是两端都需要放置CA证书(用来验证服务端的签名)、客户端证书
- 知乎-加密原理 RSA 大数因式分解 https://zhuanlan.zhihu.com/p/37738632 -> 证书：购买证书时 机构会把 公钥、域名、有效期等信息计算哈希，再用机构的私钥加密成为签名，把签名交给网站，https 握手时，携带签名，客户端把签名用公钥(机构根证书公钥直接写在出厂机器上)解密，如果证书链符合出厂证书信息中的域名等信息则通过， 认证服务端后，客户端创建一个对称加密的秘钥发给服务端
- RSA 原理： `3234823094823423840239842380^x % 32123482309483 = 104993112` 的 x 很难计算, 双方各有一个x, 底数 和 被取余数 作为 公共参数(互发,黑客也能拿到)； `3234823094823423840239842380^(x * y) % 32123482309483 = 3234823094823423840239842380^(x * y) % 32123482309483` x 和 y 为一对秘/公钥， 注意！底数 m 和 x y 是由一对质数经过特定的算法生成的，并不是随便取便可以的。
- 由公钥加密的信息只能由私钥解密
- 有公钥的人可以确认某些信息只能由拥有私钥的人返回，以下是我的猜测，比如 google ca 的 公钥我有，I have a message like 'aha', then I encrypt it with google ca's public key, then send it to google ca, then google ca decrypt it, and get the message 'aha', then google ca send 'aha' back to me, then I know it's google ca.
- elasticSearch 将文档用 `split(/xx/g)` 的方法进行分词 再用分词建立反向索引 反向索引指向正向索引 用 lucene 库可以建立反向索引 对它封装成了 elasticSearch
- es 中的概念与 mysql 中对照： 索引-数据库 类型-表 文档-行

# html
- `<a>` target="_blank" 打开新标签
- d3
  - `stroke-dasharray` 用来控制虚线的节奏
  - 方法 `interpolate`, 两个参数： start and end value
  - `scale` `Encodings that map abstract data to visual representation` 函数-由数据映射到视图上的属性(像素、颜色等等)
  - 概念 `band scale` 柱状图的x轴 https://raw.githubusercontent.com/d3/d3-scale/master/img/band.png
  - 概念 `tick` 刻度
  - `.data().join()` 渲染出元素 with diff
  - `selection.transition` - schedule a transition for the selected elements.
  - `transition.delay` - specify per-element delay in milliseconds.
  - force: `charge` 斥力 `forceX` `forceY` 吸力
# http tcp 网络
- tcp 会话复用 http 1.1 由 keep-alive 控制 可以一个tcp会话建立后一段时间内复用该tcp会话 但 1.1 的 http 请求是串行的 因此耗时减少有限，而 http2.0 可以并行
- websocket 相当于长连接的 http 一次头信息 之后的 message 都是 body
- token: from lee.zhang - 令牌，请求之前先去拿token，例如 sts，token需要符合后端制定的算法
- post 请求 302 重定向到 get https://en.wikipedia.org/wiki/Post/Redirect/Get

# 算法 -> 同步到 CSDN 或 掘金
- 图 广度优先 声明一个队列(先进先出，用于遍历) 每个 vertice 染色，最初白色 循环：1.从队列中取出一个 vertice，历之，染黑  2.通过邻接矩阵得到它的相邻 vertice，入队并染成灰色 3. 重复直到队列空
- 有向图 拓扑排序(依赖深度优先dfs)：顺序编排 `finishTime` 倒排 因为一个节点的前溯节点的 `finishTime`(返回的时间) 一定比该节点的 `finishTime` 更大

# 安全
- 密码学历史 substitution(替换) -> permutation(排列-grid, 先横之字形排列, 再竖之字形顺序输出)
- AES 将数据分成 16byte 的代码块 先 substitution 再 permutation
- ssrf 原因大都是由于服务端提供了从其他服务器应用获取数据的功能，且**没有对目标地址做过滤与限制** 如果可以通过请求参数(ip域名)的方式让网站访问ip或域名，也就是以外网入口机器为跳板，通过该漏洞能访问内网机 探测方法：(**instanceId**=1.1.1.1, 可以从0.0.0.0扫描到255.255.255.255，看内网有哪些IP) *所有调外部资源的参数都有可能存在ssrf漏洞*
- bWAPP 漏洞演示平台

# nginx
- 本地位置 /usr/local/etc/nginx
- nginx 启动
- nginx -c /xx/xx.conf 指定配置文件
- nginx -s stop 停止 `-s` 含义为 signal 还支持 `quit` `stop` 
- nginx -s reload 重载
- `server_name` 指定域名
- `proxy_pass` 代理到 域名端口 代理超时设置: `proxy_send_timeout 300s` `proxy_read_timeout 300s`
- 超时设置 `send_timeout 300` `keepalive_timeout 300`
- 403 很可能是 nginx.conf 中 user 未设置为 root 引起的
- `location /cs70-oem-b/dbaudita/1.0.8/ { alias /root/home/; }` 将 路由/文件名 映射到 目录/文件名
- sls 相关配置与证书在 /data/yundunDbauditV2/cloud_db_audit_web_libs/web_app/nginx/conf 中
```
user root;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location /cs70-oem-b/dbaudita/1.0.8/ {
            alias /root/home/;
        }

        
         location /home/ {
            alias /root/home/;
        }

        location / {
        }

        

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
  server {
      listen       443 ssl http2 default_server;
      listen       [::]:443 ssl http2 default_server;
      server_name  _;
      root         /usr/share/nginx/html;

      ssl                         on;
      ssl_certificate             dbfwServer.crt;
      ssl_certificate_key         dbfwServer.key;
      ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;
      ssl_session_cache           shared:SSL:10m;
      ssl_session_timeout         5m;
      ssl_dhparam                 dbfwServer.pem;
      ssl_prefer_server_ciphers   on;
      ssl_ciphers                 "ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES256-GCM-SHA384:AES128-GCM-SHA256:AES256-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA:DES-CBC3-SHA:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!MD5:!PSK:!RC4";
                                      
      location /cs70-oem-b/dbaudita/1.0.8/ {
        alias /root/home/;
      }

      # Load configuration files for the default server block.
      include /etc/nginx/default.d/*.conf;

      location / {
      }

      error_page 404 /404.html;
          location = /40x.html {
      }

      error_page 500 502 503 504 /50x.html;
          location = /50x.html {
      }
  }

}
```

# 董佳给的
//查看centos版本
cat /etc/centos-release

//服务器连不上网
打开 vi /etc/resolv.conf，增加 nameserver 8.8.8.8
重启网络: service network restart

//修改linux mtu
echo "9000" > /sys/class/net/ens32/mtu

//cpu
cat /proc/cpuinfo

//内存
free -g

//磁盘
df -Th

//文件大小
du -sh *

//ssh远程连接
ssh root@192.168.30.131

//scp
scp 文件名 root@IP:路径
scp test.txt root@192.168.30.131:/data/jia.dong

//数据包回放
tcpreplay -i eth0 -M1 insert_affected_row_error_192.168.30.136_3306.pcap
-i     指定网口
-M    指定回放速度 M/s

//重启mysql变种服务
service mariadb restart

//关闭防火墙
systemctl stop firewalld

//修改服务器日期
date -s "2019-08-01"

//修改服务器时间
date -s "08:00:00"

//给文件赋可执行权限
chmod 755 文件名

//mac强制退出应用程序
option+command+esc

//当程序出现coredump时，打开core文件的步骤
mkdir /data/core
cd /data/core
echo "/data/core/core-%e-%t" > /proc/sys/kernel/core_pattern
ulimit -c unlimited

top中一些字段的含义：
VIRT：virtual memory usage 虚拟内存
1、进程“需要的”虚拟内存大小，包括进程使用的库、代码、数据等
2、假如进程申请100m的内存，但实际只使用了10m，那么它会增长100m，而不是实际的使用量
RES：resident memory usage 常驻内存
1、进程当前使用的内存大小，但不包括swap out
2、包含其他进程的共享
3、如果申请100m的内存，实际使用10m，它只增长10m，与VIRT相反
4、关于库占用内存的情况，它只统计加载的库文件所占内存大小
SHR：shared memory 共享内存
1、除了自身进程的共享内存，也包括其他进程的共享内存
2、虽然进程只使用了几个共享库的函数，但它包含了整个共享库的大小
3、计算某个进程所占的物理内存大小公式：RES – SHR
4、swap out后，它将会降下来
DATA
1、数据占用的内存。如果top没有显示，按f键可以显示出来。
2、真正的该程序要求的数据空间，是真正在运行中要使用的。

top后按什么排序
P：以CPU的使用资源排序显示 
M：以内存的使用资源排序显示 
N：以pid排序显示 
T：由进程使用的时间累计排序显示
 k：给某一个pid一个信号

# intellij idea
- 查询一个方法的使用代码 在方法名处右键 选择 `Find Usages`
- shift + alt + 鼠标点击 ，多光标同时编辑
- ctrl + [ 或者 ] 跳转至当前代码块(大括号)的边界
- ctrl + shift + 上下方向 行上下移动
- ctrl + F11 标签标记行
- alt + F12	打开命令终端 terminal
- alt + 数字， 1 目录 2 标签 5 console
- ctrl + f4 关闭当前编辑文件
- ctrl + alt + 左右 光标回到上一个位置(跨文件)
- shift + 回车 插入一行
- shift + shift , ctrl + n 搜索
- ctrl + \ 通过 url 搜索 service
- idea 环境变量设置 右上角 下拉 `Edit Configurations`
- 分屏：顶部tab 文件上右键 Split Virtically/Split Horizontally

# JAVA
- 类中的抽象方法 abstract method 没有函数体，由子类实现
- 方法引用 System.out **::** println , 可用于 lambda 表达式中
- spring 在 new Controller 的时候 根据形参中的 service 反射得到 service 的类
- ctrl + alt + l 改缩进的快捷键
- int[] 是数组不是对象, Arrays 针对数组。 实现了 Collection 的是对象
- `Arrays.toString deepToString` `int[] numbers = new int[5]` `Integer.parseInt(x)`
- 数字类型的隐式转换只会发生在类型占用内存 小 -> 大 的情况 比如 short + int
- final 相当于 const
- `String` 是引用类型 因此双等号 == 比对的是引用地址
- `long num2 = 89123123434` 会报错，因为表达式中的单个数字默认就是 int, 解决方法是在数字后加上 `L`, 同样 小数默认为 double, 声明 float 类型需要在数字后面加 F
- 一个类 new 的时候可以通过多种不同的入参选择不同的构造器函数来创建实例 构造器内部用 `this` 来引用别的构造器
- 如何让 Spring 帮我生成 Bean 呢？ Spring 隐式发现和自动装配：只需要在类定义上加上@Compoennt、@Service、@Controller 等注解即可让 Spring 发现并生成 Bean，当然 Spring 要通过 @ComponentScan 开启自动扫描。这是目前最常用的方式。
- java 文件顶部的 `package` 字段表示 命名空间
- Annotation(**注解**)就是Java提供了一种元程序中的元素关联任何信息和任何元数据(**metadata**)的途径和方法。Annotation是一个接口，程序可以通过反射来获取指定程序元素的Annotation对象，然后通过Annotation对象来获取注解里面的元数据。
- 数字类型 byte(8位) short(16位) int(32位) long(64位) float(32位 单精度) double(64位 双精度)
- 类型转换 `int i1 = 123; byte b = (byte)i1;`
- pom.xml `Project Object Model` 它是Maven项目中的文件 在Maven世界中，project可以什么都没有，甚至没有代码，但是必须包含pom.xml文件
- interface 中的 `default`, 实现类中默认会拥有这个属性，不需要再专门实现一遍
- 一般来说每个服务 都会有一个 interface 对应 1个 或则 多个 实现类, idea 左侧的绿色原点可以查找属性的实现
- JDBC `Java Data Base Connectivity` 是Java应用程序用来连接关系型数据库的标准API，为多种关系型数据库提供一个统一的访问接口
- Spring 
  - 依赖注入 面向切面
  - Bean(组件)

# 微信小程序
- **app.json** 所有页面的入口 wxml 文件 必须在 pages 注册，就像 vue 的 components 一样
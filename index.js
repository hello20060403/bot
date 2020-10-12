const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const welcomeChannelName = "안녕하세요";
const welcomeChannelComment = "어서오세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '!help를 쳐보세요.' }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content == ('!서버상태')) {
    return message.reply('정상');
  }

  if(message.content == "!방송") {
    message.reply("https://www.twitch.tv/ewol12")
  }

  if(message.content == "!후원") {
    message.reply("https://twip.kr/ewol12")
  }

  if(message.content == "!노래1") {
    message.reply("https://youtu.be/kr5VlZpdnpI")
  }

  if(message.content == "!구독") {
    message.reply("https://www.twitch.tv/products/ewol12/ticket")
  }

  if(message.content == "이월바보") {
    message.reply("어허~!")
  }

  if(message.content == "!버전") {
    message.reply("V1.5 정상버전")
  }

  if(message.content == "!채팅규칙") {
    message.reply("채팅규칙♥처음이라면 원래보던 트수처럼 채팅치자!인사는 월하 해주시면 감사합니당!!다 같이 즐겁게 놀아주세용 ٩(๑•̀o•́๑)و 욕설, 도배, 논란되는 발언 X서로 닉언급, 친목 X (인사는 트하까지만~)선넘는 채팅 X시청자수 언급 X타스 언급 자제(합방, 제가 먼저 언급했을때 아니면 자제해주세용)타스 비하, 욕하시면 바로 밴합니당본인방송 홍보금지 바로 밴한다잉클립 잘 따주면 월이가 많이 사랑해쥼😍1회 경고, 2회 밴")
  }

  if(message.content == "!트게더") {
    message.reply("https://tgd.kr/s/ewol12/34176912?q=ewol12")
  }

  if(message.content == "!이월봇추가") {
    message.reply("https://discord.com/oauth2/authorize?client_id=756326063201845329&scope=bot")
  }

  if(message.content == "!마크섭") {
    message.reply("minecraft.ewol.kro.kr")
  }

  if(message.content == "!노래2") {
    message.reply("https://youtu.be/QxmGiqqYrn8?list=RDMMQxmGiqqYrn8")
  }

  if(message.content == "!노래3") {
    message.reply("https://youtu.be/Ni0bXuKvvT8?list=RDMMQxmGiqqYrn8")
  }

  if(message.content == "!노래4") {
    message.reply("https://youtu.be/hdk08CWJKV0?list=RDMMQxmGiqqYrn8")
  }

  if(message.content == "!노래5") {
    message.reply("https://youtu.be/WJ16v-hD1mw?list=RDMMWJ16v-hD1mw")
  }

  if(message.content == "!노래6") {
    message.reply("https://youtu.be/uNjrPgnI9rI?list=RDMMWJ16v-hD1mw")
  }

  if(message.content == "!노래7") {
    message.reply("https://youtu.be/TQNIM3HeuH0")
  }

  if(message.content == "!노래8") {
    message.reply("https://youtu.be/QwdbFNGCkLw")
  }

  if(message.content == "!노래9") {
    message.reply("https://youtu.be/CWA3ejOXIBA")
  }

  if(message.content == "!노래10") {
    message.reply("https://youtu.be/r4QzYXx6jag")
  }

  if(message.content == "!버그") {
    message.reply("https://discord.gg/7nQBbhP")
  }

  if(message.content == "!제작자") {
    message.reply("제작자 바보임 ㅋ")
  }

  if(message.content == "이런싸가지") {
    message.reply("꼬우신가요?매롱~~~~~꼬우신가요?매롱~~~~~꼬우신가요?매롱~~~~~꼬우신가요?매롱~~~~~꼬우신가요?매롱~~~~~꼬우신가요?매롱~~~~~")
  }

  if(message.content == "삭제한다?") {
    message.reply("제작자님 사랑합니다 하하 장난인거 알죠?")
  }

  if(message.content == "봐준다") {
    message.reply("에휴 저 병진 매일 삭제한다고 지럴이여")
  }

  if(message.content == "뭔말했냐?") {
    message.reply("어? 아니에요")
  }

  if(message.content == "!도배") {
    message.reply("도배")
  }

  if(message.content == '!이월') {
    let img = 'https://cdn.discordapp.com/attachments/662331183069396993/712936611368796180/-_.png';
    let embed = new Discord.RichEmbed()
    .setColor('#FF00FF')
      .setTitle('ewol12')
      .setURL('https://www.twitch.tv/ewol12')
      .setAuthor('이월봇', img, 'https://www.twitch.tv/ewol12')
      .setThumbnail(img)
      .addBlankField()
      .addField('이월정보', '방송 일정 : 완전 랜덤쓰 그래두 6-9시에는 뱅온 첫 방송 날짜 : 19년 8월 24일본인 생일 : 12월 15일')
      .addField('이월TWIP', 'https://twip.kr/ewol12', true)
      .addField('이월프로그램다운하기', 'https://cdn.discordapp.com/attachments/756326812841279572/757416723342295090/NEW.exe', true)
      .addField('이월프로그램 소개', '현재 이월프로그램과 이월봇은 같은 개발자가 만드는 중이며 현재 다운로드 할경우 바이러스 경고가뜨는데 바이러스는 없습니다.', true)
      .addField('이월봇,이월프로그램 버그신고방법', 'https://discord.gg/7nQBbhP\n1.위에 디코방에 드러가서 신고하기\n2.위에 방법이 어려운경우 개인DM허용\n3.푸딩#1637')
      .addBlankField()
      .setTimestamp()
      .setFooter('고수였던것이 만듬', img)

    message.channel.send(embed)
  } else if(message.content == '!help') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [      
      {name: 'ping', desc: '현재 핑 상태'},
      {name: '!청소', desc: '텍스트 지움'},
      {name: '!초대코드', desc: '해당 채널의 초대 코드 표기'},
      {name: '!초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
      {name: '!이월', desc: '이월님 소개 및 개발자 소개'},
        {name: '!도움말', desc: '(help) 명령어 안내'},
        {name: '!전체공지', desc: 'dm으로 전체 공지 보내기(이월님만 가능)'},
        {name: '!전체공지2', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
        {name: '!방송', desc: '이월님 채널로 이동'},
        {name: '!후원', desc: 'TWIP으로 이동합니다.'},
        {name: '!노래(1~10)', desc: '노래를 추천기능~!.'},
        {name: '!구독', desc: '트위치구독'},
        {name: '!버전', desc: '버전을 알려줍니다.'},
        {name: '!채팅규칙', desc: '트위치 생방송 채팅규칙을 알려드립니다.'},
        {name: '!트게더', desc: '트게더 로 이동합니다.'},
        {name: '!이월봇추가', desc: '자신의 서버에 이월봇을 추가하고싶다면 "!이월봇추가"을 쳐보세요'},
        {name: '!마크섭', desc: '마크서버 주소을 알려줍니다.'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 이월봇 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`이월봇 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '!초대코드2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '!초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('!전체공지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('공지 of 이월봇')
        .setColor('FF00FF')
        .setFooter(`이월봇 BOT ❤️`)
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);
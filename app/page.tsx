import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>中国交通知识</h1>
      <section className={styles.references}>
        <p>资料来源：</p>
        <ul>
          <li>
            <Link
              href="https://app.mps.gov.cn/gdnps/zc/content.jsp?id=8282949"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noreferrer">
                道路交通安全违法行为记分管理办法
              </a>
            </Link>
            （自2022年4月1日起施行）
          </li>
          <li>
            <Link
              href="https://app.mps.gov.cn/gdnps/zc/content.jsp?id=8282932"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noreferrer">
                机动车驾驶证申领和使用规定
              </a>
            </Link>
            （自2022年4月1日起施行）
          </li>
          <li>
            <Link
              href="https://app.mps.gov.cn/gdnps/zc/content.jsp?id=8282962"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noreferrer">
                机动车登记规定
              </a>
            </Link>
            （自2022年5月1日起施行）
          </li>

          <li>
            <Link
              href="https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3YWIyMzFlYjAxN2FiZDYxN2VmNzA1MTk%3D"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noreferrer">
                道路交通安全法
              </a>
            </Link>
            （自2021年4月29日起施行）
          </li>
          <li>
            <Link
              href="https://flk.npc.gov.cn/detail2.html?ZmY4MDgwODE2ZjNjYmIzYzAxNmY0MGY1NjZjMTBlMjM%3D"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noreferrer">
                道路交通安全法实施条例
              </a>
            </Link>
            （自2004年5月1日起施行）
          </li>

          <li>
            <Link
              href="https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3OTZhNjM2YTAxNzk4MjJhMTk2NDBjOTI%3D"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noreferrer">
                刑法
              </a>
            </Link>
            （2020年12月26日通过修正案）
          </li>
        </ul>
      </section>
      <section>
        <h2 className={styles.h2}>扣分</h2>
        <h3 className={styles.h3}>12分</h3>
        <ol className={styles.list}>
          <li>饮酒后驾驶机动车的</li>
          <li>造成致人轻伤以上或者死亡的交通事故后逃逸，尚不构成犯罪的</li>
          <li>
            使用伪造、变造的机动车号牌、行驶证、驾驶证、校车标牌或者使用其他机动车号牌、行驶证的
          </li>
          <li>
            驾驶校车、公路客运汽车、旅游客运汽车载人超过核定人数百分之二十以上，或者驾驶其他载客汽车载人超过核定人数百分之百以上的
          </li>
          <li>
            驾驶校车、中型以上载客载货汽车、危险物品运输车辆在高速公路、城市快速路上行驶超过规定时速百分之二十以上，或者驾驶其他机动车在高速公路、城市快速路上行驶超过规定时速百分之五十以上的
          </li>
          <li>
            驾驶机动车在高速公路、城市快速路上倒车、逆行、穿越中央分隔带掉头的
          </li>
          <li>代替实际机动车驾驶人接受交通违法行为处罚和记分牟取经济利益的</li>
        </ol>
        <h3 className={styles.h3}>9分</h3>
        <ol className={styles.list}>
          <li>
            驾驶7座以上载客汽车载人超过核定人数百分之五十以上未达到百分之百的
          </li>
          <li>
            驾驶校车、中型以上载客载货汽车、危险物品运输车辆在高速公路、城市快速路以外的道路上行驶超过规定时速百分之五十以上的
          </li>
          <li>驾驶机动车在高速公路或者城市快速路上违法停车的</li>
          <li>
            驾驶未悬挂机动车号牌或者故意遮挡、污损机动车号牌的机动车上道路行驶的
          </li>
          <li>驾驶与准驾车型不符的机动车的</li>
          <li>未取得校车驾驶资格驾驶校车的</li>
          <li>
            连续驾驶中型以上载客汽车、危险物品运输车辆超过4小时未停车休息或者停车休息时间少于20分钟的
          </li>
        </ol>
        <h3 className={styles.h3}>6分</h3>
        <ol className={styles.list}>
          <li>
            驾驶校车、公路客运汽车、旅游客运汽车载人超过核定人数未达到百分之二十，或者驾驶7座以上载客汽车载人超过核定人数百分之二十以上未达到百分之五十，或者驾驶其他载客汽车载人超过核定人数百分之五十以上未达到百分之百的
          </li>
          <li>
            驾驶校车、中型以上载客载货汽车、危险物品运输车辆在高速公路、城市快速路上行驶超过规定时速未达到百分之二十，或者在高速公路、城市快速路以外的道路上行驶超过规定时速百分之二十以上未达到百分之五十的
          </li>
          <li>
            驾驶校车、中型以上载客载货汽车、危险物品运输车辆以外的机动车在高速公路、城市快速路上行驶超过规定时速百分之二十以上未达到百分之五十，或者在高速公路、城市快速路以外的道路上行驶超过规定时速百分之五十以上的
          </li>
          <li>驾驶载货汽车载物超过最大允许总质量百分之五十以上的</li>
          <li>
            驾驶机动车载运爆炸物品、易燃易爆化学物品以及剧毒、放射性等危险物品，未按指定的时间、路线、速度行驶或者未悬挂警示标志并采取必要的安全措施的
          </li>
          <li>
            驾驶机动车运载超限的不可解体的物品，未按指定的时间、路线、速度行驶或者未悬挂警示标志的
          </li>
          <li>
            驾驶机动车运输危险化学品，未经批准进入危险化学品运输车辆限制通行的区域的
          </li>
          <li>驾驶机动车不按交通信号灯指示通行的</li>
          <li>机动车驾驶证被暂扣或者扣留期间驾驶机动车的</li>
          <li>造成致人轻微伤或者财产损失的交通事故后逃逸，尚不构成犯罪的</li>
          <li>驾驶机动车在高速公路或者城市快速路上违法占用应急车道行驶的</li>
        </ol>
        <h3 className={styles.h3}>3分</h3>
        <ol className={styles.list}>
          <li>
            驾驶校车、公路客运汽车、旅游客运汽车、7座以上载客汽车以外的其他载客汽车载人超过核定人数百分之二十以上未达到百分之五十的
          </li>
          <li>
            驾驶校车、中型以上载客载货汽车、危险物品运输车辆以外的机动车在高速公路、城市快速路以外的道路上行驶超过规定时速百分之二十以上未达到百分之五十的
          </li>
          <li>驾驶机动车在高速公路或者城市快速路上不按规定车道行驶的</li>
          <li>
            驾驶机动车不按规定超车、让行，或者在高速公路、城市快速路以外的道路上逆行的
          </li>
          <li>
            驾驶机动车遇前方机动车停车排队或者缓慢行驶时，借道超车或者占用对面车道、穿插等候车辆的
          </li>
          <li>驾驶机动车有拨打、接听手持电话等妨碍安全驾驶的行为的</li>
          <li>驾驶机动车行经人行横道不按规定减速、停车、避让行人</li>
          <li>驾驶机动车不按规定避让校车的</li>
          <li>
            驾驶载货汽车载物超过最大允许总质量百分之三十以上未达到百分之五十的，或者违反规定载客的
          </li>
          <li>驾驶不按规定安装机动车号牌的机动车上道路行驶的</li>
          <li>
            在道路上车辆发生故障、事故停车后，不按规定使用灯光或者设置警告标志的
          </li>
          <li>
            驾驶未按规定定期进行安全技术检验的公路客运汽车、旅游客运汽车、危险物品运输车辆上道路行驶的
          </li>
          <li>
            驾驶校车上道路行驶前，未对校车车况是否符合安全技术要求进行检查，或者驾驶存在安全隐患的校车上道路行驶的
          </li>
          <li>
            连续驾驶载货汽车超过4小时未停车休息或者停车休息时间少于20分钟的
          </li>
          <li>驾驶机动车在高速公路上行驶低于规定最低时速的</li>
        </ol>
        <h3 className={styles.h3}>1分</h3>
        <ol className={styles.list}>
          <li>
            驾驶校车、中型以上载客载货汽车、危险物品运输车辆在高速公路、城市快速路以外的道路上行驶超过规定时速百分之十以上未达到百分之二十的
          </li>
          <li>
            驾驶机动车不按规定会车，或者在高速公路、城市快速路以外的道路上不按规定倒车、掉头的
          </li>
          <li>驾驶机动车不按规定使用灯光的</li>
          <li>驾驶机动车违反禁令标志、禁止标线提示的</li>
          <li>驾驶机动车载货长度、宽度、高度超过规定的</li>
          <li>驾驶载货汽车载物超过最大允许总质量未达到百分之三十的</li>
          <li>
            驾驶未按规定定期进行安全技术检验的公路客运汽车、旅游客运汽车、危险物品运输车辆以外的机动车上道路行驶的
          </li>
          <li>驾驶擅自改变已登记的结构、构造或者特征的载货汽车上道路行驶的</li>
          <li>驾驶机动车在道路上行驶时，机动车驾驶人未按规定系安全带的</li>
          <li>驾驶摩托车，不戴安全头盔的</li>
        </ol>
      </section>
      <section>
        <h2 className={styles.h2}>驾驶证种类（准驾车型）</h2>
        <h3 className={styles.h3}>C类</h3>
        <ul className={styles.list}>
          <li>C1 小型汽车(C2,C3,C4)</li>
          <li>C2 小型自动挡汽车</li>
          <li>C3 低速载货汽车</li>
          <li>C4 三轮汽车</li>
          <li>C5 残疾人专用小型自动挡载客汽车</li>
          <li>C6 轻型牵引挂车</li>
        </ul>
        <h3 className={styles.h3}>A类</h3>
        <ul className={styles.list}>
          <li>A1 大型客车，准驾大型载客汽车(A3,B1,B2,C1,C2,C3,C4,M)</li>
          <li>
            A2 重型牵引挂车，准驾总质量大于4500kg的汽车列车(B1,B2,C1-4,C6,M)
          </li>
        </ul>
        <h3 className={styles.h3}>B类</h3>
        <ul className={styles.list}>
          <li>
            B1
            中型客车，准驾中型载客汽车（含核载10人以上、19人以下的城市公共汽车）(C1-4,M)
          </li>
          <li>
            B2 大型货车，准驾重型、中型载货汽车，重型、中型专项作业车(C1-4,M)
          </li>
        </ul>
        <h3 className={styles.h3}>其他类</h3>
        <ul className={styles.list}>
          <li>D 发动机排量大于50ml的三轮摩托车</li>
          <li>E 发动机排量大于50ml的二轮摩托车</li>
          <li>F 发动机排量小于等于50ml的摩托车</li>
          <li>M 轮式自行机械车</li>
          <li>N 无轨电车</li>
          <li>P 有轨电车</li>
        </ul>
      </section>
      <section>
        <h2 className={styles.h2}>罚款</h2>
      </section>
    </main>
  );
}

import Link from 'next/link';
import data from './data.json';
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
      <section className={styles.section}>
        <h2 className={styles.h2}>扣分</h2>
        <h3 className={styles.h3}>12分</h3>
        <ol className={styles.list}>
          {data['扣分']['12'].map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ol>
        <h3 className={styles.h3}>9分</h3>
        <ol className={styles.list}>
          {data['扣分']['9'].map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ol>
        <h3 className={styles.h3}>6分</h3>
        <ol className={styles.list}>
          {data['扣分']['6'].map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ol>
        <h3 className={styles.h3}>3分</h3>
        <ol className={styles.list}>
          {data['扣分']['3'].map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ol>
        <h3 className={styles.h3}>1分</h3>
        <ol className={styles.list}>
          {data['扣分']['1'].map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ol>
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>驾驶证种类（准驾车型）</h2>
        <h3 className={styles.h3}>C类</h3>
        <ul className={styles.list}>
          {data['种类']['C'].map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
        <h3 className={styles.h3}>A类</h3>
        <ul className={styles.list}>
          {data['种类']['A'].map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
        <h3 className={styles.h3}>B类</h3>
        <ul className={styles.list}>
          {data['种类']['B'].map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
        <h3 className={styles.h3}>其他类</h3>
        <ul className={styles.list}>
          {data['种类']['其他'].map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>罚款</h2>
      </section>
    </main>
  );
}

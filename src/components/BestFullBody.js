import styles from '@/styles/BestFullBody.module.css';
function BestFullBody() {
  return (
    <div className={styles.bestFullBody}>
        <div className={styles.fullBodyBanar}>
            <img src='health.png' alt='fill body image' height='400' width='400'/>
        </div>
        <div className={styles.fillBodyContent}>
            <p className={styles.contentHeading}>Best full body workout to lose fat</p>
            <p className={styles.contentText}>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
            <button className={styles.contentButton}>Get started &#8594;</button>
        </div>
    </div>
  )
}

export default BestFullBody;
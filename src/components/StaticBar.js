import styles from '@/styles/StaticBar.module.css';
import Image from 'next/image'
function StaticBar() {
    const staticData =[
        {
            id:1,
            logo:'logo1.png',
            title:'Get that 11 line in 30 days',
        }
        ,{
            id:2,
            logo:'logo2.png',
            title:'14 Days sherd challenge',
        }
        ,{
            id:3,
            logo:'logo3.png',
            title:'Get flat belly in 30 days',
        }
    ]
  return (
    <section className={styles.StaticBar}>
    {
        staticData.map((data, i)=>{
            return(
                <div key={i} className={styles.barItem}>
                    <img className={styles.staticBarLogo} src={data.logo} width='100' height='100' alt='no image'/>
                    <div className={styles.barText}>
                        <p>{data.title}</p>
                        <p>Learn more &#8594;</p>
                    </div>
                </div>
            )
        } )
    }
    </section>
  )
}

export default StaticBar
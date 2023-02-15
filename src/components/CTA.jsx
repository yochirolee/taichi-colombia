import styles from "../style";
import Button from "./Button";
import CardDeal from "./CardDeal";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row  flex-col mx-6 bg-white rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} max-w-[470px] mt-5 text-gray-800`}>Nuestros Servicios</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-600`}>
        Contamos con un amplio catalogo de productos para medicina humana, veterinaria y gastables.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <div className="grid">
        <CardDeal/>
      </div>
    </div>
  </section>
);

export default CTA;

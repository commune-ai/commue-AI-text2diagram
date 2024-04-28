import Image from "next/image"
import { logo } from "@/public/assets"

import styles from "@/styles/style"

const Footer: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        {/* <Image
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        /> */}
        <h1 className="text-white text-3xl">TextGraph Pro</h1>
        <p className={`${styles.paragraph} mt-4 max-w-[410px]`}>
          Create AI Generated Knowledge Graph
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 text-white">
        Community
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2024 TextDiagram Pro. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6"></div>
    </div>
  </section>
)

export default Footer

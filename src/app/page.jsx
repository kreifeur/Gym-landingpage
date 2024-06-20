import Image from "next/image";
import image from "../../public/WebBanner3.jpg";
import image1 from "../../public/Homepage_2_Promo.jpg";
import image2 from "../../public/UFC_August2020_JBR-Businessbay_ralfhjigger-26.jpg";
import image3 from "../../public/pexels-leonardho-1552242.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import image4 from "../../public/band.jpg";

export default function Home() {
  return (
    <div>
      <div className="">
        <Image
          src={image.src}
          width={1000}
          height={1000}
          style={{ width: "100%", height: "auto" }}
        />
        {/* section 1 */}
        <div className="flex p-8 sm:h-[90vh] flex-col sm:flex-row gap-6">
          <div className="sm:w-[50%]  flex flex-col gap-4 items-center justify-center">
            <div className="sm:w-[70%] flex flex-col gap-4">
              <div className="font-bold text-2xl">WE ARE UFC GYM</div>
              <div className="text-xl">
                We are the original. The biggest, best and fastest growing. We
                are UFC GYM. Train Different in 150+ locations around the world
                — and counting! Find us in 40 countries by 2023.
              </div>
              <div className="font-bold flex gap-2 items-center">
                FIND OUT MORE{" "}
                <FaArrowRightLong className="text-[#d20a0a] text-md" />
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] h-full flex items-center sm:justify-center">
            <Image
              width={1000}
              height={1000}
              style={{ width: "100%", height: "auto" }}
              src={image1.src}
              alt=""
              srcset=""
            />
          </div>
        </div>

        {/* band image */}
        {/* <img className="w-full h-[50vh]" src={image3.src} alt="" srcset="" /> */}
        <div
          className="w-full h-[500px] bg-cover bg-center flex p-8 flex items-center"
          style={{ backgroundImage: `url(${image3.src})` }}
        >
          <div className="min-h-full sm:w-[50%] w-full bg-white sm:px-[20vh] p-4 flex flex-col justify-center gap-8 border-t border-t-[15px] border-t-[#d20a0a]">
            <div className="font-bold text-3xl">Unlock your potential!</div>
            <div className="text-xl">
              Start your journey with the world leader of MMA-inspired fitness
              gyms in Qatar. Discover customized membership tiers that fit your
              needs; from unlimited group fitness access to ultimate classes.
              Regardless of age or athletic ability, you belong here.
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex sm:flex-row-reverse p-8 sm:h-[90vh] flex-col sm:flex-row gap-6">
          <div className="sm:w-[50%]  flex flex-col gap-4 items-center justify-center">
            <div className="sm:w-[70%] flex flex-col gap-4">
              <div className="font-bold text-2xl">YOUTH PROGRAMS</div>
              <div className="text-xl">
                We've got something for everyone at UFC Gym Qatar, that includes
                the little ones! From introductory classes to skills
                development, our youth classes are designed to establish a
                healthy physical and mental foundation for youth.
              </div>
              <div className="font-bold flex gap-2 items-center">
                FIND OUT MORE{" "}
                <FaArrowRightLong className="text-[#d20a0a] text-md" />
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] h-full flex items-center sm:justify-center">
            <Image
              width={1000}
              height={1000}
              style={{ width: "100%", height: "auto" }}
              src={image2.src}
              alt=""
              srcset=""
            />
          </div>
        </div>
        {/* band */}
        <div
          className="w-full h-[200px] bg-cover bg-center flex p-8 flex items-center relative z-[1]"
          style={{ backgroundImage: `url(${image4.src})` }}
        >
          <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.7)] text-white flex flex-col items-center justify-center gap-4 z-[1]">
            <div className="font-bold text-3xl">TRAIN FOR FREE TODAY</div>
            <div className="px-6 py-3 bg-[#d20a0a] font-bold">FREE PASS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

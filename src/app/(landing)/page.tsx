import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { doctors, modules, penggunas, links } from "@/seeds/seed";

export default function LandingPage() {
  return (
    <>
      <div className="gradient-gray-lower-half relative flex flex-col w-full items-center pt-24 md:pt-16 pb-16 md:pb-24">
        <div className="w-full relative h-40">
          <Image
            src={"/illustrations/telinga-kecilku-logo.svg"}
            alt={"Logo Telinga Kecilku"}
            fill
            className="select-none"
          />
        </div>

        <h1 className="font-bold text-3xl text-white mt-6">Telinga Kecilku</h1>

        <div className="bg-[rgb(101,210,175)]/10 py-4 px-6 text-primary rounded-2xl flex items-center gap-4 mt-10">
          <div className="w-5 relative h-5">
            <Image
              src={"/illustrations/google-play.svg"}
              alt={"Google Play"}
              fill
              className="select-none"
            />
          </div>
          <p className="font-semibold">Unduh di Google Playstore</p>
        </div>

        <div className="flex gap-6 md:gap-12 justify-center items-center flex-wrap mt-10 md:mt-20 mx-8 md:mx-16">
          <Image
            src={"/logos/rscm.png"}
            alt={"RSCM"}
            width={200}
            height={100}
            className="object-contain w-[80px] h-[40px] md:w-[200px] md:h-[100px] select-none"
          />

          <Image
            src={"/logos/perhati.png"}
            alt={"Perhati"}
            width={100}
            height={100}
            className="object-contain w-[40px] h-[40px] md:w-[100px] md:h-[100px] select-none"
          />

          <Image
            src={"/logos/medel.png"}
            alt={"MEDEL"}
            width={200}
            height={100}
            className="object-contain w-[80px] h-[40px] md:w-[200px] md:h-[100px] select-none"
          />

          <Image
            src={"/logos/rsui.png"}
            alt={"RSUI"}
            width={100}
            height={100}
            className="object-contain w-[40px] h-[40px] md:w-[100px] md:h-[100px] select-none"
          />

          <Image
            src={"/logos/medtech.png"}
            alt={"MEDTECH"}
            width={200}
            height={100}
            className="object-contain w-[80px] h-[40px] md:w-[200px] md:h-[100px] select-none"
          />
        </div>
      </div>

      <div
        className="py-10 md:py-20 flex flex-col gap-6 justify-center items-center max-w-7xl mx-8 md:mx-16"
        id="tentang"
      >
        <h2 className="text-primary text-2xl font-bold">Tentang Kami</h2>
        <p className="text-slate-500 text-sm md:text-base text-center">
          TelingaKecilku merupakan aplikasi untuk mendeteksi dini adanya
          suspeksi gangguan pendengaran menggunakan 3 module:
        </p>

        <div className="grid grid-cols-3 md:grid-cols-9 lg:grid-cols-12 justify-center items-center gap-8 mt-10 md:mt-20">
          {modules.map((module, index) => (
            <div
              key={index}
              className="col-span-3 h-full lg:col-span-4 flex flex-col items-center gap-5"
            >
              <div className="w-full relative h-36">
                <Image
                  src={module.src}
                  alt={"Module Image"}
                  fill
                  className="select-none"
                />
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="rounded-xl border-2 px-3 border-primary font-bold">
                  {index + 1}
                </div>
                <div className="text-[#4FCCA4]">|</div>
                <h3 className="text-xl font-bold text-slate-700 text-center">
                  {module.name}
                </h3>
              </div>

              <div className="bg-[rgb(180,251,228)]/10 grow flex items-center justify-center rounded-xl text-center text-slate-400 py-6 px-3 text-sm md:text-base">
                {module.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="gradient-green-bg px-8 md:px-16 w-full py-10 md:py-20"
        id="pengguna"
      >
        <div className="max-w-7xl flex flex-col gap-6 justify-center items-center mx-auto">
          <h2 className="text-primary text-2xl font-bold">Pengguna</h2>
          <p className="text-slate-500 text-sm md:text-base text-center">
            Aplikasi Telinga Kecilku sudah digunakan oleh
          </p>

          <div className="grid grid-cols-3 md:grid-cols-9 lg:grid-cols-12 gap-8 mt-10 w-full">
            {penggunas.map((pengguna, index) => (
              <div
                key={index}
                className="relative w-36 h-36 bg-white rounded-3xl p-6 pr-12 flex flex-col gap-2 col-span-3 lg:col-span-4 mx-auto"
              >
                <h3 className="text-2xl font-bold">{pengguna.total}</h3>
                <div className="bg-primary border-0 rounded-3xl p-0.5"></div>
                <p className="text-slate-400 font-bold">{pengguna.name}</p>
                <Image
                  src={pengguna.src}
                  alt={"Illustration"}
                  width={112}
                  height={112}
                  className="absolute -bottom-4 -right-16 select-none h-28 w-28"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="gradient-gray-ellipse w-full relative flex flex-col gap-4 items-center justify-center py-10 md:py-20 px-8 md:px-16"
        id="video-penggunaan"
      >
        <h2 className="text-primary text-2xl font-bold">Video Penggunaan</h2>
        <p className="text-slate-400 text-sm md:text-base text-center">
          Berikut video penjelasan cara penggunaan module yang ada di
          TelingaKecilku:
        </p>
        <iframe
          src="https://www.youtube.com/embed/hxM78KwlGgo?si=Hm5Eidux_f3rNNR_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-3xl mt-4 shadow-2xl shadow-white/20 aspect-video w-72 md:w-[512px]"
        ></iframe>
      </div>

      <div
        className="gradient-green-bg px-8 md:px-16 w-full py-10 md:py-20 "
        id="tim-peneliti"
      >
        <div className="max-w-7xl flex flex-col gap-6 justify-center items-center mx-auto">
          <h2 className="text-primary text-2xl font-bold">Tim Peneliti</h2>
          <p className="text-slate-500 text-sm md:text-base text-center">
            Tim kami terdiri dari peneliti dan praktisi lintas bidang keilmuan.
          </p>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-3/4 mt-8"
          >
            <CarouselContent>
              {doctors.map((doctor, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 flex flex-col items-center gap-5"
                >
                  <div className="w-36 relative h-36 ">
                    <Image
                      loading="lazy"
                      src={doctor.src}
                      alt={`Photo of ${doctor.name}`}
                      fill
                      sizes="100vw, 100vh"
                      className={"object-contain rounded-full select-none"}
                    />
                    <Image
                      loading="lazy"
                      src={"/components/profile-ellipse-half-left.svg"}
                      alt={"half-circle"}
                      fill
                      className={"-translate-x-1 translate-y-1 select-none"}
                    />
                    <Image
                      loading="lazy"
                      src={"/components/profile-rod.svg"}
                      alt={"rod"}
                      width={28}
                      height={28}
                      className={"absolute bottom-0 right-0 -z-10 select-none"}
                    />
                  </div>

                  <h3 className="font-bold text-slate-700 text-center max-w-xs">
                    {doctor.name}
                  </h3>

                  <div>
                    <p className="text-sm text-slate-400 text-center">
                      {doctor.institution}
                    </p>
                    <p className="text-sm text-slate-400 text-center">
                      {doctor.company}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="w-full relative flex flex-col gap-4 justify-center items-center py-10 md:py-20 px-8 md:px-16 gradient-gray-footer">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-20 justify-between">
          <address className="flex flex-col gap-4 not-italic">
            <h2 className="text-secondary font-bold text-sm">
              Mempunyai seputar pertanyaan?
            </h2>
            <p className="text-gray-400 text-sm">
              Email kami di{" "}
              <a
                href="mailto:medtech.imeri@ui.ac.id"
                className="text-secondary"
              >
                medtech.imeri@ui.ac.id
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              Whatsapp di{" "}
              <a href="tel:087878490849" className="text-secondary">
                087878490849
              </a>
            </p>
          </address>

          <div className="flex flex-col gap-4">
            <h2 className="text-secondary font-bold text-sm">Tautan terkait</h2>

            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={"text-gray-400 text-sm hover:underline"}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

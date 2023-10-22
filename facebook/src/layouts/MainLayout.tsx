import { ReactNode, useState } from "react"
import Header from "../components/layout/Header"
import Avatar from "../assets/perfil.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

interface Props {
  children: ReactNode
}
const MainLayout = ({ children }: Props) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <>
      {/* Header */}
      <Header />
      <div className="grid grid-cols-9">
        <div className="h-[calc(100vh-56px)] text-white bg-[#18191A] col-span-2 overflow-y-hidden hover:overflow-y-scroll sticky top-14 pt-4 pl-2">
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={Avatar} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Leandro Caballero</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={Avatar} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Amigos</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={Avatar} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Recuerdos</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={Avatar} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Guardado</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={Avatar} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Grupos</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={Avatar} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Video</p>
          </button>
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out"
          >
            <Icon
              icon={`${
                showMore ? "iconamoon:arrow-up-2" : "iconamoon:arrow-down-2"
              }`}
              className="w-7 h-7 bg-[#303031] rounded-full p-1"
            />
            <p className="font-[500]">Ver más</p>
          </button>
        </div>
        <div className="col-span-5">{children}</div>
        <div className="h-[calc(100vh-56px)] border col-span-2 overflow-y-hidden hover:overflow-y-scroll sticky top-14">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
          reiciendis sint debitis ducimus dolorem repellat quod nihil eius
          assumenda doloribus ex, labore laborum possimus explicabo commodi
          optio dolore cum. Doloribus maiores nostrum hic unde natus, nam nisi
          similique et vel quibusdam ratione fuga, dignissimos aspernatur eum
          itaque earum maxime sed eveniet ea modi saepe expedita quas
          reiciendis. Iure porro at vel numquam exercitationem culpa, mollitia
          hic nisi id temporibus repellat? Voluptatum molestiae, esse harum
          debitis, magnam quo architecto error nesciunt rerum labore tempora
          cum. Quidem cupiditate soluta labore dolore sunt fuga doloribus nisi
          laboriosam neque. Ipsa, assumenda totam non incidunt reprehenderit
          asperiores? Necessitatibus quisquam nihil sed dolorem sapiente quia
          magni id ratione officiis quaerat omnis dicta quos nobis, voluptates
          dolores itaque doloremque distinctio repellat reprehenderit, suscipit
          unde est laborum minima qui? Odit, quisquam reprehenderit? Modi,
          obcaecati. Eum qui eius sint at ipsa atque assumenda eos, ut adipisci
          tempora, quo dolorem accusamus perferendis autem iste maiores non
          provident nihil repellendus magni amet soluta in aliquam officia!
          Molestiae sunt officiis velit enim architecto sapiente corporis ipsum,
          minus corrupti porro quo vero magni alias ad excepturi. Tempore
          accusantium expedita id eligendi delectus voluptates aliquam mollitia
          provident, repellendus ab minus, impedit eos cum tempora! Ab, fugit?
          Fugiat, qui! Adipisci impedit perferendis modi labore! Hic veniam ea
          corporis repellat exercitationem non nostrum alias, minima aperiam
          natus illum architecto quam ex aliquam, inventore pariatur. Ad alias
          aliquid quo sunt obcaecati ipsa vitae quasi quae necessitatibus,
          fugiat rem fuga odit in mollitia perferendis molestias? Officiis
          molestiae optio sequi tempora expedita repellat adipisci harum rem
          deserunt in minima, nobis obcaecati dolorem! Adipisci assumenda autem
          animi, porro culpa aliquam corrupti molestias exercitationem ad qui
          earum blanditiis quo nobis, rem aut ullam esse sunt, eveniet labore
          mollitia deserunt? Voluptatem sed perspiciatis sit illo nostrum saepe
          praesentium, quas est aliquam, ex consequuntur inventore voluptatum
          deserunt laudantium voluptatibus numquam possimus tempore natus. Eius
          quo quas est aliquam ad neque omnis perspiciatis. Aperiam officiis ex
          voluptas reprehenderit exercitationem eaque? Cupiditate deleniti
          error, harum omnis nesciunt itaque quos animi debitis laudantium
          placeat! Harum nemo sit dolorum sapiente voluptatum blanditiis,
          corporis doloremque ducimus fugiat culpa quam corrupti distinctio
          laudantium similique itaque, amet at voluptatem dolores atque tenetur
          facere saepe?
        </div>
      </div>
    </>
  )
}

export default MainLayout

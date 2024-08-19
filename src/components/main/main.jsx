import "./Main.scss";
import About from "../../assets/images/ME.jpg";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { ImGithub } from "react-icons/im";
import Project7 from "../../assets/images/phone.jpg";
import Project2 from "../../assets/images/crypto.jpg";
import Project4 from "../../assets/images/shop.jpg";
import Project5 from "../../assets/images/todo-reacrRedux.jpg";
import { PiStudentBold } from "react-icons/pi";
import Project1 from "../../assets/images/vanillaJs-country.jpg";
import Project8 from "../../assets/images/html-sass.jpg";
import Project11 from "../../assets/images/Ts-antd.jpg";
import Project0 from "../../assets/images/crud-reactapp.jpg";
import Spotify from "../../assets/images/spotfiy.png";
import { SiNetlify } from "react-icons/si";
import { IoIosArrowDropup } from "react-icons/io";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaVolleyballBall } from "react-icons/fa";
import { VscFoldDown } from "react-icons/vsc";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import HeroBg from "../../assets/videos/video.mp4";

function Main() {
  const [backToTopButton, setBackTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setBackTopButton(true);
      } else {
        setBackTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [typeEffect] = useTypewriter({
    words: ["FrontEnd Developer", "Coder", "Hard Worker"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <main className="main">
      {backToTopButton && (
        <button className="backtop" onClick={scrollUp}>
          <IoIosArrowDropup />
        </button>
      )}

      {/* hero section */}
      <section id="heroSec" className="hero">
        <video className="video-bg" autoPlay muted loop>
          <source src={HeroBg} type="video/mp4" />
        </video>
        <div className="container">
          <div className="hero-left">
            <h1>
              Hi I am Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Minima alias vero quos quae cum fuga perspiciatis corrupti
              consequuntur dolores laboriosam excepturi ad similique quod est,
              numquam, sint animi nobis! Quam numquam adipisci quisquam
              laboriosam alias consectetur perspiciatis sit vero consequatur,
              accusamus eligendi itaque officiis voluptates officia, dolorum
              nobis eius, aspernatur veritatis totam sed consequuntur! Ullam
              totam quisquam accusantium corrupti ex optio voluptates unde
              rerum, dolorum itaque dignissimos aperiam nesciunt incidunt quas
              ipsa provident numquam animi a consequatur, vero eum tempora hic
              autem? Tenetur porro fugiat hic ducimus voluptate voluptatem rem
              quos molestiae, ratione dolorum corrupti ad repellat sapiente
              alias voluptatum recusandae, qui non obcaecati! Reprehenderit
              aspernatur rerum enim, fuga, culpa sint molestias explicabo
              perspiciatis ab voluptates suscipit vero repudiandae minima
              laudantium. Impedit, dignissimos dicta totam quo voluptates
              quibusdam praesentium culpa aliquid aspernatur, eligendi dolor
              enim deserunt corrupti a maiores ipsum magni cumque cum tempore
              molestiae asperiores veniam odio. Optio doloremque, suscipit atque
              ipsam similique ullam, libero porro perspiciatis voluptatum
              tempora neque rerum quasi eligendi id inventore totam debitis
              magni? Accusantium quaerat dolor adipisci aut doloribus! Eos, in
              repudiandae exercitationem, ea consectetur facere, error deleniti
              recusandae modi expedita nobis quasi voluptate at voluptatum culpa
              dolore cumque impedit mollitia perspiciatis optio perferendis
              aspernatur necessitatibus eum vero. Possimus quae a repudiandae
              quibusdam iste nisi distinctio fuga quas ratione, eaque molestias.
              Sit repellat molestiae maxime, neque modi itaque quidem voluptatem
              eum, vel aut incidunt ullam perferendis quis quasi repellendus
              sint officia rem tenetur culpa eius repudiandae! Quibusdam
              accusamus dignissimos similique hic error sunt tempore pariatur
              quod quisquam enim nihil illum cumque corrupti dolor,
              perspiciatis, ut a? Libero fuga animi deserunt officiis tenetur
              nihil voluptate est sapiente amet, eaque eligendi quae totam
              suscipit alias. Esse sed maxime asperiores tenetur, quis officiis
              quia et explicabo iste beatae corrupti dicta voluptatum ullam
              autem facilis! Voluptates repudiandae molestias nam ratione ipsum
              nemo aspernatur, velit quibusdam totam explicabo earum officia
              dolore obcaecati ad expedita, excepturi est nulla incidunt quia
              accusantium minus iste aperiam reiciendis tempora! Expedita
              aperiam id, doloribus voluptatibus ex aliquid quasi quod quas qui
              dolor blanditiis! Modi eveniet quam vitae nemo ea iusto voluptate
              fugit debitis tenetur quis odit distinctio laborum et voluptatibus
              accusantium, numquam dolore asperiores, impedit autem itaque
              dolores! Nihil sed esse, error dolorum repudiandae dicta quidem in
              facilis magni? Cupiditate aliquam saepe veritatis, quisquam
              possimus ut accusantium dolorem esse tenetur a deserunt
              voluptatibus rem ea assumenda odio neque aliquid, adipisci
              provident eaque sed. Dignissimos id recusandae soluta. Ipsam
              repellendus, suscipit alias illo repellat aperiam voluptas dolores
              dolor dolorem nulla id praesentium soluta expedita minima
              laudantium numquam, vel temporibus neque delectus deleniti
              repudiandae. A architecto explicabo recusandae quo natus qui rerum
              alias saepe, odit quasi cumque provident maxime quibusdam
              voluptate illum est, quas ad iusto suscipit labore ut, culpa
              commodi corporis? Tempora ullam consequatur eveniet molestias
              officia est reiciendis distinctio, mollitia debitis aliquam maxime
              iste eaque, quisquam veniam. Repellendus, quia vitae hic aliquid
              culpa delectus odit necessitatibus facere quas quidem excepturi
              ipsa facilis repellat sint quisquam placeat, illum possimus.
              Suscipit error ea dolorum in consequuntur quod molestias
              recusandae eum, libero odit corporis. Commodi aliquam dolores
              corporis nihil quo pariatur natus! Ut similique, facilis cumque,
              ullam accusantium mollitia asperiores maiores corporis provident
              nisi quos itaque inventore sunt rem ipsam hic sapiente. Laudantium
              eum qui rerum impedit vero, et id nobis quia odit magnam culpa
              asperiores minus maxime, fugit ab pariatur alias cupiditate nihil
              corporis neque iste. Voluptate voluptatem error vero, dicta
              assumenda id totam, a fuga facilis rerum perferendis iusto officia
              minus harum. Ea omnis atque deleniti reprehenderit illo culpa
              quis. Possimus obcaecati modi doloribus maxime amet voluptatibus,
              molestiae enim, aliquid veniam debitis deserunt consectetur,
              provident rerum explicabo. Reprehenderit assumenda fugiat cumque
              maxime ad doloremque placeat adipisci. Molestias tempora eligendi
              sed, officiis voluptate tenetur fugit voluptatem veniam
              consectetur aspernatur rerum maxime, officia ipsam modi velit,
              repellendus ut unde mollitia laborum numquam ea? Aperiam
              praesentium aspernatur rem ea sint obcaecati odit distinctio.
              Voluptas blanditiis deserunt dignissimos commodi similique,
              consectetur, cupiditate temporibus ipsa reprehenderit ex provident
              a fugit est animi nisi asperiores unde, vero iste. Blanditiis
              dignissimos dicta labore! Repellendus non commodi illo eos iure
              obcaecati quos ducimus magnam nisi, veritatis eius quasi voluptate
              deserunt magni minima. Cum dolor tenetur pariatur ut modi magni
              explicabo nostrum quisquam sit porro et odit provident ducimus
              illum libero quam ullam fugiat, dicta ipsum ratione! Repellat
              incidunt sed, corrupti impedit adipisci exercitationem, porro qui
              a dicta, rerum temporibus quisquam! Perspiciatis excepturi
              pariatur quam dolorum suscipit numquam delectus iure dolores eos
              dignissimos nisi repellat expedita beatae minima vero a
              temporibus, saepe aut laborum maiores odit eligendi commodi
              assumenda? Deserunt, error? Nihil illo iusto obcaecati tenetur
              quos, laborum temporibus provident, sit debitis veritatis ad
              dolor, enim inventore facere? Dicta rerum, fuga distinctio
              consequatur earum eius, quaerat nam sequi illo exercitationem sed
              praesentium corporis vero facilis voluptate aspernatur illum.
              Dolorem culpa provident odit minus rem reiciendis, praesentium
              neque modi in libero obcaecati necessitatibus, deserunt omnis
              adipisci! Natus, pariatur praesentium. Quasi quo consequuntur
              error ratione, quaerat distinctio porro enim, accusamus soluta
              culpa, alias libero ab asperiores quia molestiae nihil ipsa
              officia? Ratione assumenda adipisci in officia eligendi nisi
              architecto laboriosam velit impedit iure nostrum rerum, beatae,
              delectus hic blanditiis! Alias sed numquam iure. Suscipit unde,
              molestias ex facilis nam, magni repellat dolorum harum modi
              veritatis ea culpa eaque dolor temporibus cum fuga rerum quo.
              Suscipit sint incidunt, vel mollitia voluptatem debitis
              necessitatibus ipsa, dolorem doloremque possimus sequi error harum
              ex temporibus accusantium aspernatur aperiam minima aliquid.
              Nesciunt reiciendis unde totam quia sequi, beatae repellendus
              perspiciatis eligendi nihil repellat ipsa consequuntur amet
              excepturi dolorem. Incidunt quasi tenetur rem reiciendis sed
              dolore! Sit ipsam dolores autem repellendus accusantium facilis
              sequi assumenda veniam dolorum, explicabo nesciunt, animi corrupti
              nihil fugit ex nostrum atque officiis consectetur commodi! Velit
              obcaecati laudantium tempora, temporibus nisi doloremque facilis!
              Vitae, necessitatibus eveniet cum voluptatum repellendus ullam
              consequuntur quidem autem, nihil dolore dignissimos. Soluta
              incidunt inventore, quo accusamus nulla sint, unde, saepe et
              facere natus vel omnis eius odio! Cum, ex error. Ea, sed similique
              facere voluptates reprehenderit perspiciatis sapiente blanditiis
              unde quaerat dolorum. Placeat adipisci nostrum reiciendis hic!
              Dolorem nesciunt, mollitia quia repellendus quae molestiae ea
              numquam architecto sed tenetur. Adipisci, corrupti. Possimus
              tempore a consequuntur voluptatem, sunt eveniet laborum facere
              modi in doloremque deserunt. Deleniti et quibusdam, maiores minima
              quam nesciunt similique quisquam, velit doloremque veritatis
              impedit, animi at. Sunt explicabo expedita dolorum nulla sed
              dicta, eos eligendi ullam quas deleniti. Necessitatibus quas
              laborum quis rerum dolorem eum dolore natus, reiciendis at alias
              consequuntur in explicabo sed ratione dolor esse mollitia
              laboriosam ipsam id, vero praesentium, aliquam harum? Nam quisquam
              molestiae iure. Tenetur reiciendis eaque, est labore cum quibusdam
              veritatis quisquam explicabo numquam dignissimos in atque
              accusantium minus ipsa! Molestias illum, necessitatibus nihil
              autem totam consectetur quisquam dolorum, rem omnis aliquam
              asperiores aperiam vel cumque. Atque veritatis, perspiciatis, et,
              eligendi officia laudantium nesciunt cumque asperiores laboriosam
              dolore deserunt! Est ullam, ut facere incidunt corporis ea esse,
              excepturi rerum reiciendis fuga voluptatibus expedita. Laborum
              natus dolor dicta? Cum, quas. Nobis, consequatur. Ex eius
              blanditiis ad, nemo veniam, saepe atque neque sequi minus rem
              tempora, similique quod ducimus suscipit incidunt ipsam impedit
              obcaecati cupiditate omnis vel minima? Odio voluptatibus
              blanditiis ab tempore amet officiis in, magni, omnis enim
              reiciendis voluptatum, necessitatibus aperiam corporis culpa modi
              temporibus obcaecati quod veritatis ex eaque. Minus nulla error
              fugit laborum minima sunt dolore ex labore! Doloremque, veritatis
              hic ad tempore temporibus necessitatibus illum modi atque quos
              architecto optio, consequuntur deserunt sunt et, ea aliquid
              inventore autem molestias quisquam veniam. Perferendis ut maiores
              dolorum nulla quibusdam placeat qui, excepturi voluptas repellat
              nobis optio blanditiis dolores, nemo cupiditate vel quo sequi,
              natus odit illo labore. Natus accusamus fugiat eveniet officiis
              quidem a officia nobis similique mollitia. Laboriosam voluptatum
              minima ipsum tempora quibusdam commodi esse animi porro officia
              molestiae! Reiciendis nobis commodi incidunt repellendus quaerat
              aliquam labore? Quia itaque minus dicta similique quibusdam quae,
              tempora porro accusantium amet dolores, animi architecto ipsam
              iure ad magni consequuntur qui! Est placeat unde eaque modi enim
              harum neque maxime quos reiciendis culpa ipsum eos magnam dolor at
              asperiores cum natus id, dicta rerum. Fugit eaque in voluptatum
              non quibusdam ullam architecto officia, placeat assumenda
              consequuntur quos. Doloribus ipsum, totam, rem cum ratione sint
              consequatur eum possimus facere eaque vero esse eius
              exercitationem recusandae, neque aut qui minus eos explicabo ullam
              incidunt. Delectus eius officia quasi? At nostrum error ab quas
              dignissimos quaerat repudiandae necessitatibus, quasi totam cum?
              Laudantium porro magnam quasi corporis minus voluptatum eos neque
              fugit, delectus est obcaecati laborum vitae dicta fuga ipsum.
              Voluptatibus non eum eos omnis, inventore harum dignissimos
              dolores aperiam illo dolore quia facilis sequi culpa neque natus
              eveniet. Laudantium libero architecto iusto, officia modi
              voluptates suscipit corporis placeat vero aliquam sequi sint quas
              porro tempore quod asperiores consectetur temporibus itaque
              doloribus quasi aliquid qui beatae deserunt? Quaerat at,
              necessitatibus, ipsum fugit corporis officia perspiciatis amet
              temporibus voluptate nulla quis reiciendis quia maxime cum.
              Accusamus earum pariatur eius quis dolore ab odio ea
              necessitatibus ducimus, nobis neque, amet quia? Cumque ex
              voluptates dolorem quaerat repudiandae sint adipisci. Adipisci
              maxime similique doloribus corrupti animi sunt dignissimos, odio
              sequi? Aliquid sit in minus enim? Voluptas totam veniam, et rerum
              ullam pariatur saepe alias placeat maiores exercitationem sed
              cumque molestias dolore porro, fugit vero commodi reiciendis
              magni? Maxime saepe cum alias provident repellendus quos ipsa eos,
              optio dolorum commodi molestias. Eum modi vero porro illum
              possimus. Sapiente ab praesentium minima, tempora ullam quos cum
              quo, impedit, architecto corrupti quidem. Quibusdam saepe iusto
              assumenda nesciunt, iste exercitationem tempora cumque molestias?
              Eaque quisquam officiis inventore, deleniti architecto quas
              repudiandae debitis neque dolor corrupti adipisci! Cupiditate
              aperiam veniam perspiciatis tempore soluta at voluptas dolorum,
              possimus fugit, sequi incidunt ratione culpa cumque aspernatur
              minus quae repellendus minima officiis qui illo, accusantium in
              aut. Molestias cum, praesentium quas dolores natus corporis,
              repellat magni reiciendis consectetur, earum consequatur excepturi
              itaque incidunt accusantium doloribus nobis provident culpa omnis?
              Enim aperiam eaque repudiandae ipsa nostrum magnam doloremque
              perferendis atque a. Non, architecto nulla. Sunt perferendis eos
              ducimus non ex et esse placeat obcaecati quos odit, qui reiciendis
              optio sit itaque error ipsam dolores temporibus labore dignissimos
              molestias ut minus amet. Voluptas voluptates illo ipsam assumenda
              atque quis expedita nam laudantium cumque excepturi voluptate,
              placeat optio incidunt vitae! Iure eaque illum ipsam molestiae
              consequuntur nostrum dolorum facere dolore repellat, dolor ullam.
              Debitis, corrupti laudantium. Odit aliquid mollitia impedit nihil
              incidunt iure reiciendis doloremque iste. Aliquam fugiat a nemo
              deserunt et explicabo quod laborum eum ipsam! Temporibus
              praesentium exercitationem laudantium velit expedita! Maxime, quas
              dignissimos eos culpa iusto praesentium. Libero odit dolorem error
              ducimus neque optio pariatur quas natus laborum eligendi corporis
              facilis voluptatem vero, tempora necessitatibus eveniet quidem
              magnam? Perferendis quibusdam beatae cupiditate tempora ea quae,
              incidunt, aperiam commodi, voluptas voluptatibus hic quidem
              impedit corporis similique rerum facere laboriosam neque accusamus
              veritatis asperiores sunt distinctio tempore cumque qui? Vel, quod
              voluptatibus enim fuga veniam itaque excepturi odit voluptates.
              Rerum aliquam impedit voluptas, corporis eveniet fuga, eaque
              numquam provident sed voluptate, blanditiis adipisci corrupti.
              Laudantium, quas obcaecati. Dolorum fuga facilis dicta consectetur
              odit sint maiores excepturi repellat eaque, cum veniam, rem
              veritatis reiciendis perspiciatis neque amet magnam, quaerat
              aspernatur. Sequi magni modi cum dolorem eaque. Recusandae saepe
              maxime culpa molestiae facere dicta quibusdam. Reiciendis
              repudiandae labore ipsum minus corrupti, dolorum voluptas
              quibusdam voluptate, saepe quod nihil tempore ratione ut! Rerum
              quaerat in ullam ad nostrum modi quibusdam maiores nesciunt odio,
              laborum ipsum tempora debitis a facere illum nobis eum corrupti
              qui inventore, eos, veritatis placeat. Esse reprehenderit officiis
              beatae odio aliquid accusantium ea unde obcaecati sequi suscipit
              vitae exercitationem nihil nobis nisi, quasi soluta est ad
              aspernatur quos, nostrum alias! Neque esse, facere, ex cum
              repellat dolores quia soluta fugit dignissimos placeat vero, quae
              ipsum earum fugiat voluptas sequi molestias quo deserunt aperiam
              perferendis! Pariatur rerum sunt culpa debitis doloribus saepe
              officiis explicabo cumque necessitatibus voluptatem facilis optio
              asperiores, voluptates repellat ipsum exercitationem vitae odit
              tenetur eius nemo veniam at dicta! Excepturi accusamus iste,
              dolore in odio minus tempora fuga nobis doloremque eligendi
              aliquam error aperiam magnam. Veritatis fuga amet sit iure,
              voluptates sint qui, officiis ipsam at provident voluptatum
              voluptatem mollitia consequuntur non doloremque laborum vitae
              labore nihil iste laudantium doloribus recusandae rerum? Dolorem
              labore neque sunt assumenda pariatur harum atque? Ullam nostrum
              quos officia obcaecati corrupti hic repellendus. Quos, odit qui.
              Iure, facere! Sed veritatis, dolorem ducimus porro quae rerum
              reprehenderit, totam blanditiis mollitia sequi consequatur
              possimus unde. Asperiores quisquam fugiat corrupti aliquid, ullam
              eos aliquam id earum commodi illo nam tempore odio consectetur
              quasi natus repellendus esse possimus labore repudiandae sequi
              sint magni sit nulla. Vero eius a numquam, aspernatur nemo hic
              soluta? Voluptatibus soluta corrupti maiores magnam deserunt,
              ratione aut non reprehenderit, veniam minima ut dolore distinctio
              qui cumque vero quis? Totam ut adipisci assumenda sapiente fugiat
              maiores dolorum aperiam quisquam itaque harum minima excepturi
              nemo exercitationem ratione perferendis quos deserunt, dolores
              corporis aliquam. Magni vero minus inventore eius at ipsam a
              repellat explicabo ex beatae natus itaque, ullam nam cupiditate,
              odio suscipit, omnis ut accusamus rem voluptatibus sunt atque.
              Consequuntur perspiciatis eum sapiente debitis quasi corrupti
              natus eveniet numquam iure laboriosam ad suscipit, ab neque
              voluptas at nam! Cum laborum, totam neque at eum placeat rem
              debitis perspiciatis ipsa esse nisi autem odio. Nihil voluptatibus
              dolorum quaerat voluptatem eligendi a aperiam natus. Qui
              temporibus quisquam debitis, quae neque optio exercitationem
              repellat, non explicabo eos ullam earum placeat obcaecati
              reprehenderit sequi dicta architecto similique illo quis eveniet
              officia harum voluptatem? Repudiandae placeat distinctio
              laboriosam reprehenderit in quas illum, nisi impedit odio ipsam
              facere explicabo libero rerum alias veniam modi reiciendis
              consectetur consequatur temporibus nam architecto similique! Earum
              porro animi ea ad, accusamus adipisci repudiandae culpa nostrum
              ab? Reiciendis, distinctio recusandae est ducimus officia ratione
              non animi eius cumque deserunt adipisci porro tenetur obcaecati at
              facere deleniti amet praesentium illo autem. Delectus dolorum
              maxime porro nostrum quos, ducimus eos inventore repellendus
              consequatur ratione placeat fugiat, debitis omnis aut! Voluptatem
              laudantium numquam totam earum repellendus vitae, pariatur
              reiciendis sed explicabo, quae temporibus, ducimus modi doloribus
              corporis enim consequuntur ad culpa voluptatum dolore? Ipsam est
              omnis illum, nulla aliquam rerum, reiciendis autem veritatis quae
              magni accusantium qui eum porro at? Consectetur velit error
              veritatis, in deleniti repellendus repellat voluptatem placeat
              neque quisquam ab tempora id inventore, perferendis tenetur,
              nesciunt odit? Praesentium odit nisi dolore a, alias nihil
              similique exercitationem dicta doloremque. Eum esse voluptate
              minus optio ullam adipisci perspiciatis et consequuntur iste
              doloremque rerum laborum, delectus non earum assumenda dicta
              necessitatibus! Veniam quod mollitia minus dolor, quaerat incidunt
              distinctio ab dolorem voluptas quasi omnis. Sit eligendi ducimus
              quod nam nisi eum officia cumque dolore iure sapiente tenetur
              numquam veniam sequi libero saepe, nihil fugit deserunt velit ut
              nulla accusantium optio veritatis! Veritatis tempore in omnis,
              laudantium quidem assumenda, voluptatum fugit dolorum quod, quas
              veniam repellat alias cumque facilis porro atque? Rerum unde,
              nostrum cum cupiditate ut quam maxime similique a doloribus,
              aspernatur rem. Reprehenderit eligendi repudiandae ipsum
              voluptatum id hic totam, ex temporibus libero quia adipisci,
              necessitatibus debitis atque consectetur quisquam eos laboriosam
              quo consequuntur fugiat dolore! Dolor suscipit earum sequi
              necessitatibus ipsum voluptas quis quidem sapiente autem. Ipsum
              facilis tempore, expedita iusto provident accusamus quae placeat
              veniam suscipit minus dolore ex aperiam, voluptatibus animi modi
              accusantium natus excepturi, consequuntur tempora ad voluptates.
              Impedit eos at error vitae blanditiis soluta architecto veniam
              doloribus veritatis dolorum laborum, deserunt placeat sunt eum
              inventore magnam quam. Numquam repellendus molestiae beatae harum
              labore ea recusandae voluptatibus hic aut? Repellat, non nihil et
              error, voluptatum quod harum facilis iste debitis assumenda
              obcaecati tenetur molestiae laboriosam reiciendis modi autem
              blanditiis sit veritatis impedit hic magni quis. Dolorum quas
              velit hic dignissimos placeat delectus eius voluptatem assumenda
              praesentium accusantium voluptatibus quis laboriosam laudantium
              ad, dolor vitae totam, corporis, iste sit optio minima ex
              voluptatum autem qui? Enim doloribus recusandae animi error
              tempora exercitationem, alias corporis quidem, qui debitis a iste
              nesciunt eligendi! Dicta vitae illo quibusdam consequatur
              obcaecati, optio quasi quas distinctio dolor totam. Aperiam quam
              nostrum maxime. Modi tempore est, mollitia incidunt unde ex
              nostrum laboriosam. Vel distinctio, eaque accusamus repellendus at
              porro obcaecati recusandae optio quae commodi sunt eos tenetur
              iste corporis odio quaerat debitis sapiente? Dolorum qui atque
              ullam consequuntur voluptatum saepe error sequi nobis? Dicta
              minima praesentium iure iusto quam corrupti quos architecto neque
              velit odit atque quibusdam, perspiciatis ea consectetur, veritatis
              est labore cum. Recusandae iusto doloribus numquam quibusdam totam
              suscipit aliquid perspiciatis magni laudantium dicta, voluptatum
              eum eaque. Corporis vero ut perferendis expedita pariatur,
              quisquam consequuntur ducimus quia, voluptatem saepe voluptates
              nulla eveniet ipsa qui? Illum, iusto fugit minima doloremque
              laudantium atque! Debitis repudiandae in reiciendis delectus quae,
              soluta, eius hic quo modi dolore ipsum beatae recusandae officiis,
              voluptatibus at suscipit vero. Commodi voluptatem qui, ad delectus
              quas quibusdam, mollitia debitis asperiores eaque veritatis enim.
              Dolore, placeat hic? Quis beatae, architecto nihil facere officiis
              perferendis incidunt velit veritatis animi maxime, ipsa
              dignissimos, ratione quisquam? Placeat similique voluptatum
              praesentium, aut, adipisci eaque dolorum nisi, libero eligendi
              suscipit magni quia quae? Officia vitae doloremque voluptate
              dolore eligendi sunt. Fugit velit possimus explicabo quisquam
              laudantium sequi alias sint numquam aut aperiam hic asperiores
              blanditiis rerum assumenda architecto similique molestias incidunt
              iste, minus eius adipisci sapiente, quaerat optio! Temporibus
              earum doloremque omnis debitis error consequatur natus inventore
              nisi ad vel vitae illo veritatis sunt, nulla mollitia officiis
              quas doloribus voluptate alias tempora. Ipsum soluta laboriosam
              dolor beatae deleniti, ipsam voluptas praesentium voluptatem
              distinctio rem? Ut soluta non possimus deserunt voluptas animi
              quam necessitatibus. Odio doloribus iure quisquam suscipit
              perspiciatis! Quaerat, saepe? Sed commodi modi eaque facere sunt?
              Ipsa est tempora ratione architecto. Non vitae dolorum, voluptatum
              quibusdam dolor ex provident illum officia eum ipsum repellat
              cupiditate omnis veniam itaque totam eligendi qui nam inventore a.
              Nobis deserunt harum, sed, nesciunt earum ea maxime itaque beatae
              laboriosam suscipit veniam provident consequatur pariatur dolores
              excepturi! Eos placeat perspiciatis eum debitis aspernatur rem
              amet ab eius vel ipsam enim, voluptatum tempora quod alias autem
              itaque excepturi soluta praesentium molestiae, maiores quas,
              libero quasi sequi! Dolor velit assumenda culpa rerum cum deserunt
              aliquid provident adipisci, expedita ipsum. Quis laborum, id
              tempore consequuntur fugit asperiores sapiente tempora quos
              deserunt quas temporibus labore saepe ratione? Et consequatur
              numquam voluptas vitae alias ad ipsa voluptatibus, veritatis,
              maxime harum suscipit consectetur voluptatum corrupti eum fugit ex
              sed sunt, deserunt aut perferendis debitis! Cum error vel
              doloremque saepe eaque odit quidem et repellendus officiis
              voluptas vitae, itaque expedita dolore laboriosam facere suscipit
              voluptatum nesciunt earum deleniti autem libero animi laborum!
              Facilis ad minima ipsa distinctio nostrum eveniet, tempora
              sapiente perferendis consectetur recusandae exercitationem
              expedita laudantium totam, quaerat obcaecati dignissimos molestiae
              itaque laboriosam ducimus eos dolorum error modi pariatur. Aliquam
              obcaecati saepe, deserunt asperiores culpa eaque recusandae
              consequatur cumque velit est similique quidem doloremque quos
              dolores laborum, sapiente nulla rerum enim aliquid quam tempora
              magni commodi omnis debitis! Explicabo tenetur fuga eligendi
              delectus. Ex corrupti consectetur dolores amet sed reiciendis,
              saepe recusandae vel unde facilis placeat dolore voluptas
              laboriosam! Deserunt dolore placeat illum numquam id explicabo
              possimus cupiditate ipsum ducimus corporis commodi ab ut, mollitia
              accusamus molestias quibusdam dicta eius dignissimos vel quo
              fugiat aliquam dolorum velit. Minus sapiente nihil aut,
              praesentium totam necessitatibus officiis cum porro fuga tempora
              beatae? Ab ipsa quibusdam maxime eos fugit, illum sequi ad
              molestias. Ea officiis quas iure repellendus ipsum tempore est
              debitis quisquam in aperiam eos eligendi veniam molestiae et,
              nihil libero repudiandae beatae necessitatibus. Suscipit veniam
              magni possimus optio ab ducimus, perferendis corrupti delectus
              consectetur laudantium adipisci, perspiciatis laboriosam! Amet
              dolor culpa cupiditate ex sequi vero et quaerat quam sapiente
              tempore voluptate, commodi dolores cum aliquam quas eaque unde
              nisi blanditiis saepe veritatis autem cumque eveniet! Eius,
              labore, eaque laudantium, nihil aliquid voluptates obcaecati
              repellat possimus ab non voluptate. Iusto quo necessitatibus amet
              illo nihil obcaecati, neque atque, at recusandae quidem earum
              molestiae praesentium. Ut iste repellat cumque ab, accusantium
              nesciunt velit at cupiditate id distinctio libero veniam maiores
              quos blanditiis deserunt praesentium a fuga. Ad velit eligendi
              suscipit aliquam nam neque natus. Recusandae sapiente blanditiis,
              provident animi, praesentium suscipit quaerat natus neque aliquid
              voluptas odio corporis eum repudiandae quisquam amet dolores
              tempore deserunt, sint iure alias cumque placeat. Autem porro
              quibusdam quas architecto ullam, voluptatibus adipisci aspernatur
              esse voluptatum ad ducimus expedita numquam enim mollitia veniam
              maxime. Ipsum soluta fugit rerum, repudiandae nisi nobis quam
              commodi assumenda natus deserunt vitae aliquam ex voluptate
              excepturi dolores saepe rem similique ea. Mollitia tenetur ipsa,
              placeat perferendis quam sunt! Rem aperiam exercitationem et magni
              doloremque dolorum sequi! Doloremque, nesciunt? Quibusdam iste,
              porro necessitatibus tempore, minus quae dolor, aut harum beatae
              saepe minima veritatis libero facere animi exercitationem
              architecto quam magnam quasi aliquam fuga? Ex consectetur iste
              nihil saepe nostrum ab quae, laboriosam enim sit totam dolor,
              quaerat accusantium. Laborum repellendus at quasi, vel officiis
              alias ducimus, cumque dignissimos ipsum tempore laboriosam
              excepturi similique unde sint doloribus culpa iste necessitatibus
              error beatae distinctio fuga tenetur. Ipsa, doloribus perspiciatis
              nisi fugit quam quos voluptas tenetur totam dolor veritatis, sed
              laudantium. Incidunt sint pariatur voluptatibus aspernatur eos
              eaque distinctio suscipit doloribus temporibus error, aperiam
              libero harum, reprehenderit dicta, ut quia! Ullam molestias optio
              recusandae asperiores doloremque blanditiis reiciendis
              necessitatibus delectus voluptatum pariatur impedit exercitationem
              repellat illo et, magnam accusamus expedita consequatur facere
              laboriosam. Pariatur, officiis. Atque dignissimos assumenda iusto
              nostrum ullam incidunt dolorem maxime vero quibusdam dicta? Nulla,
              culpa, voluptatibus inventore laudantium est beatae vitae minus
              nostrum amet sint excepturi reiciendis eos minima quidem
              architecto at dignissimos cupiditate eaque repudiandae sed
              repellendus. Facilis eos enim doloremque aperiam explicabo
              adipisci nemo perspiciatis tempore pariatur accusamus ratione,
              tenetur blanditiis voluptate quos aspernatur cum! Suscipit
              architecto ab est molestias eum, dolorum necessitatibus quod
              maxime mollitia a, at molestiae cum distinctio provident sapiente,
              aliquid reiciendis. Molestiae molestias sit pariatur incidunt
              quidem doloribus ut aut reiciendis nam quisquam reprehenderit,
              debitis ad magnam provident voluptatibus laudantium deserunt
              tenetur qui. Assumenda eveniet at ullam minus animi suscipit iure?
              Sint labore ipsam minus, excepturi ullam quam quibusdam, incidunt
              repellendus nostrum nihil vitae et quis sed rerum cum assumenda
              fugit consequuntur a nulla nemo quo deleniti at id odio?
              Perferendis beatae corrupti quidem similique officia enim veniam
              consequatur facilis eaque fuga illo maiores at, recusandae
              voluptas ipsam necessitatibus odit tempore, dicta, animi tenetur
              atque. Quas harum delectus earum! Unde, veniam. Laudantium
              accusamus similique facilis provident? Eveniet rerum enim
              laboriosam perferendis laborum soluta unde voluptate distinctio
              amet ut, similique neque. Dolore nesciunt impedit eius nostrum
              laborum dignissimos, ad ab tenetur ea officiis quisquam ullam
              veritatis officia ex, accusamus nulla nemo corrupti aut reiciendis
              deserunt vitae natus! Accusamus perspiciatis ut sequi voluptas
              fuga quidem doloribus, inventore minima voluptatum quos
              temporibus, beatae illo dolor laboriosam nihil deserunt ipsa enim
              ad? Perspiciatis nulla, enim non velit deserunt quidem quaerat
              temporibus ex culpa quasi accusamus sint officiis excepturi
              veritatis saepe ipsam dicta sed assumenda voluptatum odit laborum
              tenetur. Quos aliquid quam possimus obcaecati. Doloremque, itaque.
              In eum voluptates enim nobis eaque suscipit voluptatem ex dicta
              adipisci a delectus impedit repellat maxime odio ducimus atque
              aliquid nulla nemo cum unde, reprehenderit asperiores? Itaque cum
              illo suscipit esse, vitae possimus et minima enim. Quibusdam, quo
              nihil quia cumque dicta magni! Eveniet fuga commodi cum suscipit!
              Pariatur nemo ab, quia illo culpa necessitatibus enim libero
              eligendi, explicabo tempora impedit. Enim, totam. Velit repellat,
              dignissimos itaque nostrum similique quaerat enim animi, maiores
              magni nihil optio vel praesentium iure aliquam eius amet
              voluptatum iste non perspiciatis rem ipsa ea exercitationem. Nobis
              veniam accusamus nam ipsum quae quaerat, impedit enim doloribus
              quibusdam repellat itaque quod sunt dignissimos, ad beatae illum
              amet at! Aliquam porro temporibus ipsum dolores minima id voluptas
              obcaecati laboriosam! Voluptatum, neque debitis molestiae
              molestias consequuntur laboriosam asperiores libero, eveniet
              accusamus fugiat dolor similique. Ipsam commodi, eos iusto quo
              repellendus eum eaque praesentium molestiae voluptas dicta! Ipsam,
              dolores? Suscipit enim fuga, eum dolorem excepturi rem! Esse,
              assumenda. Totam exercitationem ipsa est voluptates ipsam fuga in
              assumenda? Iusto exercitationem, dicta fugit harum laboriosam modi
              temporibus molestiae eum vero laborum quia minima doloribus? Enim
              reprehenderit vitae ipsa eaque quae minus laudantium quam officia
              eveniet nihil nobis maiores accusamus assumenda ipsum, ratione
              placeat alias iure? Numquam aliquid accusamus voluptatibus
              corporis assumenda perferendis incidunt ratione rem quod
              reprehenderit qui id, temporibus veniam sit aspernatur nulla eius
              soluta quam at animi aperiam in. Exercitationem rem minima quos
              unde. Laborum voluptatibus veritatis debitis minus dolor
              molestias, eos, dolorem impedit nostrum minima repudiandae quaerat
              accusantium veniam labore, quia quasi sit laudantium nobis ex? Rem
              alias beatae tempora quaerat aliquid dignissimos expedita incidunt
              iste neque officiis placeat, hic ex, delectus minima deleniti
              tempore pariatur nihil reiciendis quae reprehenderit numquam iusto
              illo corrupti doloribus. Eius, natus hic cupiditate provident qui
              in doloremque odio, itaque magnam ea iste! Optio consequuntur
              veniam libero tempore itaque non, explicabo a quibusdam
              praesentium repellat quia obcaecati delectus. Fugit ducimus
              maiores sit ad voluptatem doloremque officiis quidem illo
              explicabo itaque excepturi quisquam, dicta blanditiis possimus
              enim. Ea perferendis aperiam sunt quaerat necessitatibus accusamus
              laudantium, aliquid ab quam autem voluptatum deserunt at,
              recusandae odio veniam! Qui cumque neque minus alias esse, dolor
              repudiandae deserunt dolore quia, veniam quisquam a natus.
              Expedita blanditiis quam molestiae voluptatem, sit ipsam, ipsum
              natus dolore tempore numquam itaque commodi perspiciatis ad
              dolores aliquid sapiente quasi reiciendis aliquam veritatis!
              Tempore, eum! Pariatur dolorem explicabo repellat quam deleniti
              est vel minus recusandae asperiores. Voluptatem distinctio enim
              voluptates quia temporibus placeat error quas perspiciatis soluta
              sit culpa consectetur animi, dolores vero laudantium nam tempora
              at illum quasi provident. Eveniet eum ducimus quos voluptate quae
              totam quas sapiente, animi et omnis iste sint nesciunt
              consectetur. Nobis enim odit tenetur distinctio omnis alias dolor
              quo incidunt iure eligendi ipsum atque nostrum vitae nulla
              voluptatibus, dolorum necessitatibus. Similique fugit, consequatur
              totam id, iusto quaerat corporis dolorem impedit at voluptatum
              sunt numquam beatae minus velit nulla iste doloribus ab explicabo
              natus tenetur. Incidunt provident, delectus omnis vitae ab
              explicabo earum autem sint culpa dolore minima. Nulla ea beatae
              nemo. Voluptates laudantium eaque quam molestias ullam assumenda
              dolorum vitae deleniti consequatur ab excepturi at asperiores,
              suscipit cumque labore dolore. Laudantium vero assumenda dolore,
              accusamus ipsa tempore, voluptatum architecto nulla quasi placeat,
              itaque alias aliquam! Amet odit iste, minima quo libero
              reprehenderit nemo facere esse perferendis accusantium eveniet
              repellendus, numquam placeat vero sunt ratione alias laudantium
              sapiente exercitationem. Alias cum dolor quo ratione commodi
              veritatis fugiat perferendis maiores, ab nobis officiis, earum
              nesciunt porro nam distinctio dolorum vero placeat possimus
              quisquam veniam deserunt consequuntur sed facilis molestiae. Cum,
              ipsam. Assumenda suscipit porro rerum magnam fugiat possimus
              veritatis sunt consequuntur, sequi nemo doloribus provident quo.
              Deserunt fuga dolorem hic omnis veritatis iure assumenda
              voluptatum illo aspernatur sapiente, inventore quod dolorum
              delectus magni. Fuga vel, dolorem necessitatibus quisquam facere
              voluptate hic suscipit. Laboriosam doloremque recusandae ea
              aspernatur, atque tempora rerum beatae iusto ipsum officiis ex
              totam ratione alias, obcaecati id aut accusamus numquam voluptatum
              dolorum nihil? Illum placeat culpa nulla non quia quibusdam, sit
              at beatae soluta magni recusandae. Officiis quasi debitis eum
              voluptatem totam iure a ratione veniam non fugiat qui doloremque
              unde, quod esse aspernatur animi ab. Nemo optio totam id nesciunt
              architecto perspiciatis sequi mollitia laudantium repellat
              tenetur, commodi vel. Natus quas voluptates quae asperiores modi
              sint minima labore commodi, voluptatum adipisci reiciendis. Nisi
              cum minima perspiciatis pariatur cumque illo obcaecati animi,
              deleniti quis qui aspernatur dolores expedita quas in eos, quae
              eum modi dolorem assumenda sunt ab dolore nostrum quia ipsum.
              Numquam tempora nihil nobis ratione quibusdam molestiae quidem
              harum quam, cumque doloremque totam, asperiores quasi, in
              doloribus repellat necessitatibus consequatur sint cupiditate
              illum sapiente deserunt. Dolores dolor, repudiandae veritatis
              alias est neque assumenda odit voluptates cum pariatur facilis
              iste porro, qui cumque doloribus? Tenetur natus totam voluptatem
              ipsa labore atque, nulla quidem modi deserunt eaque eius harum
              iure. Sunt possimus cumque deleniti neque recusandae. Ex eveniet
              possimus nostrum quod facere at perferendis culpa laudantium
              laborum ad velit cum veritatis nulla nihil molestias nemo fuga
              quasi ullam voluptatibus nobis, in illo. Vero error ea quaerat
              commodi eius in, asperiores odio reprehenderit molestias et
              ratione laudantium cupiditate, sed doloremque nostrum assumenda
              perspiciatis dolor culpa voluptate sint. Vitae reiciendis eum modi
              laudantium expedita, quibusdam at quaerat, quisquam inventore
              porro eveniet ad perferendis veniam ut temporibus aperiam quo
              culpa et suscipit maxime quae. Facilis illum reprehenderit enim
              nihil, sequi accusantium rem quo reiciendis eius delectus iusto
              sunt unde iure suscipit, nam impedit ipsa exercitationem sint
              dignissimos inventore doloremque, ab aperiam! Saepe amet similique
              sit deserunt sint porro atque aut nostrum neque repellat
              aspernatur, tempora nesciunt ad, molestiae assumenda molestias
              temporibus accusamus ullam autem! Delectus dolorem nemo autem
              nesciunt doloribus! Debitis quas mollitia, ipsam exercitationem
              officiis optio natus ab velit sapiente officia sequi at libero. Ea
              qui fugiat nam delectus. Delectus harum repellat nobis velit?
              Illum ab harum dolore cumque est, libero temporibus adipisci
              voluptate! Reiciendis tempora illo voluptate voluptatem dolorum?
              Veniam, necessitatibus. Natus atque quis veritatis minima, libero
              possimus laborum dolore delectus provident sequi, architecto
              facilis amet porro sit aspernatur, voluptate hic nisi officiis
              vero quaerat explicabo non corrupti recusandae quasi. Laboriosam
              praesentium facere cumque dolorem fuga, culpa placeat sed
              adipisci, nemo temporibus dicta consequatur obcaecati. Natus
              provident hic dolore sequi, eveniet nam quidem quod distinctio
              quibusdam nihil praesentium. Veniam corrupti suscipit mollitia
              laborum labore nemo consequuntur eaque, quos nam quibusdam, saepe
              ratione numquam officia aut magnam quas itaque eius recusandae
              atque consequatur harum perspiciatis! Pariatur dolor delectus est
              repellat ipsum officiis deserunt suscipit beatae harum veniam
              cupiditate enim dicta quasi in quis, veritatis voluptate nostrum
              rerum, ut laborum ipsam. Rem iure aut beatae totam saepe sed eos
              ullam quia culpa voluptatibus voluptatem tempore suscipit quam, et
              accusantium. Dolorum nulla assumenda iure beatae possimus eum
              fugiat perspiciatis veritatis, sit corporis magnam distinctio
              molestias nostrum voluptatum. Quisquam vitae officia nihil
              assumenda veritatis minus doloremque quasi, voluptatibus placeat
              nulla est quo explicabo in, delectus sapiente asperiores ad animi
              blanditiis molestias id saepe dolor eum? Aperiam mollitia odit ut
              culpa, unde autem nesciunt doloribus voluptates ea magnam alias
              recusandae et modi quam at odio fuga obcaecati magni, quaerat
              commodi. Aperiam exercitationem dolorem iusto unde, ipsa
              voluptate, molestiae delectus obcaecati esse rem possimus eum enim
              saepe excepturi dolore soluta vel maiores, dolores expedita
              consectetur natus earum quod nostrum quam! Sapiente reprehenderit,
              porro eius quisquam quidem aliquid deleniti fugiat atque earum
              repellendus voluptatum rerum harum nulla quas similique voluptate
              debitis fuga officiis odit placeat ea sunt, consectetur inventore?
              Excepturi, maiores est iure dolore dolorem praesentium maxime
              aperiam. Ratione sint temporibus laborum nam corporis cupiditate
              recusandae voluptates sit. Aliquam minima temporibus ut, est eos
              eligendi cumque vero totam deserunt ab voluptas, veritatis ad
              mollitia unde animi et necessitatibus at. Praesentium tempore
              dolor quos explicabo, corporis excepturi ullam, distinctio dolorem
              odit, doloribus ratione voluptatibus. Autem facilis ratione
              nesciunt nemo pariatur tenetur voluptate veniam placeat, esse
              impedit dolores voluptates culpa earum mollitia doloribus rem
              soluta, natus distinctio aperiam hic! Quisquam obcaecati facilis
              error modi voluptatum reprehenderit vel laudantium repellendus
              magnam soluta delectus, ipsa, odio atque quaerat omnis laboriosam
              reiciendis distinctio animi. Dolor, maxime aperiam veniam sint
              ratione a, modi dolorem possimus officiis quidem dignissimos
              provident doloremque distinctio labore ipsum. Iure totam ipsam
              fugit voluptatum repellendus sapiente, in quo cumque nihil nobis
              ex neque aut ea at reprehenderit deserunt vero perspiciatis
              necessitatibus assumenda eius nulla quas natus? Eveniet id
              consequatur corporis nulla, praesentium porro saepe facilis nam.
              Quaerat sint culpa ex id esse facere ipsam iste iusto accusamus
              aliquid consequuntur odio quasi amet vel corporis suscipit rerum
              qui saepe consectetur, nam tenetur, aliquam totam? Ullam sunt
              aspernatur nisi in, numquam enim optio a expedita dignissimos
              modi! Magni suscipit unde adipisci totam aspernatur dolorum.
              Cupiditate autem harum reprehenderit assumenda deserunt voluptatum
              illum, voluptatibus et, quas, quis velit quos? Illo nesciunt
              ipsum, repellendus porro accusantium fugiat in dolores ipsam earum
              sed quo officia deserunt atque obcaecati a aspernatur doloribus
              quis voluptates dignissimos corrupti cumque, voluptatibus et. Sunt
              tempora accusamus animi exercitationem beatae id quae voluptatem
              doloribus inventore, molestias provident labore ipsam cum, amet a
              magnam! Commodi, sint doloremque totam nemo illum rem a rerum?
              Inventore doloribus tempore distinctio mollitia itaque. Itaque
              pariatur reiciendis rem libero commodi laborum odio possimus, qui
              laboriosam minima quis ducimus. Ipsum laborum, porro nostrum
              magnam, delectus, consectetur odit alias amet iure excepturi vel
              est. Aperiam dolorem maiores nihil. Totam libero dolorum fugit,
              optio non iusto pariatur ea consectetur explicabo necessitatibus
              ut, dolore eum possimus tempore ipsam similique laboriosam unde
              cumque veritatis iste inventore! Aut distinctio, cumque pariatur
              nobis quis ratione magnam odio impedit possimus dolor nesciunt
              rerum quibusdam blanditiis. Minus, cumque ut expedita laudantium
              dolorem accusamus, tenetur, blanditiis minima impedit itaque at
              neque reiciendis ipsam placeat nisi molestias incidunt numquam
              reprehenderit! Aut placeat perspiciatis iure nulla eum laborum, id
              repellendus incidunt reprehenderit illum dolore et facere.
              Inventore sed impedit nemo unde ullam iusto consectetur natus
              necessitatibus, provident accusantium eum itaque numquam
              consequatur distinctio, nihil perferendis rerum odio animi?
              Distinctio, sapiente. Quidem, distinctio? Harum non earum corrupti
              cumque architecto, quibusdam id mollitia ea perferendis
              repellendus esse beatae commodi libero totam natus nostrum?
              Voluptatibus enim rerum repellat iste natus, laboriosam quia atque
              consequatur, a, tempora quisquam. Maxime incidunt mollitia
              doloremque officia aliquid voluptatum nesciunt voluptas esse
              minus? Sed, corrupti atque incidunt cum maxime cupiditate ab
              deserunt totam placeat distinctio! Consequuntur, quod. Optio
              labore culpa ad quos ipsum sequi cum eveniet nemo nostrum quidem
              enim officia magnam, nobis laborum distinctio esse consectetur
              reprehenderit aspernatur. Qui eum quae soluta impedit dignissimos
              odio voluptatibus, minima voluptatum, in atque praesentium
              aliquid, ipsum error corporis similique! Vero nam culpa est
              laudantium. Cum earum accusamus necessitatibus, pariatur autem
              cupiditate eligendi tempore perspiciatis exercitationem temporibus
              laboriosam soluta recusandae aspernatur consequuntur libero eum
              expedita officiis? Reprehenderit sint consectetur ex atque
              perspiciatis quae, quis, tempora repellat reiciendis dignissimos
              voluptatem corporis maxime tenetur numquam? Quasi officia
              necessitatibus, earum deleniti odio atque dicta ab quo! Iste
              reprehenderit ducimus fugiat! Commodi recusandae laboriosam,
              architecto iure tempora aliquam enim. Libero, amet accusamus iure
              enim dolorum assumenda alias voluptatum. Necessitatibus magnam
              architecto omnis alias obcaecati unde pariatur dolor, nihil libero
              doloribus voluptas amet consequuntur dolore repellat nemo quo quia
              ut rem dolores ducimus minima deserunt? Dolorem officia quos illo
              eligendi! Saepe dolorem non a sit perspiciatis, officia est ipsa
              quibusdam earum odit pariatur minus, dolorum quae dicta, sunt
              delectus. Commodi consequatur minus tenetur accusantium alias,
              dolorum id quasi sed deserunt laborum exercitationem magnam culpa
              reprehenderit eligendi fuga nemo ad eos perferendis autem tempora
              aliquid. Excepturi quasi laboriosam, perspiciatis minus sunt
              repellat placeat et amet exercitationem eius provident. Quae culpa
              saepe ex corporis. Nam et, porro nihil dolorem sequi, incidunt
              pariatur natus id eveniet corporis dolorum nemo, veritatis
              obcaecati magnam tempore rerum nulla necessitatibus non possimus
              adipisci sed praesentium voluptatem vero? Sint ipsa provident
              cumque asperiores! Suscipit officia non animi corporis dicta iure
              ex saepe? Quasi alias aspernatur ipsam, culpa laudantium, pariatur
              doloremque labore modi distinctio neque veritatis perferendis
              facilis dolores possimus. Molestiae suscipit explicabo labore
              possimus voluptates quo voluptatem placeat, harum aut, modi
              reiciendis incidunt magni quam commodi fuga. Ipsa, totam magnam
              sed delectus assumenda atque cupiditate illo distinctio aliquid
              exercitationem voluptatum repellendus dolore sit dignissimos ipsum
              maiores officiis laborum cum. Animi dolore voluptatibus ab aliquam
              autem commodi adipisci doloremque necessitatibus, eaque dicta
              tenetur perspiciatis recusandae cupiditate, provident fugiat sunt.
              Excepturi cumque labore possimus iusto fuga molestiae minus autem
              explicabo aut ducimus a, eveniet saepe et sint quas sequi
              incidunt. Accusamus fugiat minus rerum voluptates maiores iste ad,
              consequatur distinctio! A hic veritatis numquam autem nemo quod
              veniam magnam iusto excepturi neque suscipit fuga voluptate rem
              tempore, quibusdam repudiandae quam accusantium laborum in
              consequatur corporis atque? Aliquam molestiae modi ipsam ea,
              reiciendis nam praesentium dolore labore nostrum distinctio ut non
              amet libero similique explicabo odit dignissimos provident
              expedita minus deleniti dolores, necessitatibus, perferendis iste.
              Neque veritatis accusantium exercitationem dolorum placeat, quos
              voluptatum quibusdam iure minima nobis nesciunt? In eligendi,
              vitae accusantium laboriosam tenetur alias nostrum, totam
              accusamus saepe autem sequi dolorem nihil pariatur itaque, neque
              voluptates esse distinctio suscipit cumque. Aut aperiam doloribus
              impedit eius officiis blanditiis, amet autem ea vitae laborum
              accusantium maxime neque obcaecati quaerat beatae minus, omnis,
              voluptatibus molestiae culpa a. Accusamus eligendi ullam quae
              officiis possimus sint corporis nostrum atque, iure similique
              omnis aspernatur porro incidunt earum. Consequuntur ducimus natus
              voluptatem fuga, at laudantium veritatis quos esse? Illo
              laboriosam sequi ipsa quidem quis harum ducimus aut qui commodi!
              Ipsa, itaque magnam id odio, cumque molestias soluta pariatur
              optio modi tempore quo sapiente voluptatem dignissimos voluptas
              numquam hic dolor delectus necessitatibus non illum mollitia
              iusto? Aliquam praesentium, cum veniam facilis quis quibusdam
              cupiditate earum asperiores, laboriosam eaque hic, sit quidem
              ratione soluta nostrum provident! Libero, quia laboriosam earum ad
              ea quaerat illo voluptatibus itaque ab quisquam hic iure vel. Ea
              porro quos enim obcaecati labore perspiciatis doloremque minima
              unde quae deserunt, facere, iste animi soluta nisi repellendus
              dicta distinctio. Eaque doloribus fugit earum dignissimos totam
              assumenda at commodi illo possimus eius, odit, quas aspernatur
              non? Laudantium, praesentium alias? Corrupti excepturi repellat
              voluptatem. Quisquam esse iure vel. Aliquam distinctio quae
              molestias excepturi libero. Nostrum tenetur dolores ut doloremque
              laborum dolor iure sed dignissimos optio, ipsam nulla error
              nesciunt tempore amet itaque rem fuga perferendis assumenda!
              Dolore quis sint dolor magni veritatis rem, quia neque provident
              blanditiis aut tempora totam hic et saepe cum dignissimos
              voluptatibus perferendis cupiditate quae ad, quisquam non enim! A
              maxime doloremque rem, aspernatur exercitationem quos neque illo
              ullam, inventore tempora quod voluptatum dolorem assumenda sint
              autem ducimus, minus corrupti omnis eius impedit laboriosam illum!
              Repellat earum atque temporibus iure labore voluptatem ea eligendi
              ducimus. Voluptate nobis obcaecati, voluptatem sunt unde beatae
              aperiam consectetur illo ea recusandae molestias neque minus,
              omnis voluptatum officia perspiciatis quisquam, labore praesentium
              maxime dolorum iste nesciunt exercitationem eaque. Quod, quasi
              neque ratione consequatur, quidem magni assumenda perspiciatis,
              mollitia doloribus recusandae expedita molestiae delectus. Quasi
              fuga nulla, distinctio tempore explicabo ipsam exercitationem
              porro, dolorum officiis eos impedit sed possimus aliquam in facere
              expedita laudantium cum ratione. Perferendis, consequuntur. Id
              tempore, expedita deleniti accusamus sint, perspiciatis eligendi
              voluptate atque, recusandae eveniet laborum! Esse vel minus,
              maiores sed, et iusto consequatur laboriosam rerum incidunt
              temporibus aperiam possimus. Dignissimos recusandae pariatur
              quibusdam animi nihil rerum fuga debitis rem deserunt. Earum atque
              quia at dolores illo, unde velit ex alias optio eaque eligendi
              laborum aliquam officia, maiores nisi cupiditate nesciunt facere
              reiciendis. A velit laudantium natus corporis consectetur eius,
              odit temporibus error non, numquam iure voluptatibus enim dolores
              quod aut nisi dignissimos libero ullam explicabo! Recusandae
              laudantium corrupti dolorem minima ipsa aut eligendi ratione
              veniam iste cum. Molestias asperiores animi quia corporis dicta
              aliquid laboriosam fugiat rerum molestiae, architecto error. Eaque
              iusto ratione corporis distinctio veniam facere ullam repellat
              autem iure. Quae, aspernatur temporibus. Molestias error nam fuga
              iste harum ea iusto laboriosam recusandae at excepturi id optio
              veniam, perferendis aut nulla? Dolor maiores culpa laboriosam
              molestias. Rerum, dolor autem ab quos laudantium totam suscipit
              repellat? Mollitia, delectus quidem tenetur consectetur, amet
              distinctio vitae laborum nam veniam tempora sint eius, pariatur
              deserunt incidunt dicta in quibusdam labore tempore atque
              exercitationem unde rerum aut! Autem minus quas beatae quis atque
              ipsa labore accusantium qui nesciunt impedit maxime odit expedita
              dolore eaque commodi dolor earum et fuga minima, possimus
              necessitatibus doloremque ratione! Fugit ratione assumenda ipsa
              dolor? Earum natus aut eaque, quia maiores nulla consequatur eos!
              Sequi quas nobis obcaecati fugiat voluptas tenetur dolor? Corrupti
              praesentium doloremque asperiores accusamus necessitatibus vero
              ullam reiciendis, et incidunt earum assumenda. Dolor eaque
              veritatis laboriosam dicta voluptatem est iusto molestias, fugiat
              ipsum! Fugiat reiciendis quam ratione itaque rerum adipisci
              nesciunt corrupti quasi qui, unde iusto libero mollitia
              necessitatibus facere quibusdam atque hic eligendi, expedita
              provident odit neque et saepe nihil eius? Odio beatae iure eius!
              Earum laborum nam voluptatibus, praesentium perspiciatis unde
              consequuntur adipisci odio ut animi quam nisi iure veritatis
              aperiam fugit. Quos ad ex voluptatibus vero animi placeat
              repellendus? Perferendis nulla non sunt, vitae iste repudiandae
              quis molestiae ea harum iure dicta, libero vel, architecto illo
              qui iusto. Earum, asperiores inventore? Asperiores tempore eum
              quam sed inventore nulla expedita explicabo. Expedita eaque
              similique quisquam odit vero rem optio rerum commodi provident,
              illo excepturi aspernatur fugit quos totam libero consequuntur ea
              saepe, recusandae, officiis autem inventore sint sequi et! Impedit
              veniam libero beatae reprehenderit quae non pariatur voluptatem!
              Impedit minima ducimus omnis at delectus ipsam veniam nihil
              consectetur, mollitia unde aspernatur cum expedita aliquam
              accusantium odio eligendi soluta labore, nemo vero atque
              voluptatibus eveniet. Beatae eos sed tempora, ipsam veritatis
              ducimus perferendis veniam doloribus ex perspiciatis, qui et
              laborum. Aperiam, fugit. Culpa placeat magnam, illo libero,
              impedit odit distinctio, vel recusandae quos ex voluptatibus
              fugit? Fuga, rem doloribus veritatis debitis optio delectus
              dolorem nobis explicabo soluta distinctio provident quam omnis,
              reprehenderit eius ipsum dolorum ipsam? Eligendi voluptate velit
              rerum nihil quidem, eos aspernatur obcaecati magni. Repellat
              beatae debitis asperiores officia nisi repudiandae dolore dolores
              provident. Iusto, est impedit fugit ipsum asperiores mollitia
              fuga, culpa nostrum provident cumque, explicabo nulla aperiam
              dolores sit voluptatem repellendus omnis ut quae alias? Facilis
              omnis repellendus repellat suscipit maxime sit delectus quia sint?
              Laborum ullam dolores eaque nam suscipit? Aut est tempora iusto,
              laboriosam molestias illum beatae tempore! Veniam ab, nesciunt
              impedit facere quam voluptas quas alias odit quia quod quidem
              quasi molestias? Adipisci quae voluptas alias amet, unde
              recusandae dolorem veritatis similique suscipit voluptatem
              voluptates tenetur, fugiat ea blanditiis dicta eos repellat
              accusantium. Non corporis laborum ipsam modi cum perspiciatis
              blanditiis quos omnis? Architecto natus rerum reprehenderit fugit
              molestiae. Consequatur, voluptate quaerat repudiandae nulla
              dolorum doloremque accusamus voluptatum magni neque omnis
              explicabo iste sit repellendus reprehenderit quasi quo eius, ut
              reiciendis voluptas quae saepe! Pariatur dolores sequi laborum
              libero odio laboriosam molestiae deleniti odit, nisi, optio iure
              maiores corporis vitae quibusdam nulla in itaque similique numquam
              eos. Dolorum, quasi! Labore voluptatum sapiente laboriosam tenetur
              magnam modi nisi ab adipisci aliquid accusantium dolore ratione
              doloribus vel asperiores, dicta consequatur nesciunt expedita
              quam. Odio expedita tempora porro maxime eum beatae incidunt sunt,
              ad, et repudiandae non possimus minus esse earum mollitia facere.
              Aspernatur recusandae repudiandae adipisci, neque quas illo
              assumenda molestiae, odit placeat pariatur illum vero? Eos ut
              ullam vero hic quaerat delectus at, eveniet blanditiis maiores
              veniam expedita deleniti, explicabo ipsum mollitia voluptas.
              Tempore iusto, minus autem facere alias vel quidem magni
              consequuntur quia aliquam sint exercitationem ut doloremque
              possimus ea delectus, porro facilis ducimus voluptate. Aspernatur
              deleniti sapiente a excepturi odio distinctio obcaecati eveniet
              dolores iure illum, tempora, voluptatem quidem itaque ipsum!
              Adipisci dolorum, voluptatibus quisquam, maiores repellendus, quos
              corrupti voluptatem facilis amet veniam doloremque! Eligendi
              quisquam fugit inventore assumenda natus. Dignissimos nesciunt
              iusto delectus quibusdam voluptates veritatis tenetur tempore
              consequatur modi odit sed possimus similique perspiciatis est
              architecto laborum consequuntur eum voluptatum soluta cupiditate
              beatae harum quidem, quos alias? Quibusdam quaerat veniam
              blanditiis? Quis, possimus blanditiis, incidunt exercitationem
              repellat, veritatis officia similique officiis vitae aut ipsum
              eligendi deleniti? Officiis consectetur nulla, asperiores fuga
              debitis mollitia aut et sapiente beatae excepturi vel distinctio
              magni harum repudiandae alias, maxime repellat. Illo beatae, ipsam
              temporibus nam maxime distinctio in! Praesentium quod facilis
              numquam in repellat exercitationem dignissimos explicabo officia
              ipsa? Eum quas suscipit molestiae beatae, optio assumenda ipsum
              quo tempora eligendi recusandae repellendus delectus nisi quia a
              aliquam obcaecati quisquam voluptate. Deserunt voluptas ratione
              velit! Alias iusto, laboriosam ad natus cupiditate perspiciatis
              vitae similique reiciendis incidunt sapiente vero nam tenetur
              repellat tempora ratione dolor suscipit cum odit minus adipisci!
              Labore, perferendis magni excepturi laudantium ipsam quod at quam
              nisi culpa sunt quaerat vel sit atque. Ipsum pariatur aliquid
              cumque, molestiae inventore incidunt? Fuga, nulla aspernatur
              perspiciatis repudiandae cupiditate sunt culpa sed itaque autem
              doloremque accusamus non eveniet necessitatibus asperiores.
              Excepturi tempora architecto sequi veniam nesciunt ipsa. Aut ipsa
              voluptatem autem est non, aliquam laborum soluta, magnam atque,
              distinctio cumque fugit esse hic corporis dolorum enim
              consequuntur perspiciatis mollitia corrupti ea natus praesentium
              placeat. Vel impedit dolor quasi sequi, laudantium quia veritatis,
              rerum molestias, magnam ipsam reprehenderit reiciendis voluptates!
              Quis excepturi animi laborum praesentium officiis eveniet nemo
              error est magnam quasi optio ducimus ipsam libero voluptate
              aliquid unde distinctio, amet adipisci ad sit! Odit quis cumque
              accusamus distinctio vel nisi rerum voluptates est, beatae tempora
              sequi expedita iure debitis eius, aspernatur ab iusto qui, nam
              sint dicta necessitatibus. Quibusdam natus deserunt vitae delectus
              labore. Vel dicta maxime, consequatur incidunt aspernatur quis
              fuga impedit voluptate quia odio aperiam repellat rem modi vitae
              iure deleniti veritatis ea nam veniam non, et ducimus.
              Perspiciatis iusto distinctio provident laborum, alias obcaecati
              commodi earum non magnam. Culpa expedita quod delectus tempore
              nisi. Architecto, quod sapiente obcaecati unde sunt quis a
              laborum, aperiam blanditiis quam voluptatum quaerat voluptas
              aliquid facere adipisci optio quasi commodi iusto ea! Doloribus
              iusto animi facere sunt similique dolorem earum corrupti quidem
              consequuntur magni vitae ullam eos ex, ipsa inventore error
              eveniet cumque, enim assumenda obcaecati rerum, laborum officiis!
              Enim voluptas quasi tenetur quis sapiente libero aliquam
              voluptatibus molestias iste, inventore obcaecati veniam animi
              dolore assumenda necessitatibus accusamus est voluptatem commodi
              ratione distinctio? Blanditiis, nam? Molestias cupiditate porro
              exercitationem ut. Cupiditate tenetur explicabo, deleniti
              eligendi, quam unde ipsum ea eius similique suscipit officiis
              expedita facere itaque sequi necessitatibus molestiae inventore
              perferendis eveniet nihil mollitia dolores voluptatibus vero
              laboriosam! Corporis harum sequi deleniti aspernatur assumenda
              dolorum nobis. Quibusdam magnam qui minus ipsam laboriosam nisi
              recusandae sequi doloremque sit soluta. Illo aut placeat impedit
              repellat quibusdam odit veniam earum mollitia, error magni
              perspiciatis animi. Nulla, culpa distinctio consectetur quibusdam
              deleniti modi perferendis tempora minima veniam ipsa cumque qui
              ullam fuga fugit aliquam officia ad, eaque, accusamus ratione
              voluptas. Soluta impedit aut nesciunt error exercitationem ipsam
              eius consequuntur, explicabo, vero eligendi consequatur fuga fugit
              aliquid. Ipsam dolorem eligendi ex cum illum esse itaque, magnam
              dolores eveniet repellendus explicabo natus, earum nostrum ut in
              perspiciatis at doloremque velit fugiat provident? Et, quasi.
              Dicta voluptate soluta deserunt natus ipsum. Nam enim, alias ipsum
              consequuntur eos esse. Consectetur earum commodi, aut provident
              iusto, natus illum aperiam est, labore porro dolorem voluptatibus
              officia delectus numquam ab mollitia repellat voluptate expedita.
              Cumque illum eaque et minus. Asperiores ratione, fugiat dolore
              atque quam officiis tempora quaerat aliquam recusandae, pariatur
              dolorem ex, vero cum natus architecto debitis aspernatur animi
              nemo ut. Consequuntur qui, ipsum repudiandae nostrum in eligendi
              laborum, ab natus culpa maiores a hic aliquid quidem fugit tempora
              quas voluptas, nihil quasi velit non quibusdam rem. Incidunt cum
              neque, officia officiis cupiditate blanditiis tenetur porro
              placeat corporis similique soluta, aut sed ratione at deserunt
              aspernatur vero? Quod corporis vero illo et impedit voluptatum
              magni facilis odio ab iure, consectetur quos aliquid alias quaerat
              sequi quia ullam possimus atque modi assumenda ut! Hic facilis
              aliquam suscipit amet totam sunt sapiente odit error incidunt.
              Quasi modi voluptatem dolores voluptates magnam dolorum alias?
              Molestiae harum inventore a rerum dignissimos quasi hic soluta
              quos ipsum, quidem, atque explicabo ut. Praesentium unde animi
              dignissimos reprehenderit distinctio in repellat. Velit, libero
              deserunt debitis aliquam dolores ut ipsum eius earum ab nam
              temporibus voluptates ea culpa dicta sed hic exercitationem
              officiis porro nemo fuga unde, molestiae ipsa animi. Itaque
              recusandae officiis, ab veniam nihil consequatur adipisci ea nam
              quae facilis totam ex voluptatem doloribus fugiat maiores ipsum
              neque, similique earum. Sequi maxime commodi aut ad? Ipsam a
              assumenda enim dicta eos voluptatem facilis placeat similique.
              Architecto sunt beatae voluptatem vero quisquam quam iusto commodi
              maiores sit. Labore reprehenderit quam rerum nobis consectetur!
              Blanditiis hic modi sunt provident voluptas ab nobis unde totam
              obcaecati vel quas ipsum perferendis adipisci excepturi sed
              voluptates error odio recusandae, omnis incidunt ex fugit at eius?
              Aperiam consequuntur molestiae dolorum expedita laudantium dolorem
              saepe blanditiis nulla? Assumenda temporibus consequatur eveniet?
              Aliquam a est vitae saepe aut, dignissimos id sapiente facere ab
              alias ut adipisci doloribus perspiciatis qui expedita ad soluta ea
              corrupti, ipsa nostrum aperiam repellat asperiores atque!
              Provident minus sunt expedita hic eos temporibus quasi et at
              inventore earum dolorum, libero harum fugiat dolor ad, non rerum
              minima. Culpa amet quidem dolorum sit modi? Aperiam nobis voluptas
              architecto ea eum aliquid ratione blanditiis quam voluptates
              neque, aut maxime laboriosam reiciendis vero suscipit voluptatibus
              impedit fuga repudiandae itaque deserunt dignissimos recusandae
              nemo ex obcaecati. Repellendus, vitae sint. Delectus cum, pariatur
              amet, magnam ut esse perspiciatis molestias voluptate hic,
              veritatis inventore quae odio similique qui. Magnam consequatur
              necessitatibus dicta fugit, veritatis incidunt doloribus rem at
              nesciunt. Ipsum facere harum sunt, ab aliquam ad esse ipsam quas
              tempora consequatur nesciunt, amet saepe sequi! Dolorum debitis
              tempore autem beatae harum eveniet, aliquam ipsum minus
              repellendus, quo, libero ipsa quae optio mollitia temporibus non
              itaque velit cupiditate ad voluptatibus recusandae voluptate
              voluptas? Quidem magnam ab impedit nemo, ut velit, porro quasi
              nisi reprehenderit saepe sequi, dolore fugiat accusamus? Nesciunt
              illum, quibusdam maxime pariatur enim unde blanditiis officiis.
              Deserunt nihil dolore possimus ea vero ipsum odio optio, autem in
              nam nisi rem odit assumenda dolores, voluptatem maiores a quis
              incidunt corrupti consequatur nesciunt recusandae consequuntur.
              Illum reiciendis a quam eaque facere voluptatum modi quidem aut
              neque corrupti nisi necessitatibus, ipsam aspernatur minus dolorem
              est, at quia! Incidunt labore harum commodi, natus dolorum
              necessitatibus exercitationem eum quibusdam aut cupiditate
              explicabo libero consequatur ducimus omnis voluptatum ex vitae.
              Est tempore assumenda labore molestias iste a magni beatae hic
              amet dignissimos nihil reprehenderit ducimus ex saepe dolorem nisi
              sunt, sed natus veniam ullam ab porro. Molestiae doloremque sunt,
              deleniti quibusdam sit eum saepe est quis. Amet, perferendis ipsum
              dolore dolorem in corrupti sint nisi dolor, architecto
              consequuntur totam. Dignissimos assumenda excepturi perferendis
              porro ullam? Illo deleniti quas adipisci, architecto maxime vel a
              velit unde blanditiis fugit quae id corporis dicta praesentium
              sapiente ipsa beatae saepe reiciendis! Ea debitis temporibus
              libero nihil exercitationem quod doloribus optio ipsum dolorum
              minima delectus, iusto adipisci facilis repellendus modi!
              Possimus, ipsam deserunt et in, minima explicabo debitis sed nam
              iusto reprehenderit facilis rerum! Accusantium, pariatur
              perspiciatis totam qui blanditiis aliquam quaerat provident ut
              iure doloremque labore, delectus quos quibusdam inventore,
              deleniti explicabo nihil voluptatibus vel? Inventore mollitia
              voluptatibus rerum est temporibus aliquam, dicta asperiores
              adipisci laboriosam. Sunt iusto cupiditate recusandae tempore
              cumque earum ea dolorem nisi eius, id mollitia ut fugit magni
              facere. Inventore praesentium, quam reiciendis quasi ea eos nobis
              voluptatibus facilis numquam. Quos asperiores quae quibusdam
              suscipit, molestias fugit accusantium dolorem laboriosam in
              dolores quisquam inventore optio ducimus nesciunt eum accusamus
              excepturi laudantium, qui iusto numquam quasi. Corporis laudantium
              voluptate voluptatum necessitatibus, ullam quae ab eos perferendis
              fuga? Velit aut maxime enim amet necessitatibus, libero laborum
              quibusdam sit, placeat laudantium, consectetur mollitia ut id
              labore deleniti provident quas et numquam! Obcaecati, placeat est?
              Ducimus nemo ut rem asperiores nam aliquid quod, nulla excepturi.
              Sint quae molestiae quaerat obcaecati quis maiores nihil, magni
              labore hic quas placeat. Quam distinctio excepturi, numquam odit
              neque quibusdam sed labore corrupti inventore voluptatum quia
              asperiores! Eaque iusto illum dolorum inventore quos ex, hic
              architecto deserunt rerum suscipit voluptate facere laudantium
              ipsa facilis expedita. Architecto accusantium eligendi maiores,
              earum, modi facere obcaecati voluptas ipsa deserunt sapiente, ad
              placeat dolore culpa eveniet! Minima fuga aliquid numquam ducimus
              tempora laudantium omnis voluptate aliquam est architecto, ipsa
              harum impedit, quas explicabo nam? At maxime omnis aliquid dolores
              natus? Odit repudiandae temporibus soluta itaque necessitatibus,
              nobis tenetur placeat fugiat, excepturi obcaecati blanditiis modi
              eius libero impedit sed vero neque praesentium minus, consequuntur
              est aliquam rem. Non veritatis expedita porro voluptate
              consectetur illum neque, praesentium voluptas corporis. Adipisci,
              quo. Tempore totam optio ducimus quam? Incidunt, eaque assumenda
              tenetur, accusamus veritatis, eius ipsa tempora voluptatem quos
              ipsum aspernatur ducimus quisquam? Eius odio, minus nemo
              consectetur magnam rem quos, porro labore magni, sequi ipsam
              deserunt ipsa facere vel harum provident unde voluptatem quaerat
              reiciendis culpa voluptatum recusandae. Esse animi suscipit
              eveniet laborum in nemo rerum porro excepturi reprehenderit ipsam.
              Molestiae, dolore quae! Suscipit, odit blanditiis quam corrupti
              error reiciendis iusto provident cupiditate laborum, voluptate
              quis eaque voluptas architecto laudantium? Iusto soluta aliquam
              ratione ea quas voluptate porro necessitatibus. Deserunt, veniam
              sed eum expedita magni officia praesentium excepturi illum tempore
              fugit, alias fuga eveniet assumenda neque dicta ex quos ipsum
              consequuntur pariatur ducimus? Voluptas, ipsum. Ea mollitia
              reiciendis sapiente sed voluptatem repudiandae numquam iusto?
              Eligendi explicabo quam aut ut officiis reprehenderit ad dolorum
              quibusdam saepe illum illo debitis ducimus quasi libero est, alias
              unde sunt et! Quo doloremque at autem itaque ipsum delectus nobis
              dolore sequi dolor qui fugiat, accusamus placeat unde illo
              quibusdam facilis repellendus blanditiis, necessitatibus fugit
              modi! Amet nostrum adipisci temporibus eos accusamus non
              recusandae nihil ratione. Corporis culpa obcaecati dolorem
              repellendus distinctio libero cumque id temporibus, saepe eius.
              Porro sequi, vitae iure suscipit quisquam accusamus saepe facilis
              corporis. Tenetur error incidunt, ullam itaque facilis omnis
              labore eos quo dolores, blanditiis temporibus! Libero nemo velit
              exercitationem quia obcaecati sed consequatur eaque optio
              quisquam, esse facilis ad assumenda nulla eius. Quaerat aliquam
              blanditiis quidem rem labore ipsam deleniti voluptate sit quia?
              Possimus nesciunt ex ad enim totam pariatur! Est nam culpa
              accusantium doloremque atque numquam quod saepe consequuntur illo
              quae tempora minima, mollitia, cum beatae ab impedit qui magni?
              Soluta eligendi vel numquam, debitis nulla iste facere quia sunt.
              Voluptate, ab quidem maxime ullam beatae soluta molestiae! Eius in
              distinctio, doloribus dolores corrupti exercitationem facere quis
              tempore. Delectus laboriosam, impedit cum nisi est optio atque
              esse debitis? A sunt ipsam temporibus asperiores excepturi? Vel
              veniam, rerum dolorum voluptates facilis magnam vero reprehenderit
              mollitia quos praesentium, placeat iste maiores ipsam dolores.
              Asperiores iusto ipsa consequatur quis accusamus modi sapiente
              nihil aspernatur odit nemo, quae ad quia rem hic vitae similique
              nesciunt praesentium recusandae nam amet. Officiis laborum illo
              cum quasi culpa minus suscipit praesentium fugit reiciendis
              provident? Id porro eaque, enim obcaecati corporis fugit modi
              nulla soluta deserunt voluptas velit! Ipsa tempore quibusdam illum
              blanditiis quam, non dolor voluptatem accusantium facilis! Quis
              fuga eveniet, molestiae laudantium impedit cum eligendi aperiam!
              Vitae fuga quia aspernatur nulla inventore, culpa laborum delectus
              doloribus facere, ea cum ab? Fugit cum ullam cumque assumenda
              itaque minima! Exercitationem minus inventore optio, unde eos quae
              atque perferendis labore illum quis asperiores odio impedit, natus
              temporibus sint possimus? Ullam voluptatem, ad, autem voluptate
              veniam repellat illum nulla molestias, aperiam quidem similique
              quasi aut consequatur doloremque velit? Non iure minus, voluptate,
              ex aperiam officia hic minima voluptates nihil optio nemo, fugit
              eligendi excepturi neque autem! Vitae nisi earum, dolorem eius
              dignissimos itaque eveniet quod at rerum ratione dolor magnam
              tenetur quas repudiandae. Natus asperiores animi similique aliquam
              perferendis, harum dolorum id a distinctio iure sapiente atque ab
              explicabo expedita enim doloribus labore quasi quisquam deserunt
              eum! Autem odio officiis maxime placeat magni ab nostrum deserunt
              ad beatae. Accusantium nostrum ducimus inventore praesentium, eos
              atque fugit dignissimos, sequi ea eum quia. Dolor, harum. Fugit
              quaerat vitae eum deserunt illo nobis facere repellendus, quia
              provident debitis optio rem eligendi! Accusamus, rem quisquam
              quidem, unde numquam cum ducimus sint vel minima laboriosam
              commodi provident asperiores veniam ipsum mollitia magnam! Neque
              dolore inventore officiis necessitatibus rerum perferendis
              adipisci explicabo optio et iste culpa odio commodi, tenetur,
              consectetur laborum voluptas omnis soluta beatae consequuntur quam
              nulla laboriosam obcaecati! Facilis laudantium excepturi
              exercitationem accusamus mollitia dolore beatae adipisci, possimus
              placeat explicabo. Minus quasi magnam quae a eveniet at. Vitae
              consequatur illo quisquam dolores ad eum. Officia enim provident
              repellat est tempora asperiores obcaecati quis praesentium beatae
              explicabo earum deserunt quos fugit dignissimos, reprehenderit
              quam voluptates impedit maiores nihil. Vitae doloremque maiores
              officiis est nesciunt unde animi velit vel quam, sapiente alias
              corrupti qui maxime eos asperiores inventore fugiat obcaecati
              amet? Officia ut ducimus quisquam unde qui porro. Est maxime
              libero earum perspiciatis atque voluptates, eveniet eum nisi
              repellat, in vel temporibus aut nam adipisci exercitationem
              maiores! Vitae deserunt corrupti quo! Id vitae suscipit iusto
              consectetur quam natus saepe numquam ex dolores magni! Debitis
              aspernatur maiores impedit distinctio. Optio magni sunt assumenda
              mollitia enim quos labore tempore ad ut corporis incidunt
              reiciendis, iusto et est sit voluptatem temporibus ullam nihil
              minus molestias. Inventore recusandae commodi ducimus illo
              officia, consequatur velit doloremque labore consequuntur! Maxime
              fuga doloribus nulla laudantium recusandae odio laborum? Corporis
              laboriosam minima ut, modi porro magnam officiis voluptates fugiat
              similique reiciendis sed veniam quaerat voluptate culpa illum
              cupiditate enim ducimus voluptatibus, placeat suscipit cum libero
              maxime quae. Mollitia deleniti fuga voluptates, fugit quidem sint
              molestias nesciunt eveniet vel qui ratione blanditiis et
              voluptatum aut iure similique odio maxime excepturi atque.
              Recusandae, ab sint atque sit quasi quaerat pariatur fugiat
              tempore voluptates consectetur officia, libero magni cupiditate
              corrupti expedita excepturi quos iste eligendi a non velit illum.
              Exercitationem atque totam necessitatibus itaque aspernatur
              consequatur accusamus eius soluta nobis a, minima nulla, numquam
              quae nihil. Reiciendis aut praesentium, blanditiis accusantium ut
              adipisci fuga quae odit officia ratione! Vero qui ad impedit sit,
              repellat dignissimos ab odit nisi hic corporis ducimus numquam
              esse atque eligendi dolorum mollitia cupiditate voluptates
              suscipit unde temporibus minus quo ratione eveniet explicabo?
              Eaque aliquam hic, dolores repudiandae fugit, cum quibusdam sunt
              earum et nisi excepturi ducimus minus obcaecati totam aperiam
              deserunt reprehenderit vel doloremque, sed recusandae non
              consectetur. Voluptates et adipisci totam sapiente ut esse
              voluptatibus sed iste maxime cupiditate pariatur, perspiciatis
              ducimus molestias. Voluptatem eveniet eos a in fugiat quo
              laboriosam. Laborum ea dolor totam necessitatibus ducimus nihil,
              dignissimos architecto minima earum voluptas quae ullam saepe id
              vitae hic eaque et? Quam odit exercitationem, rerum at tempora
              voluptates ex fugit quod repellat eligendi non tempore, reiciendis
              accusantium esse officia, soluta deleniti. Repudiandae saepe
              cupiditate laboriosam ea eaque laudantium nulla corporis
              consequuntur, odio earum impedit quisquam fuga suscipit rem
              voluptas in sapiente placeat libero aut, ducimus quaerat? Omnis,
              ducimus. Incidunt quos dolor consectetur assumenda illum
              necessitatibus esse mollitia modi dolores dicta rem vitae, sit
              ipsa odio corporis accusamus aliquid molestias voluptates rerum
              magnam, nihil ab animi maiores repellendus? Facere unde
              perferendis illum perspiciatis voluptate minima impedit aliquam
              cum quaerat debitis doloremque veniam a vero id, incidunt
              assumenda sapiente laboriosam nam ut ea consectetur numquam
              explicabo omnis! Quos fugit eaque suscipit illum commodi quibusdam
              sint, alias quaerat, accusamus voluptatum aliquid obcaecati
              eveniet. Assumenda nostrum enim, unde dolores deleniti delectus
              corrupti commodi laborum harum facilis doloremque doloribus
              consectetur. Aperiam suscipit omnis illum dolorum, reiciendis quo
              aliquid aliquam ipsa fugiat voluptas excepturi ducimus,
              necessitatibus corporis qui eaque doloremque soluta sapiente,
              dolorem tenetur totam exercitationem. Amet quaerat, accusantium
              dolores quisquam molestias perferendis aliquam porro vitae neque
              saepe laudantium hic harum obcaecati numquam non quibusdam, at
              dignissimos nihil! Eos odio optio enim, ut eius ipsum quas quos
              sapiente unde corrupti mollitia, minus quaerat velit. Quisquam
              temporibus nobis assumenda recusandae, dolore quod amet
              perferendis similique sunt, sint, incidunt eligendi optio magnam
              alias adipisci repellendus quis perspiciatis quia velit obcaecati?
              Minima eligendi suscipit dolorum nihil culpa dignissimos itaque
              quisquam laudantium vitae eveniet unde, dolorem sequi at illo
              veniam voluptatum cumque earum expedita illum perspiciatis dicta?
              Laudantium sunt fugit sapiente placeat rem dolorum, possimus nisi
              similique hic dicta ipsum corrupti omnis eveniet velit et
              laboriosam totam odio maiores recusandae quae. Eos autem ad
              numquam officia dicta, libero esse veritatis, earum ipsam amet,
              unde vel quia. Officia ut expedita ducimus commodi quam quibusdam
              nemo illum quasi, natus quis quaerat tenetur provident nisi
              similique placeat reiciendis sed maxime soluta exercitationem
              cumque suscipit porro. Architecto maiores numquam praesentium
              ullam necessitatibus porro dolorem a? Itaque provident, odit
              distinctio est mollitia deserunt eligendi ullam, laboriosam, ex
              suscipit nulla labore incidunt animi recusandae eos minima fuga
              possimus nam maiores ipsum ratione. Incidunt ratione enim ullam
              maxime adipisci dolores, officia sunt cumque quia facilis ea sequi
              necessitatibus ad recusandae consectetur illo exercitationem
              repudiandae nisi! Numquam ipsam totam enim tempore quibusdam
              tenetur iste magni architecto nulla voluptate. Nulla vel impedit
              perferendis reprehenderit veritatis, autem quam quae pariatur
              sequi blanditiis officia assumenda ipsam labore quasi esse
              deserunt obcaecati cum dolorem. Laboriosam nulla eveniet, sunt
              debitis similique libero impedit sequi blanditiis itaque. Harum
              perferendis, corrupti eos delectus, ut tempora consequuntur
              similique odit expedita explicabo amet, sint quasi distinctio
              pariatur molestias quos voluptas. Quod, provident, veniam
              laudantium nam harum voluptatem ducimus recusandae odio
              voluptatibus consectetur deserunt placeat itaque quaerat
              repudiandae debitis cum et animi neque impedit aut molestiae atque
              nulla. Ex debitis, inventore, vero recusandae quis nam harum
              corporis beatae excepturi animi porro consequatur aperiam
              accusantium, enim voluptatum deleniti minus ipsum expedita
              consequuntur optio incidunt repudiandae natus asperiores. Ex
              aliquam dolores voluptatum fugit reprehenderit, fugiat eveniet hic
              eos quisquam eaque, suscipit doloremque asperiores excepturi
              expedita quam non, numquam sapiente minus omnis! Iste placeat
              quisquam delectus, beatae adipisci fugit odit doloremque eius
              omnis, praesentium commodi quasi minus rem aliquam dolore eum
              numquam quae ad nostrum porro itaque aliquid eveniet. Nostrum
              quis, voluptatum dolor culpa, eligendi placeat exercitationem,
              unde illo laborum asperiores quo animi! Explicabo beatae vitae,
              inventore quidem totam temporibus molestiae pariatur autem.
              <br />
              Akbarov Salmonbek
              <br />
              <span>{typeEffect}</span>
              <span style={{ color: "red" }}>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <div className="hero-left-flex">
              <div className="hero-left-flex__f">
                <a href="https://t.me/Developer_frontendd" target="_blank">
                  <FaTelegram />
                </a>
                <a href="https://www.instagram.com/salmon_d.w" target="_blank">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/akbarov-salmonbek-862baa2b1/"
                  target="_blank"
                >
                  <IoLogoLinkedin />
                </a>
                <a href="https://github.com/salmonbek" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src={About} alt="me-img" />
          </div>
          <div className="arrow">
            <MdKeyboardDoubleArrowDown />
          </div>
        </div>
      </section>
      {/* hero section */}

      {/* about section */}
      <section id="About" className="about">
        <div className="container">
          <div className="about-top">
            {/* <h1> About Me</h1> */}
            <div className="banner">
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
            </div>
            <p>
              <span>Hey there!</span> I am Salmonbek I am a website developer
              and I am currently gaining experience in this field. In the
              developing world infromation technology is becoming popular so I
              am going to be strong programmer in this job that I am
              learning.And also I gradueted last year I studied at Fergana
              Politecnical institute as sistemotechnic engineer, Once again I
              have ve been learning IT for 2023 at <span>NAJOT TALIM</span>.
            </p>
          </div>
          <div className="about-card">
            {/* <video className="video-bg" autoPlay muted loop>
              <source
                src="../../assets/videos/UI-UX-Design-Showreel-2020-Shakib-4K.mp4"
                type="video/mp4"
              />
            </video> */}
            <div className="about-card-item">
              <div className="icon">
                <FaCalendarDays />
              </div>
              <h4>BIRTHDAY</h4>
              <p>02.09.2000</p>
            </div>
            <div className="about-card-item">
              <div className="icon">
                <FaLocationDot />
              </div>
              <h4>LOCATION</h4>
              <p>Tashkent</p>
            </div>
            <div className="about-card-item">
              <div className="icon">
                <PiStudentBold />
              </div>
              <h4>DEGREE</h4>
              <p>Bachelor</p>
            </div>
            <div className="about-card-item">
              <div className="icon">
                <FaVolleyballBall />
              </div>
              <h4>HOBBBY</h4>
              <p> Voleyball</p>
            </div>
          </div>
          <div className="icon-line">
            <VscFoldDown />
          </div>
        </div>
      </section>
      {/* about section */}

      {/* service section */}
      <section id="Service" className="service">
        <div className="container">
          <div className="scroll-reveal">
            <h1 className="section-title">
              <span>My Services</span>
            </h1>
            <p>
              <span>
                My services are Web Programming, Video montage,Web design.
              </span>
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-items">
              <div className="icon-web">
                <IoLogoFigma />
              </div>
              <h4>Web Design</h4>
              <p>
                I can also create front-end web designs. I primarily use the
                Figma.com website for this.
              </p>
            </div>
            <div className="service-card-items2">
              <div className="icon-web">
                <FaVideo />
              </div>
              <h4>Video Montage</h4>
              <p>I could work with video montage ,espically in cup cut app.</p>
            </div>
            <div className="service-card-items3">
              <div className="icon-web">
                <MdOutlineDeveloperMode />
              </div>
              <h4>Web Programming</h4>
              <p>
                It is my major so I can create new web projects by using
                Front-End
              </p>
            </div>
          </div>
          <div className="request-area">
            <p className="description">
              Dears, if you want to open your own website, we offer you our
              services called IT WORLD, fill this form and we will contact you
              soon.
            </p>
            <div className="center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4705PjWQ7l8LgJRo8D64evyHeBH0IhN_1Gc--UQ5FgnRmtw/viewform">
                Send request
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* service section  */}

      {/* skills section */}
      <section id="Skill" className="skills">
        <div className="container">
          <div className="scroll-reveal">
            <h1 className="section-title">
              <span>My Skills</span>
            </h1>
          </div>
          <marquee scrollAmount="13" direction="left">
            <div className="skills-card">
              <div className="skills-card__items">
                <FaHtml5 />
                <h3>Html</h3>
              </div>
              <div className="skills-card__items">
                <FaCss3 />

                <h3>Css</h3>
              </div>
              <div className="skills-card__items">
                <FaSass />

                <h3>Sass</h3>
              </div>
              <div className="skills-card__items">
                <FaBootstrap />
                <h3>Bootstrap</h3>
              </div>
              <div className="skills-card__items">
                <SiTailwindcss />

                <h3>Tailwind</h3>
              </div>
              <div className="skills-card__items">
                <IoLogoJavascript />

                <h3>JavaScript</h3>
              </div>
              <div className="skills-card__items">
                <FaReact />
                <h3>React</h3>
              </div>
              <div className="skills-card__items">
                <SiRedux />

                <h3>Redux</h3>
              </div>
              <div className="skills-card__items">
                <SiTypescript />

                <h3>TypeScript</h3>
              </div>
              <div className="skills-card__items">
                <PiFigmaLogoFill />

                <h3>Figma</h3>
              </div>
              <div className="skills-card__items">
                <ImGithub />

                <h3>GitHub</h3>
              </div>
            </div>
          </marquee>
        </div>
      </section>
      {/* skills section */}

      {/* work section */}
      <section className="work" id="Projects">
        <div className="container">
          <div className="scroll-reveal">
            <h1 className="section-title">
              <span>My Works</span>
            </h1>
          </div>
          <div className="work-card">
            <div className="work-card-item">
              <img className="img-project" src={Project11} alt="" />
              <div className="work-card-item__flex">
                <h3>Dashboard in TypeScript,bootstrap,Ant</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://github.com/salmonbek/task7-6.git">View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project2} alt="" />
              <div className="work-card-item__flex">
                <h3>Crypyo site in React</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://exam-final-xi.vercel.app/">View project</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project4} alt="" />
              <div className="work-card-item__flex">
                <h3>Alif Shopp in React App</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://homework-9-ts.vercel.app/">View project</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project5} alt="" />
              <div className="work-card-item__flex">
                <h3>To-Do-App in React-redux</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://sunny-gumption-19bdc1.netlify.app">
                  View project
                </a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project7} alt="" />
              <div className="work-card-item__flex">
                <h3>Online-Phone in JavaScript</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://phone-project-nine.vercel.app/">
                  View project
                </a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project8} alt="" />
              <div className="work-card-item__flex">
                <h3>Company in Html-sass</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://kaleidoscopic-dodol-f33436.netlify.app/">
                  View project
                </a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project0} alt="" />
              <div className="work-card-item__flex">
                <h3>Crud-App in React -bootstrap</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>

                <a href="https://task7-1-two.vercel.app/">View project</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project1} alt="" />
              <div className="work-card-item__flex">
                <h3>FindCountries in JavaScript</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis, eius?
                </p>
                <a href="https://comforting-gnome-2e3ceb.netlify.app">
                  View project
                </a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>

            <div className="work-card-item">
              <img className="img-project" src={Spotify} alt="" />
              <div className="work-card-item__flex">
                <h3>Spotify clone in React(Zustand)</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://exam-7-xi.vercel.app/">View project</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <div className="see-all">
            <a
              className="link-see"
              href="https://github.com/salmonbek?tab=repositories"
            >
              See more
            </a>
          </div>
        </div>
      </section>
      {/* work section */}

      {/* section contact  */}
      <section className="contact" id="Contactsec">
        <div className="container">
          <div className="scroll-reveal">
            <h1 className="section-title">
              <span>My Contact</span>
            </h1>
          </div>
          <div className="contact-card">
            <div className="contact-card-items">
              <div className="child1">
                <FaPhoneAlt />
              </div>
              <p>Phone</p>
              <h3>+998 90 628 77 42</h3>
            </div>
            <div className="contact-card-items">
              <div className="child1">
                <MdMarkEmailRead />
              </div>
              <p>Email Adress</p>
              <h3>salmonlearner34@gmail.com</h3>
            </div>
            <div className="contact-card-items">
              <div className="child1">
                <IoLocation />
              </div>
              <p>Address</p>
              <h3>Tashkent, Uzbekistan</h3>
            </div>
            <div className="contact-card-items">
              <div className="child1">
                <FaGlobe />
              </div>
              <p>Website</p>
              <h3>Myportfolio.uz</h3>
            </div>
          </div>
        </div>
      </section>
      {/* section contact  */}
    </main>
  );
}

export default Main;

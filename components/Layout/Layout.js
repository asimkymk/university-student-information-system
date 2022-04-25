import styles from "../../styles/Layout.module.css";
import $ from "jquery";
import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Layout extends Component {
  constructor({ children }) {
    super();
    this.children = children;
  }
  componentDidMount() {
    this._handleScroll();
  }
  _handleScroll() {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(document).scrollTop() > 25) {
          $(".scrollCheck").removeClass(styles.topPanel);
          $(".scrollCheck").addClass(styles.topPanelScroll);
        } else {
          $(".scrollCheck").removeClass(styles.topPanelScroll);
          $(".scrollCheck").addClass(styles.topPanel);
        }
      });
    });
  }
  render() {
    const homeElement = <FontAwesomeIcon icon={faHome} />;
    return (
      <div className={styles.main}>
        <div className={styles.leftPanel}>
          <h1>Sol Menü</h1>
        </div>

        <div className={styles.rightPanel}>
          <div className={`scrollCheck ${styles.topPanel}`}>
            <div className={styles.topPanelRoot}>
              <div className={styles.topPanelItem}>
                <nav className={styles.topPanelNav}>
                  <ol className={styles.topPanelList}>
                    <li className={styles.topPanelLi}>
                      <a href="#">
                        <span
                          className={styles.topPanelLink}
                          style={{ marginRight: "7px" }}
                        >
                          {homeElement}
                        </span>
                      </a>
                    </li>
                    <li className={styles.topPanelLi}>
                      <a href="#">
                        <span className={styles.topPanelLink}>Ana Sayfa</span>
                      </a>
                    </li>
                    <li className={styles.topPanelListSeperator}>/</li>
                    <li className={styles.topPanelLi}>
                      <a href="#">
                        <span className={styles.topPanelLink}>Notlar</span>
                      </a>
                    </li>
                  </ol>
                </nav>
                <h6 className={styles.topPanelPageText}>Notlar</h6>
              </div>
              <div className={styles.topPanelItem}>
                Profil Resmi Ayarlar vs.
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            similique ea doloremque inventore eum! Placeat reiciendis dolor unde
            laborum laudantium odit perferendis quia repellat in ex officia
            minima autem obcaecati, iste rem corporis cupiditate, veritatis
            neque! Quo facilis, amet maxime placeat ex error officiis
            reprehenderit pariatur distinctio neque quia culpa accusamus
            expedita consequatur alias debitis nisi autem veniam minima quae
            temporibus? Quibusdam repudiandae nobis similique, voluptates eum
            accusamus dignissimos corporis repellendus perferendis eius ducimus,
            possimus suscipit animi accusantium ipsa molestiae. Aperiam possimus
            eligendi praesentium! Blanditiis sed dignissimos, nulla mollitia
            quae suscipit eligendi quidem rerum totam sequi placeat. Ratione
            omnis ipsam iure aspernatur iusto. Iste numquam quidem nam error
            sint consequuntur molestias neque voluptatem minus vero animi,
            repudiandae, voluptatum at maxime aliquam atque commodi est impedit,
            inventore labore magnam amet accusantium eum incidunt. Odit amet
            suscipit rerum culpa aut totam, dignissimos, earum architecto
            asperiores beatae provident placeat aliquid aliquam accusantium
            voluptas nam sed incidunt accusamus laudantium consequatur
            perferendis nulla adipisci eaque. Voluptas, perferendis! Illum
            doloribus minus, quidem vel totam officiis quia ab nostrum maiores
            illo eveniet rem nulla ad perferendis aspernatur quaerat veniam
            voluptate ex tenetur a obcaecati cupiditate? Ipsam est deserunt amet
            dignissimos delectus non error voluptas ex qui beatae reprehenderit
            dicta corporis, quis excepturi tenetur iusto accusantium pariatur
            optio maxime, architecto maiores distinctio nam quidem. Voluptate
            cum blanditiis voluptatum officia neque, maxime beatae, laborum
            consectetur harum itaque explicabo modi suscipit iure eum.
            Cupiditate odio sapiente nam totam, laborum repellat labore corrupti
            vel dignissimos blanditiis porro. Totam possimus praesentium
            repudiandae id cumque consequuntur incidunt autem tempore est,
            assumenda vero suscipit ullam ad! Debitis at temporibus accusantium
            mollitia dolore blanditiis porro velit impedit deserunt, aliquam
            officiis vel culpa, eligendi tempore! Voluptatum vitae voluptatibus
            sunt vel pariatur ex veniam, maxime repudiandae vero obcaecati
            sapiente quae rerum? Fugiat neque ad nihil praesentium est dolores
            possimus esse odio, numquam, accusantium omnis maxime? Sit iusto,
            harum, animi vel aliquam molestiae laudantium autem laborum velit
            officia architecto ullam in voluptate necessitatibus eaque, magnam
            eos dignissimos eveniet veritatis nisi mollitia. Aliquid iure
            recusandae odit id perspiciatis nostrum sequi deserunt explicabo quo
            soluta optio fuga, doloribus necessitatibus ipsam quaerat! Soluta
            adipisci voluptatum quod distinctio exercitationem ullam,
            consequatur ab dolor minus quaerat explicabo dicta? Aut quibusdam
            nisi illo ipsum cum, asperiores sunt tempora laudantium qui, illum
            ea repudiandae error at eius aperiam? Tempora ut, nisi quia libero
            numquam velit possimus suscipit aspernatur soluta. Dolore nobis,
            libero, ipsam soluta cumque praesentium molestias perferendis, ipsum
            debitis iste alias? Delectus ducimus quod quia architecto explicabo
            molestiae corporis maxime, odio maiores rem cumque nihil suscipit,
            ut non repellendus sit illum, accusantium quos totam! Autem tenetur
            non distinctio, eius quo id placeat odit veritatis? Dolore delectus
            veritatis quas. Deleniti repudiandae ea, saepe quidem sed quis
            corrupti doloremque fuga id ab in obcaecati eligendi molestias
            accusamus nostrum optio suscipit, harum quam ex distinctio enim.
            Voluptatibus quisquam eos numquam eveniet optio quaerat assumenda
            odio praesentium! Quidem, fugiat sed? Culpa dignissimos, iusto qui
            ipsam sit at voluptas pariatur debitis quasi animi distinctio rerum
            facere est sapiente facilis?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            similique ea doloremque inventore eum! Placeat reiciendis dolor unde
            laborum laudantium odit perferendis quia repellat in ex officia
            minima autem obcaecati, iste rem corporis cupiditate, veritatis
            neque! Quo facilis, amet maxime placeat ex error officiis
            reprehenderit pariatur distinctio neque quia culpa accusamus
            expedita consequatur alias debitis nisi autem veniam minima quae
            temporibus? Quibusdam repudiandae nobis similique, voluptates eum
            accusamus dignissimos corporis repellendus perferendis eius ducimus,
            possimus suscipit animi accusantium ipsa molestiae. Aperiam possimus
            eligendi praesentium! Blanditiis sed dignissimos, nulla mollitia
            quae suscipit eligendi quidem rerum totam sequi placeat. Ratione
            omnis ipsam iure aspernatur iusto. Iste numquam quidem nam error
            sint consequuntur molestias neque voluptatem minus vero animi,
            repudiandae, voluptatum at maxime aliquam atque commodi est impedit,
            inventore labore magnam amet accusantium eum incidunt. Odit amet
            suscipit rerum culpa aut totam, dignissimos, earum architecto
            asperiores beatae provident placeat aliquid aliquam accusantium
            voluptas nam sed incidunt accusamus laudantium consequatur
            perferendis nulla adipisci eaque. Voluptas, perferendis! Illum
            doloribus minus, quidem vel totam officiis quia ab nostrum maiores
            illo eveniet rem nulla ad perferendis aspernatur quaerat veniam
            voluptate ex tenetur a obcaecati cupiditate? Ipsam est deserunt amet
            dignissimos delectus non error voluptas ex qui beatae reprehenderit
            dicta corporis, quis excepturi tenetur iusto accusantium pariatur
            optio maxime, architecto maiores distinctio nam quidem. Voluptate
            cum blanditiis voluptatum officia neque, maxime beatae, laborum
            consectetur harum itaque explicabo modi suscipit iure eum.
            Cupiditate odio sapiente nam totam, laborum repellat labore corrupti
            vel dignissimos blanditiis porro. Totam possimus praesentium
            repudiandae id cumque consequuntur incidunt autem tempore est,
            assumenda vero suscipit ullam ad! Debitis at temporibus accusantium
            mollitia dolore blanditiis porro velit impedit deserunt, aliquam
            officiis vel culpa, eligendi tempore! Voluptatum vitae voluptatibus
            sunt vel pariatur ex veniam, maxime repudiandae vero obcaecati
            sapiente quae rerum? Fugiat neque ad nihil praesentium est dolores
            possimus esse odio, numquam, accusantium omnis maxime? Sit iusto,
            harum, animi vel aliquam molestiae laudantium autem laborum velit
            officia architecto ullam in voluptate necessitatibus eaque, magnam
            eos dignissimos eveniet veritatis nisi mollitia. Aliquid iure
            recusandae odit id perspiciatis nostrum sequi deserunt explicabo quo
            soluta optio fuga, doloribus necessitatibus ipsam quaerat! Soluta
            adipisci voluptatum quod distinctio exercitationem ullam,
            consequatur ab dolor minus quaerat explicabo dicta? Aut quibusdam
            nisi illo ipsum cum, asperiores sunt tempora laudantium qui, illum
            ea repudiandae error at eius aperiam? Tempora ut, nisi quia libero
            numquam velit possimus suscipit aspernatur soluta. Dolore nobis,
            libero, ipsam soluta cumque praesentium molestias perferendis, ipsum
            debitis iste alias? Delectus ducimus quod quia architecto explicabo
            molestiae corporis maxime, odio maiores rem cumque nihil suscipit,
            ut non repellendus sit illum, accusantium quos totam! Autem tenetur
            non distinctio, eius quo id placeat odit veritatis? Dolore delectus
            veritatis quas. Deleniti repudiandae ea, saepe quidem sed quis
            corrupti doloremque fuga id ab in obcaecati eligendi molestias
            accusamus nostrum optio suscipit, harum quam ex distinctio enim.
            Voluptatibus quisquam eos numquam eveniet optio quaerat assumenda
            odio praesentium! Quidem, fugiat sed? Culpa dignissimos, iusto qui
            ipsam sit at voluptas pariatur debitis quasi animi distinctio rerum
            facere est sapiente facilis?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            similique ea doloremque inventore eum! Placeat reiciendis dolor unde
            laborum laudantium odit perferendis quia repellat in ex officia
            minima autem obcaecati, iste rem corporis cupiditate, veritatis
            neque! Quo facilis, amet maxime placeat ex error officiis
            reprehenderit pariatur distinctio neque quia culpa accusamus
            expedita consequatur alias debitis nisi autem veniam minima quae
            temporibus? Quibusdam repudiandae nobis similique, voluptates eum
            accusamus dignissimos corporis repellendus perferendis eius ducimus,
            possimus suscipit animi accusantium ipsa molestiae. Aperiam possimus
            eligendi praesentium! Blanditiis sed dignissimos, nulla mollitia
            quae suscipit eligendi quidem rerum totam sequi placeat. Ratione
            omnis ipsam iure aspernatur iusto. Iste numquam quidem nam error
            sint consequuntur molestias neque voluptatem minus vero animi,
            repudiandae, voluptatum at maxime aliquam atque commodi est impedit,
            inventore labore magnam amet accusantium eum incidunt. Odit amet
            suscipit rerum culpa aut totam, dignissimos, earum architecto
            asperiores beatae provident placeat aliquid aliquam accusantium
            voluptas nam sed incidunt accusamus laudantium consequatur
            perferendis nulla adipisci eaque. Voluptas, perferendis! Illum
            doloribus minus, quidem vel totam officiis quia ab nostrum maiores
            illo eveniet rem nulla ad perferendis aspernatur quaerat veniam
            voluptate ex tenetur a obcaecati cupiditate? Ipsam est deserunt amet
            dignissimos delectus non error voluptas ex qui beatae reprehenderit
            dicta corporis, quis excepturi tenetur iusto accusantium pariatur
            optio maxime, architecto maiores distinctio nam quidem. Voluptate
            cum blanditiis voluptatum officia neque, maxime beatae, laborum
            consectetur harum itaque explicabo modi suscipit iure eum.
            Cupiditate odio sapiente nam totam, laborum repellat labore corrupti
            vel dignissimos blanditiis porro. Totam possimus praesentium
            repudiandae id cumque consequuntur incidunt autem tempore est,
            assumenda vero suscipit ullam ad! Debitis at temporibus accusantium
            mollitia dolore blanditiis porro velit impedit deserunt, aliquam
            officiis vel culpa, eligendi tempore! Voluptatum vitae voluptatibus
            sunt vel pariatur ex veniam, maxime repudiandae vero obcaecati
            sapiente quae rerum? Fugiat neque ad nihil praesentium est dolores
            possimus esse odio, numquam, accusantium omnis maxime? Sit iusto,
            harum, animi vel aliquam molestiae laudantium autem laborum velit
            officia architecto ullam in voluptate necessitatibus eaque, magnam
            eos dignissimos eveniet veritatis nisi mollitia. Aliquid iure
            recusandae odit id perspiciatis nostrum sequi deserunt explicabo quo
            soluta optio fuga, doloribus necessitatibus ipsam quaerat! Soluta
            adipisci voluptatum quod distinctio exercitationem ullam,
            consequatur ab dolor minus quaerat explicabo dicta? Aut quibusdam
            nisi illo ipsum cum, asperiores sunt tempora laudantium qui, illum
            ea repudiandae error at eius aperiam? Tempora ut, nisi quia libero
            numquam velit possimus suscipit aspernatur soluta. Dolore nobis,
            libero, ipsam soluta cumque praesentium molestias perferendis, ipsum
            debitis iste alias? Delectus ducimus quod quia architecto explicabo
            molestiae corporis maxime, odio maiores rem cumque nihil suscipit,
            ut non repellendus sit illum, accusantium quos totam! Autem tenetur
            non distinctio, eius quo id placeat odit veritatis? Dolore delectus
            veritatis quas. Deleniti repudiandae ea, saepe quidem sed quis
            corrupti doloremque fuga id ab in obcaecati eligendi molestias
            accusamus nostrum optio suscipit, harum quam ex distinctio enim.
            Voluptatibus quisquam eos numquam eveniet optio quaerat assumenda
            odio praesentium! Quidem, fugiat sed? Culpa dignissimos, iusto qui
            ipsam sit at voluptas pariatur debitis quasi animi distinctio rerum
            facere est sapiente facilis?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            alias, itaque officiis aut tenetur laborum sed eius nesciunt odio
            obcaecati quae deserunt nulla cupiditate animi sit rem dolores
            quibusdam? Omnis, dolor in doloremque ducimus nisi, quas consectetur
            mollitia odio pariatur culpa iusto possimus at fuga? Numquam
            voluptatibus provident voluptates sunt consequatur pariatur sapiente
            quae quos tenetur asperiores obcaecati itaque excepturi dolor velit
            a, ab similique? Praesentium, minus aut illum temporibus commodi
            fugit cupiditate sequi, molestias esse necessitatibus alias,
            voluptatibus voluptas maxime sapiente. Dolorum blanditiis
            consequuntur omnis assumenda consequatur ratione accusantium
            doloremque, soluta, itaque fuga aspernatur enim cumque praesentium!
            Labore dolor animi facilis perspiciatis! Harum excepturi ea voluptas
            quae! Pariatur quae ea consectetur ratione eveniet, necessitatibus
            fugit eius itaque, non perspiciatis ut alias aliquid earum. Nulla,
            tempore officiis nobis qui eaque molestiae maxime quasi enim debitis
            quae suscipit assumenda velit incidunt omnis. Ipsam ratione, qui
            deleniti provident excepturi sit eaque, suscipit eligendi vitae ad
            possimus ullam, veritatis laudantium autem expedita delectus facere
            ex modi commodi maxime quod. Ipsa tempore aperiam facilis nihil vero
            perspiciatis totam! Id, cum! Ratione consequatur inventore tempora!
            Quos quam voluptatem officia. Esse perferendis quisquam neque
            molestias rem, odit ab in harum eaque voluptate ullam totam amet
            unde voluptatem ad, omnis ipsum alias cum ex. Iste ipsa, vel numquam
            suscipit temporibus quia odio sequi dolore, porro blanditiis rem nam
            culpa, error nostrum asperiores laboriosam ex aliquam aspernatur!
            Modi aliquam error ipsam iure reiciendis distinctio nesciunt
            accusamus illum voluptatem nulla, est, sequi magni harum adipisci
            quidem alias. Nostrum consectetur veniam rem architecto excepturi
            provident eos dicta? Fugiat nisi provident quis enim magnam
            similique illo earum consequatur recusandae sunt laudantium quisquam
            quas modi dolore repellendus, quia quae maxime non possimus omnis
            voluptatum commodi! Accusantium porro quos recusandae voluptatem
            placeat suscipit dolorum doloribus veritatis dolore fugit? Possimus
            ipsam enim distinctio accusantium ad doloremque blanditiis in
            assumenda esse quibusdam placeat sequi, eius iure perspiciatis eos
            eaque, laudantium voluptatibus excepturi dolor dolorem voluptate
            optio officiis nobis. Repudiandae, ratione. Placeat possimus illo
            aperiam reprehenderit officiis saepe ducimus commodi vero quo,
            perferendis tempora, blanditiis accusamus enim consectetur laborum
            similique consequatur fuga rem eum necessitatibus a. Minus
            blanditiis et cum, velit sequi repellendus! Amet, magnam natus. Quos
            sit necessitatibus veritatis, vel ipsa numquam nulla non adipisci
            cupiditate earum fugiat facere provident quia, eveniet tempora
            voluptates voluptatem, optio aspernatur unde porro? Accusantium
            dicta totam molestiae, quae quas nostrum est tenetur iure. Cum
            officiis debitis omnis. Ducimus saepe non, unde animi dolores
            officia esse aliquam ex delectus earum cum fugit repudiandae fuga
            rerum possimus modi consequatur, totam magni, sequi debitis
            perferendis natus perspiciatis. Molestias, natus ea neque tempora,
            nesciunt aperiam alias ipsam commodi accusantium saepe corrupti
            quaerat repellat? Autem fuga nesciunt eaque dolorem aliquam enim
            facere, non nam laboriosam necessitatibus rerum ipsa voluptas neque
            asperiores voluptatem maiores. Quia quas cumque aperiam. Eveniet
            sapiente commodi dolore a laudantium expedita mollitia minima. Eius
            itaque quasi dolorum consequuntur. Repellat aspernatur aperiam eaque
            blanditiis perferendis dicta nostrum rerum iste, sed libero, ex
            asperiores porro cupiditate quasi est in suscipit natus animi.
            Delectus.
          </p>
          {this.children}
        </div>

        <script>{this._handleScroll}</script>
      </div>
    );
  }
}

export default Layout;

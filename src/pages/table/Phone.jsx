import "./phone.scss";
import { Class } from "../../components/classs/Class";

export function Phone() {

  return (
    <div className="main">
      <div className="container">
        <div className="time days">
          <p>Horário</p>
        </div>
        <div className="monday days">
          <p>Segunda</p>
        </div>
        <div className="tuesday days">
          <p>Terça</p>
        </div>
        <div className="wednesday days">
          <p>Quarta</p>
        </div>
        <div className="thursday days">
          <p>Quinta</p>
        </div>
        <div className="friday days">
          <p>Sexta</p>
        </div>

        <div className="hora1 hourBorder hide">
          <p>10:30 - 11:30</p>
        </div>
        <div className="hora2 hourBorder hide">
          <p>11:30 - 13:30</p>
        </div>
        <div className="hora3 hourBorder">
          <p>13:30 - 17:30</p>
        </div>
        <div class="hora4 hourBorder hide"><p>17:30 - 18:30</p></div>
        <div class="hora5 hourBorder hide"><p>18:30 - 20:30</p></div>
        <div class="horapp hourBorder"><p>19:00 - 20:00</p></div>

        <div class="hora31 hourBorder">
          <p>13:30 - 17:30</p>
        </div>
        <div class="hora51 hourBorder">
          <p>18:30 - 20:30</p>
        </div>

        <div class="hora12 hourBorder">
          <p>10:30 - 11:30</p>
        </div>
        <div class="hora32 hourBorder">
          <p>13:30 - 17:30</p>
        </div>
        <div class="hora52 hourBorder">
          <p>18:30 - 20:30</p>
        </div>

        <div class="hora13 hourBorder">
          <p>10:00 - 11:40</p>
        </div>
        <div class="hora23 hourBorder">
          <p>11:30 - 12:30</p>
        </div>
        <div class="hora33  hourBorder">
          <p>13:30 - 17:30</p>
        </div>
        <div class="hora43 hourBorder">
          <p>17:30 - 18:30</p>
        </div>
        <div class="hora53 hourBorder">
          <p>18:30 - 20:30</p>
        </div>

        <div class="hora44 hourBorder">
          <p>19:00 - 20:00</p>
        </div>

        <div class="mondayhora1 borderClass hide"></div>
        <div class="mondayhora2 borderClass hide"></div>
        <div class="mondayhora3 card aula borderClass">
          <Class
            subject="Informática Industrial"
            teacher="Gregory Chagas"
            topic="Aula"
            link="https://meet.google.com/bzv-wwsd-ere"
          />
        </div>
        <div class="mondayhora4 borderClass hide"></div>
        <div class="mondayhora5 borderClass card atendimento">
        <p className="hourA">19:00-20:00</p>
        <Class
          subject="Projeto Integrador"
          teacher="Francisco"
          topic="Atendimento"
          link="https://meet.google.com/byg-gdeo-kdf"
        />
        </div>

        <div class="tuesdayhora1 borderClass hide"></div>
        <div class="tuesdayhora2 borderClass hide"></div>
        <div class="tuesdayhora3 card aula borderClass">
        <Class
            subject="Projeto Integrador"
            teacher="Cythia & Francisco"
            topic="Aula"
            link="https://meet.google.com/hxr-pyjk-txq"
          />
        </div>
        <div class="tuesdayhora4 borderClass hide"></div>
        <div class="tuesdayhora5 card aula borderClass">
          <Class
            subject="Ciência e Tecnologia"
            teacher="Patricia Rosa"
            topic="Aula"
            link="https://conferenciaweb.rnp.br/webconf/patricia-rosa-3"
          />
        </div>


        <div class="wednesdayhora1 borderClass card atendimento">
        <Class
            subject="Projeto Integrador"
            teacher="Cythia"
            topic="Atendimento"
            link="https://meet.google.com/kgp-nvmq-eqw"
          />
        </div>
        <div class="wedhora2 borderClass hide"></div>
        <div class="wedhora3 borderClass card aula">
        <Class
            subject="Controle de Processos"
            teacher="Cythia"
            topic="Aula"
            link="https://meet.google.com/vix-vqcf-xbp"
          />
        </div>
        <div class="wedhora4 borderClass hide"></div>
        <div class="wedhora5 borderClass card aula">
        <Class
          subject="Gestão da Manutenção"
          teacher="Marlos"
          topic="Aula"
          link="https://meet.google.com/qme-jcuk-wir"
        />
        </div>
        
        <div class="thhora1 borderClass card aula">
        <p className="hourA">10:00-11:40</p>
        <Class
          subject="Empreendedorismo"
          teacher="Taylor"
          topic="Aula"
          link="https://meet.google.com/bec-zmvv-tiv"
        />
        </div>
        <div class="thhora2 borderClass"></div>
        <div class="thhora3 borderClass card aula">
        <Class
          subject="Automação Industrial"
          teacher="Valdir Noll"
          topic="Aula"
          link="https://meet.google.com/cwn-bzqf-jca"
        />
        </div>
        <div class="thhora4 card atendimento borderClass">
        <Class
          subject="Controle de Processos"
          teacher="Cythia"
          topic="Atendimento"
          link="https://meet.google.com/kgp-nvmq-eqw"
        />
        </div>
        <div class="thhora5 borderClass">
        </div>

        <div class="fhora1 borderClass hide"></div>
        <div class="fhora2 borderClass hide"></div>
        <div class="fhora3 borderClass hide"></div>
        <div class="fhora4 borderClass hide"></div>
        <div class="fhora5 borderClass card atendimento">
        <p className="hourA">19:00-20:00</p>
        <Class
          subject="Projeto Integrador"
          teacher="Francisco"
          topic="Atendimento"
          link="https://meet.google.com/byg-gdeo-kdf"
        />
        </div>
        
      </div>
    </div>
  );
}

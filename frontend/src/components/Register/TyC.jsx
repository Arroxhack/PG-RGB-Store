import React, { useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext";
import ShowLessMore from "show-more-less";
import "show-more-less/dist/index.css";
export default function TyC({ Close }) {
  const { setTyC } = useContext(CartContext);
  const [text, setText] = useState(`1- RGB STORE 
RGBSTORE es una compañía de tecnología que ofrece servicios vinculados principalmente al comercio electrónico y a los pagos digitales. 


2- Términos y Condiciones
Estos términos y condiciones y los anexos que explican los servicios (de ahora en más: “Términos y Condiciones”) regulan la relación entre el Mercado  y las  personas que usan sus servicios (“Personas Usuarias”). 

Las Personas Usuarias aceptan estos Términos y Condiciones desde el momento en que se registran en el Sitio.

Cuando debamos hacer cambios importantes en nuestros servicios, publicaremos las modificaciones con 10 días corridos de anticipación para que las Personas Usuarias puedan revisarlas y seguir usando el Ecosistema RGB-STORE. En ningún caso afectarán las operaciones que ya hayan finalizado.

Las Personas Usuarias que no tengan obligaciones pendientes con RGB-STORE o con otras Personas Usuarias, podrán finalizar la relación con RGB-STORE cancelando su cuenta.

3- Capacidad
Podrán usar nuestros servicios las personas  que tengan capacidad legal para comprar. Los menores de edad, a partir de los 13 años, sólo podrán utilizar su cuenta con autorización del representante legal, quien responderá por todas las acciones y obligaciones que se deriven de la utilización de esa cuenta y quien deberá velar por el uso responsable y adecuado de ella en atención a la madurez del menor de edad que autorice.

4- Registro y Cuenta
Quien quiera usar nuestros servicios, deberá completar el formulario de registro con los datos que le sean requeridos. Al completarlo, se compromete a hacerlo de manera exacta, precisa y verdadera y a mantener sus datos siempre actualizados. La Persona Usuaria será la única responsable de la certeza de sus datos de registro. Sin perjuicio de la información brindada en el formulario, podremos solicitar y/o consultar información adicional para corroborar la identidad de la Persona Usuaria. 

La cuenta es personal, única e intransferible, es decir que bajo ningún concepto se podrá vender o ceder a otra persona. Se accede a ella con la clave personal de seguridad que haya elegido y que deberá mantener bajo estricta confidencialidad. Por eso, la Persona Usuaria será la única responsable por las operaciones que se realicen en su cuenta. En caso de detectar un uso no autorizado de su cuenta,deberá notificar de forma inmediata y fehaciente a RGB-STORE. 

Podremos rechazar una solicitud de registro o bien cancelar un registro ya aceptado, sin que esto genere derecho a un resarcimiento. No podrán registrarse nuevamente en el Sitio las Personas Usuarias que hayan sido inhabilitadas previamente.

Además, en caso de detectar el uso de más de una cuenta, podremos aplicar retenciones, débitos y/o cualquier otra medida si consideramos que ese accionar puede perjudicar al resto de las personas que usan el Sitio, más allá de las sanciones que pudieran corresponder. 

5- Privacidad de datos
En RGB-STORE hacemos un uso responsable de la información personal, protegiendo la privacidad de las Personas Usuarias que nos confiaron sus datos y tomando las medidas necesarias para garantizar la seguridad en nuestro Ecosistema RGB-STORE. Conocé más sobre nuestra Declaración de Privacidad.

6- Sanciones
En caso que la Persona Usuaria incumpliera una ley o los Términos y Condiciones, podremos advertir, suspender, restringir o inhabilitar temporal o definitivamente su cuenta, sin perjuicio de otras sanciones que se establezcan en las reglas de uso particulares de los servicios de RGB-STORE. 


7- Responsabilidad
RGB-STORE será responsable por cualquier defecto en la prestación de su servicio, en la medida en que le sea imputable y con el alcance previsto en las leyes vigentes. 


8- Tarifas
RGB-STORE podrá cobrar por sus servicios y la Persona Usuaria se compromete a pagarlos a tiempo. 

Podremos modificar o eliminar las tarifas en cualquier momento con el debido preaviso establecido en la cláusula 2 de estos Términos y Condiciones. De la misma manera, podremos modificar las tarifas temporalmente por promociones en favor de las Personas Usuarias. 

En todos los casos se emitirá la factura de conformidad con los datos fiscales que las personas tengan cargados en su cuenta. 

9- Propiedad Intelectual
RGB-STORE y/o sus sociedades relacionadas son propietarias de todos los derechos de propiedad intelectual sobre sus sitios, todo su contenido, servicios, productos, marcas, nombres comerciales, logos, diseños, imágenes, frases publicitarias, derechos de autor, dominios, programas de computación, códigos, desarrollos, software, bases de datos, información, tecnología, patentes y modelos de utilidad, diseños y modelos industriales, secretos comerciales, entre otros (“Propiedad Intelectual”) y se encuentran protegidos por leyes nacionales e internacionales.

Aunque  RGB-STORE otorga permiso para usar sus productos y servicios conforme a lo previsto en los Términos y Condiciones, esto no implica una autorización para usar su  Propiedad Intelectual, excepto consentimiento previo y expreso de  RGB-STORE y/o sus sociedades vinculadas. En cualquier caso, los usuarios vendedores que usen dichos productos y servicios no podrán utilizar la Propiedad Intelectual de RGB-STORE de una manera que cause confusión en el público y deberán llevar a cabo su actividad comercial bajo una marca o nombre comercial propio y distintivo, que no resulte confundible con la marca  RGB-STORE y su familia de marcas “RGB”.

Está prohibido usar nuestros productos o servicios para fines ilegales, realizar cualquier tipo de ingeniería inversa u obras derivadas, utilizar herramientas de búsqueda o de extracción de datos y contenidos de nuestra plataforma para su reutilización y/o crear bases de datos propias que incluyan en todo o en parte nuestro contenido sin nuestra expresa autorización. Está también prohibido el uso indebido, sin autorización y/o contrario a la normativa vigente y/o que genere confusión o implique uso denigratorio y/o que le cause perjuicio, daños o pérdidas a  RGB-STORE y/o a sus sociedades relacionadas. La utilización de los productos y servicios de  RGB-STORE tampoco implica la autorización para usar propiedad intelectual de terceros que pueda estar involucrada, cuyo uso quedará bajo exclusiva responsabilidad del usuario. 
En caso que una Persona Usuaria o cualquier publicación infrinja la Propiedad Intelectual de  RGB-STORE o de terceros,  RGB-STORE podrá sancionar al usuario conforme a lo previsto en estos Términos y Condiciones y ejercer las acciones extrajudiciales y/o judiciales correspondientes.


10- Indemnidad
La Persona Usuaria mantendrá indemne a  RGB-STORE y sus sociedades relacionadas, así como a quienes la dirigen, suceden, administran, representan y/o trabajan en ellas, por cualquier reclamo administrativo o judicial iniciado por otras Personas Usuarias, terceros o por cualquier Organismo, relacionado con sus actividades en el Ecosistema RGB-STORE.
En virtud de esa responsabilidad, podrán realizar compensaciones, retenciones u otras medidas necesarias para la reparación de pérdidas, daños y perjuicios, cualquiera sea su naturaleza.

11- Jurisdicción y Ley Aplicable
Estos Términos y Condiciones se rigen por la ley argentina. Toda controversia derivada de su aplicación, interpretación, ejecución o validez será resuelta por los tribunales nacionales ordinarios competentes, con asiento en la Ciudad de Buenos Aires, salvo disposición específica de normas de orden público, como por ejemplo, legislación relativa al Consumidor. Para todos los efectos relacionados con estos Términos y Condiciones y con el uso del sitio,  RGB-STORE S.R.L. con CUIT 00-000000-0 establece como domicilio CASA DE NACHO, Ciudad Autónoma de Buenos Aires, Argentina.`);
  const handleChecked = (e) => {
    if (e.target.checked) {
      setTyC(true);
    } else {
      setTyC(false);
    }
  };
  //console.log(Close);
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="lg:h-[40rem] lg:-mt-[40rem] p-6 lg:-m-[25rem] dropdown-toggle lg:w-[520px] overflow-y-scroll   font-Open px-5 bg-secundary-250 text-primary-200 rounded  absolute z-10 md:text-center md:items-center w-full
    sm:h-[25rem] sm:-mt-[20rem]  sm:-ml-[8rem] dropdown-toggle sm:w-[18rem]">
      <div className="flex inline-flex">
        <h1 className="text-3xl">Terms and Conditions</h1>
        <button onClick={(e) => Close(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-6 text-secundary-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ShowLessMore
        text={text}
        threshold={1660}
        expanded={expanded}
        onExpand={setExpanded}
        // classes={{
        //   root: styles.root,
        //   text: styles.text,
        //   clickable: styles.clickable,
        // }}
      />
      <label>Accept Terms and Conditions</label>
      <input
        type="checkbox"
        value=""
        name="check"
        id="check"
        className="ml-2 text-2xl font-medium dark:text-gray-300"
        onChange={handleChecked}
      />
      <br />
    </div>
  );
}
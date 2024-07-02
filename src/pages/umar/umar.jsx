import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Umar = () => {
  const [data, setData] = useState([
    {
      question: 'Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?',
      answer: 'Если вы забыли внести трек-номер на сайт, а заказ уже пришел, вы можете выполнить следующие действия  Проверка статуса заказа: Убедитесь, что заказ действительно прибыл. Это можно сделать, связавшись с почтовым отделением или курьерской службой. Свяжитесь с продавцом: Напишите или позвоните продавцу, у которого вы сделали заказ. Объясните ситуацию и попросите помочь с информацией о трек-номере. Посетите почтовое отделение: Если вы знаете, в какое почтовое отделение должен был прийти ваш заказ, посетите его с документом, удостоверяющим личность, и подтверждением заказа (например, квитанцией или номером заказа). Отследите заказ по имени: Некоторые почтовые службы и курьерские компании могут помочь найти ваш заказ по вашему имени и адресу. Обратитесь в службу поддержки соответствующей компании.Проверка почтового ящика: Иногда уведомление о прибытии посылки может быть оставлено в вашем почтовом ящике. Убедитесь, что вы не пропустили такое уведомление.Отправьте запрос на повторное отправление: Если заказ вернулся к продавцу из-за отсутствия трек-номера, попросите его отправить заказ снова, предоставив всю необходимую информацию на этот раз.Следуя этим шагам, вы сможете найти ваш заказ или получить необходимую помощь для его получения',
      contact: 'https://instagram.com/ymar_tj_44'
    },
    {
      question: 'Как я могу пополнить мой заказ?',
      answer: 'Если вы хотите пополнить мой заказ, следуйте этим шагам:Отправьте запрос на пополнение: Напишите свою заявку на пополнение заказа на сайте. Включите в нее все необходимые данные, такие как номер заказа, адрес доставки, дату доставки, и другую необходимую информацию.Отправьте запрос на пополнение: Напишите свою заявку на пополнение заказа на сайте. Включите в нее все необходимые данные, такие как номер заказа.',
      contact: 'https://instagram.com/ymar_tj_44'
    },
    {
      question: 'Как я могу отказаться от заказа?',
      answer: 'Если вы хотите отказаться от заказа, следуйте этим шагам:Отправьте запрос на отказ: Напишите свою заявку на отказ от заказа на сайте. Включите в нее все необходимые данные, такие как номер заказа, адрес доставки, дату доставки, и другую необходимую информацию.Отправьте запрос на отказ: Напишите свою заявку на отказ от заказа на сайте. Включите в нее все необходимые данные, такие как номер заказа, адрес доставки дату',
      contact: 'https://instagram.com/ymar_tj_44'
    },
    {
      question: 'Как я могу получить консультацию от продавца?',
      answer: 'Если вы хотите получить консультацию от продавца, следуйте этим шагам:Свяжитесь с продавцом: Напишите или позвоните продавцу, у которого вы сделали заказ. Объясните ситуацию и попросите помочь с информацией о трек-номере. Обратитесь в службу поддержки соответствующей компании.Проверка статуса заказа: Убедитесь, что заказ действительно прибыл. Это можно сделать, связав',
      contact: 'https://instagram.com/ymar_tj_44'
    },
    {
      question: 'Как я узнаю что заказ пришел на склад?',
      answer: 'Если вы хотите узнать что заказ пришел на склад, следуйте этим шагам:Отправьте запрос на проверку статуса: Напишите свою заявку на проверку статуса заказа на сайте. Включите в нее все необходимые данные, такие как номер заказ',
      contact: 'https://instagram.com/ymar_tj_44'
    }
  ])


  return (
    <div>
      <header>
        <div className='bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] w-[85%] my-[50px] h-[210px] rounded-[36px] mx-auto'>
          <div className='w-[85%] mx-auto '>
          <p className='pt-[45px] font-[300] text-[#FFFFFF] text-[13px]'>Главная  /  Часто задаваемые вопросы</p>
          <h1 className='font-[800] text-[48px] text-[#FFFFFF] '>Отвечаем на вопросы доставки</h1>
          </div>
        </div>
        <div className='w-[75%] mx-auto h-[180px] shadow-md rounded-[16px] my-[30px]' >
          <div className='w-[90%] mx-auto h-[150px] '>
            <p className='font-[700] text-[14px] pt-[40px]'>
            Поиск в вопросах и ответах:
            </p>
            <p className='font-[300] text-[16px] pt-[20px]'>
            Введите свой вопрос...
            </p>
            <hr className='border-[1px] border-[#222222] mt-[20px]'/>
          </div>
        </div>
      </header>
      <main>
      <section className='w-[85%] mx-auto mt-[100px]'>
      <h1 className='font-[800] text-[44px]'>Виртуальный адрес в Великобритании</h1>

      {data.map((el) => {
        return <div>
          <Accordion className='w-[100%] mx-auto mt-[10px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {el.question}
            </AccordionSummary>
            <AccordionDetails>
              {el.answer}
              <p>
              <a className='text-[#79449f] underline' href={el.contact}>instagram</a>
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      })}
      </section>
      <section className='w-[85%] mx-auto mt-[100px]'>
      <h1 className='font-[800] text-[44px]'>Покупки в магазинаx Англии, скидки и промкода</h1>

      {data.map((el) => {
        return <div>
          <Accordion className='w-[100%] mx-auto mt-[10px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {el.question}
            </AccordionSummary>
            <AccordionDetails>
              {el.answer}
            </AccordionDetails>
          </Accordion>
        </div>
      })}
      </section>
      <section className='w-[85%] mx-auto mt-[100px]'>
      <h1 className='font-[800] text-[44px]'>Доставка из Англии</h1>

      {data.map((el) => {
        return <div>
          <Accordion className='w-[100%] mx-auto mt-[10px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {el.question}
            </AccordionSummary>
            <AccordionDetails>
              {el.answer}
            </AccordionDetails>
          </Accordion>
        </div>
      })}
      </section>
      <section className='w-[85%] mx-auto mt-[100px]'>
      <h1 className='font-[800] text-[44px]'>Общие вопросы</h1>

      {data.map((el) => {
        return <div>
          <Accordion className='w-[100%] mx-auto mt-[10px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {el.question}
            </AccordionSummary>
            <AccordionDetails>
              {el.answer}
            </AccordionDetails>
          </Accordion>
        </div>
      })}
      </section>
<div className='w-[85%] m-auto'>
        <div className='bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] w-[100%] my-[50px] h-[210px] rounded-[36px] mx-auto'>
          <div className='w-[90%] mx-auto flex items-center justify-between'>
          <h1 className='font-[800] text-[35px] text-[#FFFFFF] pt-[70px]'>Остались вопросы? Спросите нас в соцсетях!!!</h1>
          <div className='flex mt-[70px]'>
            <img className='mr-[5px]' src="../../../src/pages/umar/image/Ватсап.svg" alt="" />
            <img className='mr-[5px]' src="../../../src/pages/umar/image/Вайбер.svg" alt="" />
            <img className='mr-[5px]' src="../../../src/pages/umar/image/Чат.svg" alt="" />
          </div>
          </div>
        </div>
        </div>
      </main>
      <div>
      </div>
    </div>
  )
}

export default Umar
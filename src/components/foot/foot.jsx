import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 ">
        <div className="flex justify-around mb-[50px]">
          <div>
            <img src="public/img/layout-img/_2243895274448.svg" alt="OkeyPost" className="mb-[30px]" />
            <div className="flex space-x-4">
              <img src="public/img/layout-img/Соцсети.svg" alt="" />
            </div>
          </div>
          <div className="tracking-tighter leading-loose">
            <h3 className="font-bold mb-2">{t("FooterTranslate.company")}</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.services")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.prices")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.reviews")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.contacts")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.vacancies")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.terms")}
                </a>
              </li>
            </ul>
          </div>
          <div className="tracking-tighter leading-loose">
            <h3 className="font-bold mb-2">{t("FooterTranslate.useful")}</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.howItWorks")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.operator")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.faq")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.popular")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.blacklist")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.sales")}
                </a>
              </li>
            </ul>
          </div>
          <div className="tracking-tighter leading-loose">
            <h3 className="font-bold mb-2">{t("FooterTranslate.projects")}</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.discount")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.regularDiscount")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.referral")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.cashback")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  {t("FooterTranslate.fraud")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="mt-[30px] text-center text-gray-500">
          {t("FooterTranslate.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";

// components
import SecTitle from "../../ui/text/SecTitle";

// hooks
import useAOS from "@/hooks/useAOS";

// icon
import { PiStarFourFill } from "react-icons/pi";

const Contact = () => {
  useAOS();
  return (
    <section
      aria-label="contact"
      className="w-11/12 mx-auto pt-30 pb-16 md:pt-40 md:pb-20 md:w-7/12"
    >
      <SecTitle
        id="contact"
        icon={<PiStarFourFill />}
        jatitle="お問い合わせ"
        entitle="Contact"
      />
      <p data-aos="fade-up" className="main-text mb-10 text-white">
        サービスについてのお問い合わせや会社についてのお問合せなどはこちらからよろしくお願いいたします。
        <br />
        担当者が２営業日以内にご連絡差し上げます。
      </p>
      {/* Form */}
      <form
        data-aos="fade-up"
        method="post"
        action="https://querylift.form.newt.so/v1/dDT-9RuE2"
        className=" w-full mx-auto rounded-lg shadow-md"
      >
        {/* 📝 名前 */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-[var(--primary)] font-semibold mb-2"
          >
            お名前<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            id="name"
            name="name"
            required
            placeholder="山田太郎"
          />
        </div>

        {/* ✉️ メールアドレス */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-[var(--primary)] font-semibold mb-2"
          >
            メールアドレス<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            placeholder="sample@sample.mail"
            required
          />
        </div>

        {/* 💬 メッセージ */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-[var(--primary)] font-semibold mb-2"
          >
            お問い合わせ内容<span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            required
          ></textarea>
        </div>

        {/* 📩 送信ボタン */}
        <button
          type="submit"
          className="w-full bg-[var(--primary)] text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out hover:bg-purple-700 shadow-md hover:shadow-lg"
        >
          送信
        </button>
      </form>
    </section>
  );
};

export default Contact;

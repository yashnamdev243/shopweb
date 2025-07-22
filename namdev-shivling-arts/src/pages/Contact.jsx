// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Input, Button, Form, message } from 'antd';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    localStorage.setItem('contactForm', JSON.stringify(values));
    message.success('Your message has been submitted!');
    form.resetFields();
  };

  return (
    <section className="py-12 px-4 sm:px-16 bg-[#fffdf9]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#b84d1c] mb-6">Contact Us</h2>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item label="Email Address" name="email" rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
              <Input.TextArea rows={4} placeholder="Your message..." />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="bg-[#b84d1c] text-white w-full">
              Submit
            </Button>
          </Form>
        </div>

        {/* Map + Quick Contact */}
        <div className="flex flex-col gap-6">
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.0880179584853!2d75.8700777751961!3d23.456983601391137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396375e91435a0cf%3A0x2fb0d0caaa5c6a21!2sNamdev%20Shivling%20Arts!5e0!3m2!1sen!2sin!4v1710457991606"
            className="w-full h-64 rounded-lg shadow"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="flex gap-4 justify-center">
            <a href="tel:+919876543210">
              <Button icon={<PhoneOutlined />} className="bg-[#b84d1c] text-white">
                Call Us
              </Button>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button icon={<WhatsAppOutlined />} className="bg-green-500 text-white">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

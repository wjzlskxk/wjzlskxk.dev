import {
  Book,
  Code,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  NotebookPen,
  Phone,
  Send,
  User,
} from 'lucide-react'
import React from 'react'
import useContact from '../../hooks/Contact/useContact'
import './style.scss'

const Contact = () => {
  const {
    formData,
    formRef,
    isSubmitting,
    submitted,
    failed,
    handleInputChange,
    handleSubmit,
  } = useContact()

  return (
    <div className='contact-section'>
      <section className='container'>
        <div className='text-block'>
          <h2>CONTACT</h2>
          <div className='divider'></div>
          <p>채용이나 프로젝트 협업 문의를 남겨주시면 감사하겠습니다!</p>
        </div>

        <div className='content-grid'>
          {/* Form Area */}
          <div className='form-area'>
            <div className='form-wrapper'>
              <div className='form-header'>
                <h3>
                  <MessageSquare className='text-pink-300' size={28} />
                  메시지 보내기
                </h3>
                <p>아래 양식을 작성해주시면 24시간 내에 답변드리겠습니다.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className='input-grid'>
                  <div className='input-group'>
                    <label htmlFor='name'>이름 *</label>
                    <div className='input-wrapper'>
                      <User className='icon' size={18} />
                      <input
                        type='text'
                        id='name'
                        name='name'
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='성함을 입력해주세요'
                      />
                    </div>
                  </div>

                  <div className='input-group'>
                    <label htmlFor='email'>이메일 *</label>
                    <div className='input-wrapper'>
                      <Mail className='icon' size={18} />
                      <input
                        type='email'
                        id='email'
                        name='email'
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='your.email@example.com'
                      />
                    </div>
                  </div>
                </div>

                <div className='input-group'>
                  <label htmlFor='title'>제목 *</label>
                  <div className='input-wrapper'>
                    <Book className='icon' size={18} />
                    <input
                      type='text'
                      id='title'
                      name='title'
                      required
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder='어떤 내용인가요?'
                    />
                  </div>
                </div>

                <div className='input-group'>
                  <label htmlFor='message'>메시지 *</label>
                  <div className='input-wrapper'>
                    <MessageSquare
                      className='icon'
                      size={18}
                      style={{ top: '15%' }}
                    />
                    <textarea
                      id='message'
                      name='message'
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder='프로젝트에 대해 자세히 알려주세요...'
                    />
                  </div>
                </div>

                <button type='submit' disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className='spinner' />
                  ) : (
                    <Send size={18} />
                  )}
                  {isSubmitting ? '전송 중...' : '메시지 보내기'}
                </button>

                {submitted && (
                  <div className='success-message'>
                    메시지를 보내주셔서 감사합니다! 곧 연락드리겠습니다.
                  </div>
                )}

                {failed === true && (
                  <div className='failed-message'>
                    오류가 발생했습니다. 다시 시도해주세요.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className='sidebar'>
            <div className='info-card'>
              <h3>연락처 정보</h3>
              <div className='info-item'>
                <div className='icon-box pink'>
                  <Mail size={18} />
                </div>
                <div>
                  <p className='label'>비즈니스 이메일</p>
                  <p className='value'>chan2bo2dev@gmail.com</p>
                </div>
              </div>

              <div className='info-item'>
                <div className='icon-box pink'>
                  <Mail size={18} />
                </div>
                <div>
                  <p className='label'>개인 이메일</p>
                  <p className='value'>chan2bo2@naver.com</p>
                </div>
              </div>

              <div className='info-item'>
                <div className='icon-box pink'>
                  <Phone size={18} />
                </div>
                <div>
                  <p className='label'>전화번호</p>
                  <p className='value'>+82 10-3762-3087</p>
                </div>
              </div>

              <div className='info-item'>
                <div className='icon-box pink'>
                  <MapPin size={18} />
                </div>
                <div>
                  <p className='label'>위치</p>
                  <p className='value'>대구, 대한민국</p>
                </div>
              </div>
            </div>

            <div className='info-card'>
              <h3>전문 분야</h3>
              <div className='info-item'>
                <Code className='text-pink' size={20} />
                <span className='value'>React & TypeScript (Frontend)</span>
              </div>
            </div>

            <div className='info-card'>
              <h3>소셜 미디어</h3>
              <a
                className='social-link'
                href='https://github.com/wjzlskxk'
                target='_blank'
              >
                <div className='icon-box gray'>
                  <Github size={18} />
                </div>
                GitHub
              </a>
              <a
                className='social-link'
                href='https://linkedin.com'
                target='_blank'
              >
                <div className='icon-box blue'>
                  <Linkedin size={18} />
                </div>
                LinkedIn
              </a>
              <a
                className='social-link'
                href='https://velog.io/@wjzlskxk/posts'
                target='_blank'
              >
                <div className='icon-box sky'>
                  <NotebookPen size={18} />
                </div>
                Velog
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

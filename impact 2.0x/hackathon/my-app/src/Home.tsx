import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate();

	const handleMigraineDetection = () => {
		navigate('/bookappointment');
	}

  return (
    <>
    <section id="about" className="about">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>Understand Migraine<span></span>  <br /> Conquer Migraine <br /> with MigraineZ<span>.</span>   </h2>
							<p>A complete Migraine Management Solution</p>
						</div>
					</div>
				</div>
			</div>
    </section>

    <section id="one-on-one" className="one-on-one">
    <div className="section-heading text-center">
        <h2>Consult Doctor</h2>
    </div>
    <div className="container">
        <div className="about-content">
            <div className="row">
                <div className="col-sm-6">
                    <div className="single-about-txt">
                        <h3>
                            If you have health concerns or need expert medical advice, please reach out to us. Our team of experienced doctors is ready to assist you with personalized consultations and confidential support.
                        </h3>
                        <p>
                            MigraineZ is all in one solution for all queries related to Migraine powered with Cutting Edge Deep Learning Algorithm.
                        </p>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="single-about-add-info">
                                    <h3>Phone</h3>
                                    <p>9133751494</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="single-about-add-info">
                                    <h3>Email</h3>
                                    <p>sa4612@srmist.edu.in</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="single-about-add-info">
                                    <h3>Website</h3>
                                    <p>www.MigraineZ.com</p>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleMigraineDetection} data-toggle="modal" data-target="#appointmentModal">
                            Book 1-to-1 Appointment
                        </button>
                    </div>
                </div>
                <div className="col-sm-offset-1 col-sm-5">
                    <div className="single-about-img">
                        <img src="../public/old.jpg" alt="profile_image" />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    
    <section className="migraine-checker">
      <div className="section-heading text-center" style={{marginBottom: "40px"}}>
        <h2 style={{fontSize: "36px", color: "#333333"}}>Migraine Checker</h2>
    </div>
    <div className="container text-center">
        <p style={{fontSize: "18px", color: "#555", marginBottom: "30px"}}>
            Check out our latest Deep Learning Algorithm to Check Migraine.
        </p>
        <Link 
        to="/detectmigraine" 
        className="btn btn-primary btn-lg" 
        style={{
            backgroundColor: "#007bff", 
            border: "none", 
            padding: "15px 30px", 
            fontSize: "18px", 
            color: "#fff", 
            textTransform: "uppercase", 
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
        }}
    >
        Fill Out the Form
    </Link>
    </div>
    </section>

    
    <section id="education-content" className="skills">
    <div className="skill-content">
        <div className="section-heading text-center">
            <h2>education content</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="video-wrapper">
                        <div className="embed-responsive embed-responsive-16by9 rounded border">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/oBvGbn1MuPU" allowFullScreen style={{display: "block", margin: "0 auto", border: "1px solid #ccc" }}></iframe>
                        </div>
                        <h3 className="mt-2 mb-3 text-center" style={{marginBottom: "20px"}}>Understanding Migraines - Causes and Symptoms</h3>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="video-wrapper">
                        <div className="embed-responsive embed-responsive-16by9 rounded border">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/RJeqcikMKAI" allowFullScreen style={{display: "block", margin: "0 auto", border: "1px solid #ccc" }}></iframe>
                        </div>
                        <h3 className="mt-2 mb-3 text-center" style={{marginBottom: "20px"}}>Migraine Triggers and How To Avoid Them</h3>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="video-wrapper">
                        <div className="embed-responsive embed-responsive-16by9 rounded border">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/RJeqcikMKAI" allowFullScreen style={{display: "block", margin: "0 auto", border: "1px solid #ccc" }}></iframe>
                        </div>
                        <h3 className="mt-2 mb-3 text-center" style={{marginBottom: "20px"}}>Effective Treatments for Migraine Relief</h3>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="video-wrapper">
                        <div className="embed-responsive embed-responsive-16by9 rounded border">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/8819ORRSMts" allowFullScreen style={{ display: "block", margin: "0 auto", border: "1px solid #ccc" }}></iframe>
                        </div>
                        <h3 className="mt-2 mb-3 text-center" style={{marginBottom: "20px"}}>Living with Migraines: Tips and Strategies</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    
<section id="articles" className="blogs-articles">
	<div className="section-heading text-center">
		<h2>Blogs & Articles</h2>
	</div>
	<div className="container">
		<div className="blogs-articles-content">
			<div className="row">
				<div className="col-md-4 mb-4">
					<div className="blog-article-box">
						<div className="blog-article-image" style={{height: "200px", overflow: "hidden"}}>
							<img src="../public/blogone.jpg" alt="Blog 1" className="img-fluid rounded" style={{width: "100%", height: "auto"}} />
						</div>
						<div className="blog-article-info">
							<h3 className="title" style={{fontSize: "1.5rem", fontWeight: "bold", color: "#333"}}>My migraine journey</h3>
							<p className="date" style={{fontSize: "0.9rem", color: "#666"}}>Published on 25th September 2023</p>
							<p className="description" style={{fontSize: "1rem", color: "#555", height: "150px", overflow: "hidden"}}>
								"My migraine journey has been a rollercoaster of intense pain, frustration, and discovery. What started as a 'typical' migraine quickly escalated into chronic and debilitating episodes, with symptoms like head pain, nausea, and severe disequilibrium. The lack of understanding and effective treatment left me feeling dismissed and alone. However, through perseverance, private healthcare, and exploring alternative therapies, I eventually found relief. Ajovy reduced my head pain, and Vestibular Rehabilitation Therapy helped me regain balance. Today, I've moved from chronic to episodic migraines and am living a much more fulfilling life. My experiences have taught me the importance of prioritizing health and advocating for better migraine awareness and treatment
							</p>
							<div className="button-container" style={{display: "flex", justifyContent: "center", gap: "10px"}}/>
								<a href="https://migrainetrust.org/news/my-migraine-journey/" className="btn btn-primary" style={{backgroundColor: "#007bff", borderColor: "#007bff", color: "#fff", padding: "10px 20px", borderRadius: "5px", textDecoration: "none", display: "inline-block"}}>Read More</a>
							</div>
						</div>
					</div>

        <div className="col-md-4 mb-4">
					<div className="blog-article-box">
						<div className="blog-article-image" style={{height: "200px", overflow: "hidden"}}>
							<img src="../public/blogtwo.jpg" alt="Blog 1" className="img-fluid rounded" style={{width: "100%", height: "auto"}} />
						</div>
						<div className="blog-article-info">
							<h3 className="title" style={{fontSize: "1.5rem", fontWeight: "bold", color: "#333"}}>I’m a medical student living with migraine</h3>
							<p className="date" style={{fontSize: "0.9rem", color: "#666"}}>Published on 22nd August 2024</p>
							<p className="description" style={{fontSize: "1rem", color: "#555", height: "150px", overflow: "hidden"}}>
								"As a medical student and future GP, my personal journey with migraine has profoundly shaped my perspective on healthcare. My migraine symptoms began during the Covid-19 lockdowns, initially dismissed as stress by my GP. Persistent headaches led me to keep a detailed diary, ultimately resulting in a proper diagnosis and effective treatment plan. My experiences with migraine have shown me firsthand the impact of inadequate care and the importance of truly
							</p>
							<div className="button-container" style={{display: "flex", justifyContent: "center", gap: "10px"}}/>
								<a href="https://migrainetrust.org/news/my-migraine-journey/" className="btn btn-primary" style={{backgroundColor: "#007bff", borderColor: "#007bff", color: "#fff", padding: "10px 20px", borderRadius: "5px", textDecoration: "none", display: "inline-block"}}>Read More</a>
							</div>
						</div>
					</div>
        <div className="col-md-4 mb-4">
					<div className="blog-article-box">
						<div className="blog-article-image" style={{height: "200px", overflow: "hidden"}}>
							<img src="../public/blogthree.jpg" alt="Blog 1" className="img-fluid rounded" style={{width: "100%", height: "auto"}} />
						</div>
						<div className="blog-article-info">
							<h3 className="title" style={{fontSize: "1.5rem", fontWeight: "bold", color: "#333"}}>Sarah Dutcher's Journey to Effective Migraine Care</h3>
							<p className="date" style={{fontSize: "0.9rem", color: "#666"}}>Published on 22nd August 2024</p>
							<p className="description" style={{fontSize: "1rem", color: "#555", height: "150px", overflow: "hidden"}}>
								"Sarah Dutcher's migraine journey began in April 2015 with a disorienting and intense attack that left her feeling overwhelmed. After struggling with persistent pain and ineffective treatments, she was referred to the CentraCare Neuroscience Headache Center. There, Dr. Leah Thronaum's comprehensive and holistic approach made a significant difference. Dr. Thronaum's innovative treatment plan, including targeted Botox injections and a combination of medications, acupuncture, and massage therapy, helped Sarah find relief. Sarah appreciated the personalized care and the supportive team that helped her manage her migraines.
                </p>
							<div className="button-container" style={{display: "flex", justifyContent: "center", gap: "10px"}}/>
								<a href="https://migrainetrust.org/news/my-migraine-journey/" className="btn btn-primary" style={{backgroundColor: "#007bff", borderColor: "#007bff", color: "#fff", padding: "10px 20px", borderRadius: "5px", textDecoration: "none", display: "inline-block"}}>Read More</a>
							</div>
						</div>
					</div>
				
			</div>
		</div>
	</div>
</section>

<section id="community-support" className="profiles" style={{padding: "60px 0"}}>
    <div className="profiles-details">
        <div className="section-heading text-center">
            <h2 style={{marginBottom: "40px", fontSize: "36px", fontWeight: "700"}}>community support</h2>
        </div>
        <div className="container">
            <div className="profiles-content" style={{margin: "0 -15px"}}>
                <div className="row">

                    <div className="col-sm-3" style={{padding: "0 15px"}}>
                        <div className="single-profile">
                            <a href="https://migrainetrust.org/" target="_blank" style={{display: "block"}}>
                                <img src="../public/themigraninetrust.jpg" alt="Migrainetrust" style={{width: "100%", height: "auto"}} />
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-3" style={{padding: "0 15px"}}>
                        <div className="single-profile">
                            <a href="https://migraine.com/" target="_blank" style={{display: "block"}}>
                                <img src="../public/migrainecom.jpg" alt="Migraine.com" style={{width: "100%", height: "auto"}} />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{padding: "0 15px"}}>
                        <div className="single-profile">
                            <a href="https://www.reddit.com/r/migraine/" target="_blank" style={{display: "block"}}>
                                <img src="../public/reddit.jpg" alt="Reddit" style={{width: "100%", height: "auto"}} />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{padding: "0 15px"}}>
                        <div className="single-profile">
                            <a href="https://www.facebook.com/groups/migrainewarriors/" target="_blank" style={{display: "block"}}>
                                <img src="../public/migrainewarrior.jpg" alt="Migraine Warriors" style={{width: "100%", height: "auto"}} />
                            </a>
                        </div>
                    </div>

                    
                <div className="profile-border" style={{margin: "40px 0", borderTop: "1px solid #ddd"}}></div>
                </div>
                <div className="row">

                <div className="col-sm-3" style={{padding: "0 15px"}}>
                        <div className="single-profile">
                            <a href="https://www.facebook.com/groups/chronicmigraine/" target="_blank" style={{display: "block"}}>
                                <img src="../public/facebook.jpg" alt="Chronic Migraine" style={{width: "100%", height: "auto"}} />
                            </a>
                        </div>
                </div>

                <div className="col-sm-3" style={{padding: "0 15px"}}>
                        <div className="single-profile">
                            <a href="https://americanmigrainefoundation.org/" target="_blank" style={{display: "block"}}>
                                <img src="../public/american_migraine_foundation.jpg" alt="American Migraine Foundation" style={{width: "100%", height: "auto"}} />
                            </a>
                        </div>
                </div>
                <div className="col-sm-3" style={{padding: "0 15px"}}>
                        <div className="single-profile">
                            <a href="https://healthunlocked.com/" target="_blank" style={{display: "block"}}>
                                <img src="../public/healthunlocked.jpg" alt="HealthUnlocked" style={{width: "100%", height: "auto"}} />
                            </a>
                        </div>
                </div>
                <div className="col-sm-3" style={{padding: "0 15px"}}>
                        <div className="single-profile">
                            <a href="https://www.migraineaction.com/" target="_blank" style={{display: "block"}}>
                                <img src="../public/migraineaction.jpg" alt="Migraine Buddy" style={{width: "100%", height: "auto"}} />
                            </a>
                        </div>
                </div>


                </div>
            </div>
        </div>
    </div>
</section>


<section id="treatment" className="portfolio">
			<div className="portfolio-details">
				<div className="section-heading text-center">
					<h2>Treatment Options</h2>
				</div>
				<div className="container">
					<div className="portfolio-content">
						<div className="isotope">
							<div className="row">

								<div className="col-sm-4">
									<div className="item">
										<img src="../public/medication.jpg" alt="portfolio image"/>
										<div className="isotope-overlay">
											<a href="#">
												medication
											</a>
										</div>
									</div>
									<div className="item">
										<img src="../public/lifestyle.jpg" alt="portfolio image"/>
										<div className="isotope-overlay">
											<a href="#">
												Lifestyle Changes
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4">
									<div className="item">
										<img src="../public/personal.jpg" alt="portfolio image"/>
										<div className="isotope-overlay">
											<a href="#">
												Complementary Approaches
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4">
									<div className="item">
										<img src="../public/therpy.jpg" alt="portfolio image"/>
										<div className="isotope-overlay">
											<a href="#">
												Alternative Therapies
											</a>
										</div>
									</div>
									<div className="item">
										<img src="../public/devices.jpg" alt="portfolio image"/>
										<div className="isotope-overlay">
											<a href="#">
												medical devices
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>


        <section id="contact-us" className="contact">
			<div className="section-heading text-center">
				<h2>Contact Information</h2>
			</div>
			<div className="container">
				<div className="contact-content">
					<div className="row">
						<div className="col-md-3 col-sm-12">
							<div className="single-contact-box">
								<div className="contact-address">
									<div className="contact-add-head">
										<h3>Sahil Ali Akbar</h3>
										<p>B.Tech CSE AMIL</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>Phone</h3>
											<p>9133751494</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Email</h3>
											<p><a href="mailto:sa4612@srmist.edu.in">sa4612@srmist.edu.in</a></p>
										</div>
										<div className="single-contact-add-info">
											<h3>Registration Number</h3>
											<p>RA2211026010057</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Department</h3>
											<p>CINTEL</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 col-sm-12">
							<div className="single-contact-box">
								<div className="contact-address">
									<div className="contact-add-head">
										<h3>Amarnath Kolla</h3>
										<p>B.Tech CSE CC</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>Phone</h3>
											<p>9030388269</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Email</h3>
											<p><a href="mailto:ak4909@srmist.edu.in">ak4909@srmist.edu.in</a></p>
										</div>
										<div className="single-contact-add-info">
											<h3>Registration Number</h3>
											<p>RA2211028010157</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Department</h3>
											<p>NWC</p>
										</div>
									</div>
								</div>
							</div>
						</div>
		
						<div className="col-md-3 col-sm-12">
							<div className="single-contact-box">
								<div className="contact-address">
									<div className="contact-add-head">
										<h3>J Abhiram Varma</h3>
										<p>B.Tech CSE CC</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>Phone</h3>
											<p>8317689145</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Email</h3>
											<p><a href="mailto:aj0232@srmist.edu.in">aj0232@srmist.edu.in</a></p>
										</div>
										<div className="single-contact-add-info">
											<h3>Registration Number</h3>
											<p>RA2211028010174</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Department</h3>
											<p>NWC</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 col-sm-12">
							<div className="single-contact-box">
								<div className="contact-address">
									<div className="contact-add-head">
										<h3>Deepshikha Shakshi</h3>
										<p>MTech Integ CSE Cog Comp</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>Phone</h3>
											<p>7877395130</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Email</h3>
											<p><a href="mailto:ds8182@srmist.edu.in">ds8182@srmist.edu.in</a></p>
										</div>
										<div className="single-contact-add-info">
											<h3>Registration Number</h3>
											<p>RA2212702010034</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Department</h3>
											<p>CINTEL</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-12">
							<div className="single-contact-box">
								<div className="contact-address">
									<div className="contact-add-head">
										<h3>Akshada Kashyap</h3>
										<p>BTech CSE</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>Phone</h3>
											<p>8056032332</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Email</h3>
											<p><a href="mailto:hk2762@srmist.edu.in">hk2762@srmist.edu.in</a></p>
										</div>
										<div className="single-contact-add-info">
											<h3>Registration Number</h3>
											<p>RA2211003011777</p>
										</div>
										<div className="single-contact-add-info">
											<h3>Department</h3>
											<p>CTECH</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Home;
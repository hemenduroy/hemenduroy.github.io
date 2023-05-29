import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // import the styles
import ARUBACompanyLogo from '../../Assets/Work/ARUBA_Company_logo.jpeg';
import ASUCompanyLogo from '../../Assets/Work/ASU_Company_logo.jpeg';
import AXONCompanyLogo from '../../Assets/Work/AXON_Company_logo.jpeg';


function WorkExperience() {
  return (
    <VerticalTimeline>

    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2023 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<img src={AXONCompanyLogo} alt="AXON Company Logo" style={{ width: '100%', height: '100%', transform: 'scale(1.2)', transformOrigin: 'center'}} />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Axon</h4>
        <h5 className="vertical-timeline-element-subtitle">Scottsdale, Arizona</h5>
        <p>
          Developing software for the Axon Evidence platform. 
          Axon Evidence is the premier Digital Evidence Management System (DEMS) for law enforcement. 
          It provides a secure, centralized, cloud-based solution for storing, managing, investigating, and sharing digital evidence.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2022 - August 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<img src={AXONCompanyLogo} alt="AXON Company Logo" style={{ width: '100%', height: '100%', transform: 'scale(1.2)', transformOrigin: 'center'}} />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Axon</h4>
        <h5 className="vertical-timeline-element-subtitle">Scottsdale, Arizona</h5>
        <p>
          Developing software for the Axon Air team to employ drones for public safety. 
Responsible for web development using Typescript React, mobile development using Kotlin and Swift and backend development using Go and C.
        </p>
      </VerticalTimelineElement>

      {/* Add more VerticalTimelineElement for each of your work experiences */}

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="October 2021 - May 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<img src={ASUCompanyLogo} alt="ASU Company Logo" style={{ width: '100%', height: '100%', transform: 'scale(1.2)', transformOrigin: 'center'}} />}
      >
        <h3 className="vertical-timeline-element-title">Graduate Research Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">Arizona State University</h4>
        <h5 className="vertical-timeline-element-subtitle">Tempe, Arizona</h5>
        <p>
          Integrating Open Source 5G implementations such as free5gmano, free5gc and UERANSIM together and subsequently scanning for security vulnerabilities.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September 2019 - May 2021"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<img src={ARUBACompanyLogo} alt="ARUBA Company Logo" style={{ width: '100%', height: '100%', transform: 'scale(1.2)', transformOrigin: 'center'}} />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Aruba, a Hewlett Packard Enterprise company</h4>
        <h5 className="vertical-timeline-element-subtitle">Bangalore, India</h5>
        <p>
          As a member of the NetInsight (AI Insights team), I was responsible for development, automation and debugging.<br />
            ● Aided in the development of predictive Network Insights by consuming live telemetry data from millions of Access Points.<br />
            ● Developed scripts for Test Automation, Application Deployment and Data analysis using Spark and Python.<br />
            ● Recognized with three “Aruba Recognition Awards” for outstanding performance
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2019 - August 2019"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<img src={ARUBACompanyLogo} alt="ARUBA Company Logo" style={{ width: '100%', height: '100%', transform: 'scale(1.2)', transformOrigin: 'center'}} />}

      >
        <h3 className="vertical-timeline-element-title">Cloud Engineer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Aruba, a Hewlett Packard Enterprise company</h4>
        <h5 className="vertical-timeline-element-subtitle">Bangalore, India</h5>
        <p>
          Working with Oozie jobs running on Hadoop clusters, aggregating wifi analytics data streamed through Kafka and generating user insights.
        </p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  );
}

export default WorkExperience;

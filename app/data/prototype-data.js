window.PROTOTYPE_DATA = {
  "generated_at": "2026-03-12T17:42:22.169657+00:00",
  "prototype_scope": {
    "degree_count": 29,
    "profession_count": 31,
    "path_count": 38,
    "skill_count": 44
  },
  "notes": [
    "This prototype is student-facing by design: it mixes official labor datasets with a clear lifestyle overlay.",
    "Tradeoffs like hours, hub dependence, AI exposure, and boundary quality are meant to make the life implications explicit.",
    "Where public datasets do not express a student-facing concept directly, the prototype uses conservative manual judgment and labels it as an overlay."
  ],
  "profile_schema": {
    "journeys": [
      {
        "journey_id": "lifestyle_first",
        "label": "Start with the life you want",
        "description": "Choose the lifestyle and work pattern you want, then see the education routes that make it plausible."
      },
      {
        "journey_id": "education_first",
        "label": "Start with what fits you",
        "description": "Begin from your likely fit, grades, cost tolerance, and strengths, then explore the downstream careers."
      }
    ],
    "academic_profiles": [
      {
        "value": "open",
        "label": "Open",
        "rank": 1
      },
      {
        "value": "accessible",
        "label": "Accessible",
        "rank": 2
      },
      {
        "value": "solid",
        "label": "Solid",
        "rank": 3
      },
      {
        "value": "strong",
        "label": "Strong",
        "rank": 4
      },
      {
        "value": "elite",
        "label": "Elite",
        "rank": 5
      }
    ],
    "budget_levels": [
      {
        "value": "low",
        "label": "Low",
        "rank": 1
      },
      {
        "value": "medium",
        "label": "Medium",
        "rank": 2
      },
      {
        "value": "high",
        "label": "High",
        "rank": 3
      }
    ],
    "training_limits_years": [
      {
        "value": 1,
        "label": "Up to 1 year"
      },
      {
        "value": 2,
        "label": "Up to 2 years"
      },
      {
        "value": 4,
        "label": "Up to 4 years"
      },
      {
        "value": 6,
        "label": "Up to 6 years"
      },
      {
        "value": 10,
        "label": "Up to 10 years"
      }
    ],
    "strengths": [
      {
        "strength_id": "analytical",
        "label": "Analytical"
      },
      {
        "strength_id": "creative",
        "label": "Creative"
      },
      {
        "strength_id": "people",
        "label": "People-focused"
      },
      {
        "strength_id": "hands_on",
        "label": "Hands-on"
      }
    ]
  },
  "sources": [
    {
      "source_id": "source:cip:crosswalk",
      "label": "2020 CIP to O*NET-SOC crosswalk",
      "url": "https://www.onetcenter.org/crosswalks.html",
      "source_type": "dataset",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
    },
    {
      "source_id": "source:degree-field:accounting_bachelors",
      "label": "Accounting field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:biology_bachelors",
      "label": "Biology field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/biology/biology-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:carpentry_apprenticeship",
      "label": "Carpentry Apprenticeship field evidence",
      "url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:degree-field:civil_engineering_bachelors",
      "label": "Civil Engineering field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:communications_bachelors",
      "label": "Communications field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/communications/communications-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:construction_management_bachelors",
      "label": "Construction Management field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/construction/construction-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:cs_bachelors",
      "label": "Computer Science field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:cybersecurity_bachelors",
      "label": "Cybersecurity field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:dental_hygiene_associate",
      "label": "Dental Hygiene field evidence",
      "url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:degree-field:economics_bachelors",
      "label": "Economics field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/social-science/social-science-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:electrician_apprenticeship",
      "label": "Electrician Apprenticeship field evidence",
      "url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:degree-field:finance_bachelors",
      "label": "Finance field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:graphic_design_bachelors",
      "label": "Graphic Design field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/fine-arts/fine-arts-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:healthcare_admin_bachelors",
      "label": "Healthcare Administration field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:hvac_certificate",
      "label": "HVAC Technology field evidence",
      "url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:degree-field:marketing_bachelors",
      "label": "Marketing field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:mechanical_engineering_bachelors",
      "label": "Mechanical Engineering field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:mis_bachelors",
      "label": "Management Information Systems field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:nursing_bachelors",
      "label": "Registered Nursing field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:paralegal_associate",
      "label": "Paralegal Studies field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/law-and-legal-studies/law-and-legal-studies-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:plumbing_apprenticeship",
      "label": "Plumbing Apprenticeship field evidence",
      "url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:degree-field:psychology_bachelors",
      "label": "Psychology field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/psychology/psychology-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:radiologic_technology_associate",
      "label": "Radiologic Technology field evidence",
      "url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:degree-field:respiratory_therapy_associate",
      "label": "Respiratory Therapy field evidence",
      "url": "https://www.bls.gov/ooh/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:secondary_education_bachelors",
      "label": "Secondary Education field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/education/education-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:social_work_bachelors",
      "label": "Social Work field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/public-policy-and-social-services/public-policy-and-social-services-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:tile_setting_certificate",
      "label": "Tile Setting Certificate field evidence",
      "url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:degree-field:ux_design_bachelors",
      "label": "Web and Digital Experience Design field evidence",
      "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Field-of-degree context comes from official BLS field-of-degree pages."
    },
    {
      "source_id": "source:degree-field:welding_certificate",
      "label": "Welding Technology field evidence",
      "url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
      "source_type": "field_of_degree",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:onet:accountant",
      "label": "Accountants and Auditors O*NET profile",
      "url": "https://www.onetonline.org/link/summary/13-2011.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:biological_technician",
      "label": "Biological Technicians O*NET profile",
      "url": "https://www.onetonline.org/link/summary/19-4021.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:carpenter",
      "label": "Carpenters O*NET profile",
      "url": "https://www.onetonline.org/link/summary/47-2031.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:civil_engineer",
      "label": "Civil Engineers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/17-2051.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:computer_systems_analyst",
      "label": "Computer Systems Analysts O*NET profile",
      "url": "https://www.onetonline.org/link/summary/15-1211.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:construction_manager",
      "label": "Construction Managers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/11-9021.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:data_scientist",
      "label": "Data Scientists O*NET profile",
      "url": "https://www.onetonline.org/link/summary/15-2051.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:dental_hygienist",
      "label": "Dental Hygienists O*NET profile",
      "url": "https://www.onetonline.org/link/summary/29-1292.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:economist",
      "label": "Economists O*NET profile",
      "url": "https://www.onetonline.org/link/summary/19-3011.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:electrician",
      "label": "Electricians O*NET profile",
      "url": "https://www.onetonline.org/link/summary/47-2111.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:financial_analyst",
      "label": "Financial and Investment Analysts O*NET profile",
      "url": "https://www.onetonline.org/link/summary/13-2051.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:graphic_designer",
      "label": "Graphic Designers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/27-1024.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:high_school_teacher",
      "label": "High School Teachers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/25-2031.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:hvac_technician",
      "label": "HVAC Technicians O*NET profile",
      "url": "https://www.onetonline.org/link/summary/49-9021.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:information_security_analyst",
      "label": "Information Security Analysts O*NET profile",
      "url": "https://www.onetonline.org/link/summary/15-1212.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:management_analyst",
      "label": "Management Analysts O*NET profile",
      "url": "https://www.onetonline.org/link/summary/13-1111.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:market_research_analyst",
      "label": "Market Research Analysts O*NET profile",
      "url": "https://www.onetonline.org/link/summary/13-1161.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:mechanical_engineer",
      "label": "Mechanical Engineers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/17-2141.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:medical_health_services_manager",
      "label": "Medical and Health Services Managers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/11-9111.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:paralegal",
      "label": "Paralegals and Legal Assistants O*NET profile",
      "url": "https://www.onetonline.org/link/summary/23-2011.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:physician",
      "label": "Physicians and Surgeons O*NET profile",
      "url": "https://www.onetonline.org/link/summary/29-1218.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:plumber",
      "label": "Plumbers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/47-2152.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:public_relations_specialist",
      "label": "Public Relations Specialists O*NET profile",
      "url": "https://www.onetonline.org/link/summary/27-3031.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:radiologic_technologist",
      "label": "Radiologic Technologists O*NET profile",
      "url": "https://www.onetonline.org/link/summary/29-2034.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:registered_nurse",
      "label": "Registered Nurses O*NET profile",
      "url": "https://www.onetonline.org/link/summary/29-1141.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:release",
      "label": "O*NET 30.2 database",
      "url": "https://www.onetcenter.org/database.html",
      "source_type": "dataset",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:respiratory_therapist",
      "label": "Respiratory Therapists O*NET profile",
      "url": "https://www.onetonline.org/link/summary/29-1126.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:social_worker",
      "label": "Social Workers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/21-1021.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:software_developer",
      "label": "Software Developers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/15-1252.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:tile_stone_setter",
      "label": "Tile and Stone Setters O*NET profile",
      "url": "https://www.onetonline.org/link/summary/47-2044.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:web_digital_interface_designer",
      "label": "Web and Digital Interface Designers O*NET profile",
      "url": "https://www.onetonline.org/link/summary/15-1255.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:onet:welder",
      "label": "Welder O*NET profile",
      "url": "https://www.onetonline.org/link/summary/51-4121.00",
      "source_type": "occupation_profile",
      "publisher": "O*NET / U.S. Department of Labor",
      "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
    },
    {
      "source_id": "source:ooh:accountant",
      "label": "Accountants and Auditors OOH page",
      "url": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:biological_technician",
      "label": "Biological Technicians OOH page",
      "url": "https://www.bls.gov/ooh/life-physical-and-social-science/biological-technicians.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:carpenter",
      "label": "Carpenters OOH page",
      "url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:civil_engineer",
      "label": "Civil Engineers OOH page",
      "url": "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:computer_systems_analyst",
      "label": "Computer Systems Analysts OOH page",
      "url": "https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:construction_manager",
      "label": "Construction Managers OOH page",
      "url": "https://www.bls.gov/ooh/management/construction-managers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:data_scientist",
      "label": "Data Scientists OOH page",
      "url": "https://www.bls.gov/ooh/math/data-scientists.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:dental_hygienist",
      "label": "Dental Hygienists OOH page",
      "url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:economist",
      "label": "Economists OOH page",
      "url": "https://www.bls.gov/ooh/life-physical-and-social-science/economists.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:electrician",
      "label": "Electricians OOH page",
      "url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:financial_analyst",
      "label": "Financial and Investment Analysts OOH page",
      "url": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:graphic_designer",
      "label": "Graphic Designers OOH page",
      "url": "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:high_school_teacher",
      "label": "High School Teachers OOH page",
      "url": "https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:hvac_technician",
      "label": "HVAC Technicians OOH page",
      "url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:information_security_analyst",
      "label": "Information Security Analysts OOH page",
      "url": "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:management_analyst",
      "label": "Management Analysts OOH page",
      "url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:market_research_analyst",
      "label": "Market Research Analysts OOH page",
      "url": "https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:mechanical_engineer",
      "label": "Mechanical Engineers OOH page",
      "url": "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:medical_health_services_manager",
      "label": "Medical and Health Services Managers OOH page",
      "url": "https://www.bls.gov/ooh/management/medical-and-health-services-managers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:paralegal",
      "label": "Paralegals and Legal Assistants OOH page",
      "url": "https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:physician",
      "label": "Physicians and Surgeons OOH page",
      "url": "https://www.bls.gov/ooh/healthcare/physicians-and-surgeons.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:plumber",
      "label": "Plumbers OOH page",
      "url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:public_relations_specialist",
      "label": "Public Relations Specialists OOH page",
      "url": "https://www.bls.gov/ooh/media-and-communication/public-relations-specialists.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:radiologic_technologist",
      "label": "Radiologic Technologists OOH page",
      "url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:registered_nurse",
      "label": "Registered Nurses OOH page",
      "url": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:respiratory_therapist",
      "label": "Respiratory Therapists OOH page",
      "url": "https://www.bls.gov/ooh/healthcare/respiratory-therapists.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:social_worker",
      "label": "Social Workers OOH page",
      "url": "https://www.bls.gov/ooh/community-and-social-service/social-workers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:software_developer",
      "label": "Software Developers OOH page",
      "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:tile_stone_setter",
      "label": "Tile and Stone Setters OOH page",
      "url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:web_digital_interface_designer",
      "label": "Web and Digital Interface Designers OOH page",
      "url": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:ooh:welder",
      "label": "Welder OOH page",
      "url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
      "source_type": "occupation_outlook",
      "publisher": "BLS",
      "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
    },
    {
      "source_id": "source:overlay:heuristics",
      "label": "Student-facing lifestyle overlay",
      "url": "",
      "source_type": "heuristic_overlay",
      "publisher": "Education Outcome Map prototype",
      "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
    }
  ],
  "lifestyle_tiers": [
    {
      "lifestyle_tier_id": "simple",
      "lifestyle_tier_name": "Simple",
      "base_required_income_usd": "45000",
      "description": "Modest spending, lower luxury expectations, stability and free time matter"
    },
    {
      "lifestyle_tier_id": "comfortable",
      "lifestyle_tier_name": "Comfortable",
      "base_required_income_usd": "80000",
      "description": "Reasonable comfort, some travel and flexibility, room to save"
    },
    {
      "lifestyle_tier_id": "premium",
      "lifestyle_tier_name": "Premium",
      "base_required_income_usd": "150000",
      "description": "High discretionary spend, premium housing and lifestyle expectations"
    }
  ],
  "city_cost_tiers": [
    {
      "city_cost_tier_id": "low_cost",
      "city_cost_tier_name": "Low Cost",
      "income_multiplier": "0.85",
      "description": "Lower housing and living costs"
    },
    {
      "city_cost_tier_id": "medium_cost",
      "city_cost_tier_name": "Medium Cost",
      "income_multiplier": "1.00",
      "description": "Baseline national assumption"
    },
    {
      "city_cost_tier_id": "high_cost",
      "city_cost_tier_name": "High Cost",
      "income_multiplier": "1.25",
      "description": "Expensive city or metro area"
    }
  ],
  "interests": [
    {
      "interest_id": "tech",
      "interest_name": "Technology",
      "description": "Building software, systems, tools, and digital products."
    },
    {
      "interest_id": "healthcare",
      "interest_name": "Healthcare",
      "description": "Helping people through medical, clinical, or care work."
    },
    {
      "interest_id": "design",
      "interest_name": "Design",
      "description": "Visual, digital, and product experience work."
    },
    {
      "interest_id": "business",
      "interest_name": "Business",
      "description": "Strategy, finance, operations, commercial growth, and management."
    },
    {
      "interest_id": "research",
      "interest_name": "Research",
      "description": "Analysis, evidence, investigation, and structured problem-solving."
    },
    {
      "interest_id": "communication",
      "interest_name": "Communication",
      "description": "Writing, presenting, teaching, persuading, or coordinating."
    },
    {
      "interest_id": "hands_on",
      "interest_name": "Hands-on Work",
      "description": "Practical work with physical systems, tools, or visible output."
    },
    {
      "interest_id": "helping_people",
      "interest_name": "Helping People",
      "description": "Service, support, care, guidance, and impact-oriented work."
    }
  ],
  "degrees": [
    {
      "degree_id": "cs_bachelors",
      "degree_node_id": "degree:cs_bachelors",
      "degree_name": "Computer Science",
      "degree_family": "Technology",
      "cip_code": "11.0701",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Broad technical path into software, security, and digital product work.",
      "academic_profile_min": "strong",
      "academic_profile_min_rank": 4,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 5,
        "creative": 2,
        "people": 2,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "field_employment_2023": 2991550,
      "field_median_annual_wage_usd": 100000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Usually a better fit for students who are comfortable with math, logic, and abstraction.",
      "interest_tags": [
        "tech",
        "research"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:cs_bachelors",
          "label": "Computer Science field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 2,
      "top_paths": [
        {
          "path_id": "path:cs_bachelors:software_developer",
          "profession_id": "software_developer",
          "profession_name": "Software Developers",
          "median_hourly_wage_usd": 63.98,
          "median_annual_wage_usd": 133080,
          "avg_weekly_hours_estimate": 43,
          "schedule_type": "normal",
          "ai_exposure": "medium",
          "geographic_concentration": "regional",
          "confidence": 0.96,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        },
        {
          "path_id": "path:cs_bachelors:information_security_analyst",
          "profession_id": "information_security_analyst",
          "profession_name": "Information Security Analysts",
          "median_hourly_wage_usd": 60.05,
          "median_annual_wage_usd": 124910,
          "avg_weekly_hours_estimate": 44,
          "schedule_type": "normal",
          "ai_exposure": "medium",
          "geographic_concentration": "regional",
          "confidence": 0.78,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 63.98,
      "max_downstream_annual_wage_usd": 133080,
      "best_openings_annual": 140100
    },
    {
      "degree_id": "cybersecurity_bachelors",
      "degree_node_id": "degree:cybersecurity_bachelors",
      "degree_name": "Cybersecurity",
      "degree_family": "Technology",
      "cip_code": "11.1003",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Security-focused computing path that maps directly into infosec and network roles.",
      "academic_profile_min": "strong",
      "academic_profile_min_rank": 4,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "field_employment_2023": 2991550,
      "field_median_annual_wage_usd": 100000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Usually a stronger fit for students who like systems thinking and are comfortable with technical depth.",
      "interest_tags": [
        "tech",
        "research"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:cybersecurity_bachelors",
          "label": "Cybersecurity field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:cybersecurity_bachelors:information_security_analyst",
          "profession_id": "information_security_analyst",
          "profession_name": "Information Security Analysts",
          "median_hourly_wage_usd": 60.05,
          "median_annual_wage_usd": 124910,
          "avg_weekly_hours_estimate": 44,
          "schedule_type": "normal",
          "ai_exposure": "medium",
          "geographic_concentration": "regional",
          "confidence": 0.97,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 60.05,
      "max_downstream_annual_wage_usd": 124910,
      "best_openings_annual": 16000
    },
    {
      "degree_id": "mis_bachelors",
      "degree_node_id": "degree:mis_bachelors",
      "degree_name": "Management Information Systems",
      "degree_family": "Business Technology",
      "cip_code": "52.1201",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Business + systems bridge with analyst-heavy outcomes.",
      "academic_profile_min": "solid",
      "academic_profile_min_rank": 3,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 4,
        "creative": 1,
        "people": 3,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "field_employment_2023": 13736300,
      "field_median_annual_wage_usd": 75000,
      "field_pct_bachelors_jobs": 55,
      "field_pct_advanced_degree": 26,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Often a fit for students who want tech-adjacent work without the most math-heavy route.",
      "interest_tags": [
        "tech",
        "business",
        "research"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:mis_bachelors",
          "label": "Management Information Systems field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 2,
      "top_paths": [
        {
          "path_id": "path:mis_bachelors:computer_systems_analyst",
          "profession_id": "computer_systems_analyst",
          "profession_name": "Computer Systems Analysts",
          "median_hourly_wage_usd": 49.9,
          "median_annual_wage_usd": 103790,
          "avg_weekly_hours_estimate": 43,
          "schedule_type": "normal",
          "ai_exposure": "high",
          "geographic_concentration": "regional",
          "confidence": 0.92,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        },
        {
          "path_id": "path:mis_bachelors:management_analyst",
          "profession_id": "management_analyst",
          "profession_name": "Management Analysts",
          "median_hourly_wage_usd": 48.65,
          "median_annual_wage_usd": 101190,
          "avg_weekly_hours_estimate": 48,
          "schedule_type": "extended",
          "ai_exposure": "high",
          "geographic_concentration": "major_hub_dependent",
          "confidence": 0.64,
          "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries."
        }
      ],
      "max_downstream_hourly_wage_usd": 49.9,
      "max_downstream_annual_wage_usd": 103790,
      "best_openings_annual": 95400
    },
    {
      "degree_id": "nursing_bachelors",
      "degree_node_id": "degree:nursing_bachelors",
      "degree_name": "Registered Nursing",
      "degree_family": "Healthcare",
      "cip_code": "51.3801",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Direct route into clinical care work with broad geographic demand.",
      "academic_profile_min": "solid",
      "academic_profile_min_rank": 3,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 3,
        "creative": 1,
        "people": 5,
        "hands_on": 3
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
      "field_employment_2023": 5729840,
      "field_median_annual_wage_usd": 72000,
      "field_pct_bachelors_jobs": 76,
      "field_pct_advanced_degree": 39,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Needs academic consistency, science readiness, and comfort with clinical settings more than elite grades.",
      "interest_tags": [
        "healthcare",
        "helping_people",
        "communication"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:nursing_bachelors",
          "label": "Registered Nursing field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:nursing_bachelors:registered_nurse",
          "profession_id": "registered_nurse",
          "profession_name": "Registered Nurses",
          "median_hourly_wage_usd": 45.0,
          "median_annual_wage_usd": 93600,
          "avg_weekly_hours_estimate": 40,
          "schedule_type": "shift",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.99,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 45.0,
      "max_downstream_annual_wage_usd": 93600,
      "best_openings_annual": 194500
    },
    {
      "degree_id": "healthcare_admin_bachelors",
      "degree_node_id": "degree:healthcare_admin_bachelors",
      "degree_name": "Healthcare Administration",
      "degree_family": "Healthcare",
      "cip_code": "51.0701",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Healthcare systems and operations path that can lead to non-clinical leadership roles.",
      "academic_profile_min": "solid",
      "academic_profile_min_rank": 3,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 3,
        "creative": 1,
        "people": 4,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
      "field_employment_2023": 5729840,
      "field_median_annual_wage_usd": 72000,
      "field_pct_bachelors_jobs": 76,
      "field_pct_advanced_degree": 39,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Good for students interested in healthcare systems but not necessarily bedside care.",
      "interest_tags": [
        "healthcare",
        "business",
        "communication"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:healthcare_admin_bachelors",
          "label": "Healthcare Administration field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:healthcare_admin_bachelors:medical_health_services_manager",
          "profession_id": "medical_health_services_manager",
          "profession_name": "Medical and Health Services Managers",
          "median_hourly_wage_usd": 56.71,
          "median_annual_wage_usd": 117960,
          "avg_weekly_hours_estimate": 45,
          "schedule_type": "normal",
          "ai_exposure": "medium",
          "geographic_concentration": "regional",
          "confidence": 0.7,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 56.71,
      "max_downstream_annual_wage_usd": 117960,
      "best_openings_annual": 62100
    },
    {
      "degree_id": "finance_bachelors",
      "degree_node_id": "degree:finance_bachelors",
      "degree_name": "Finance",
      "degree_family": "Business",
      "cip_code": "52.0801",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Classic route into investing, valuation, and finance analysis roles.",
      "academic_profile_min": "strong",
      "academic_profile_min_rank": 4,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "field_employment_2023": 13736300,
      "field_median_annual_wage_usd": 75000,
      "field_pct_bachelors_jobs": 55,
      "field_pct_advanced_degree": 26,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Stronger fit for students who are quantitative, detail-oriented, and okay with competitive environments.",
      "interest_tags": [
        "business",
        "research"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:finance_bachelors",
          "label": "Finance field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 2,
      "top_paths": [
        {
          "path_id": "path:finance_bachelors:financial_analyst",
          "profession_id": "financial_analyst",
          "profession_name": "Financial and Investment Analysts",
          "median_hourly_wage_usd": 48.73,
          "median_annual_wage_usd": 101350,
          "avg_weekly_hours_estimate": 48,
          "schedule_type": "extended",
          "ai_exposure": "high",
          "geographic_concentration": "major_hub_dependent",
          "confidence": 0.92,
          "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries."
        },
        {
          "path_id": "path:finance_bachelors:management_analyst",
          "profession_id": "management_analyst",
          "profession_name": "Management Analysts",
          "median_hourly_wage_usd": 48.65,
          "median_annual_wage_usd": 101190,
          "avg_weekly_hours_estimate": 48,
          "schedule_type": "extended",
          "ai_exposure": "high",
          "geographic_concentration": "major_hub_dependent",
          "confidence": 0.55,
          "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries."
        }
      ],
      "max_downstream_hourly_wage_usd": 48.73,
      "max_downstream_annual_wage_usd": 101350,
      "best_openings_annual": 95400
    },
    {
      "degree_id": "economics_bachelors",
      "degree_node_id": "degree:economics_bachelors",
      "degree_name": "Economics",
      "degree_family": "Business",
      "cip_code": "45.0601",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Analytical social science path with policy, research, and business options.",
      "academic_profile_min": "strong",
      "academic_profile_min_rank": 4,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/social-science/social-science-field-of-degree.htm",
      "field_employment_2023": 5226990,
      "field_median_annual_wage_usd": 75000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Usually a better fit for students who like analytical writing, statistics, and theory.",
      "interest_tags": [
        "business",
        "research"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:economics_bachelors",
          "label": "Economics field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/social-science/social-science-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 2,
      "top_paths": [
        {
          "path_id": "path:economics_bachelors:economist",
          "profession_id": "economist",
          "profession_name": "Economists",
          "median_hourly_wage_usd": 57.69,
          "median_annual_wage_usd": 120000,
          "avg_weekly_hours_estimate": 41,
          "schedule_type": "normal",
          "ai_exposure": "medium",
          "geographic_concentration": "major_hub_dependent",
          "confidence": 0.85,
          "tradeoff_summary": "The earnings can work, but the upside often pulls you toward major city hubs."
        },
        {
          "path_id": "path:economics_bachelors:management_analyst",
          "profession_id": "management_analyst",
          "profession_name": "Management Analysts",
          "median_hourly_wage_usd": 48.65,
          "median_annual_wage_usd": 101190,
          "avg_weekly_hours_estimate": 48,
          "schedule_type": "extended",
          "ai_exposure": "high",
          "geographic_concentration": "major_hub_dependent",
          "confidence": 0.62,
          "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries."
        }
      ],
      "max_downstream_hourly_wage_usd": 57.69,
      "max_downstream_annual_wage_usd": 120000,
      "best_openings_annual": 95400
    },
    {
      "degree_id": "accounting_bachelors",
      "degree_node_id": "degree:accounting_bachelors",
      "degree_name": "Accounting",
      "degree_family": "Business",
      "cip_code": "52.0301",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Structured route into accounting, audit, and financial operations.",
      "academic_profile_min": "solid",
      "academic_profile_min_rank": 3,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 4,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "field_employment_2023": 13736300,
      "field_median_annual_wage_usd": 75000,
      "field_pct_bachelors_jobs": 55,
      "field_pct_advanced_degree": 26,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "A strong fit for detail-oriented students who can handle repetitive precision work.",
      "interest_tags": [
        "business",
        "research"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:accounting_bachelors",
          "label": "Accounting field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 2,
      "top_paths": [
        {
          "path_id": "path:accounting_bachelors:accountant",
          "profession_id": "accountant",
          "profession_name": "Accountants and Auditors",
          "median_hourly_wage_usd": 39.27,
          "median_annual_wage_usd": 81680,
          "avg_weekly_hours_estimate": 45,
          "schedule_type": "normal",
          "ai_exposure": "high",
          "geographic_concentration": "regional",
          "confidence": 0.98,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        },
        {
          "path_id": "path:accounting_bachelors:financial_analyst",
          "profession_id": "financial_analyst",
          "profession_name": "Financial and Investment Analysts",
          "median_hourly_wage_usd": 48.73,
          "median_annual_wage_usd": 101350,
          "avg_weekly_hours_estimate": 48,
          "schedule_type": "extended",
          "ai_exposure": "high",
          "geographic_concentration": "major_hub_dependent",
          "confidence": 0.56,
          "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries."
        }
      ],
      "max_downstream_hourly_wage_usd": 48.73,
      "max_downstream_annual_wage_usd": 101350,
      "best_openings_annual": 130800
    },
    {
      "degree_id": "marketing_bachelors",
      "degree_node_id": "degree:marketing_bachelors",
      "degree_name": "Marketing",
      "degree_family": "Business",
      "cip_code": "52.1401",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Commercial strategy path that can lead to market research, brand, and growth roles.",
      "academic_profile_min": "accessible",
      "academic_profile_min_rank": 2,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 3,
        "creative": 3,
        "people": 4,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "field_employment_2023": 13736300,
      "field_median_annual_wage_usd": 75000,
      "field_pct_bachelors_jobs": 55,
      "field_pct_advanced_degree": 26,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Can fit a wider range of students, especially those who like persuasion, trends, and consumer behavior.",
      "interest_tags": [
        "business",
        "communication",
        "design"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:marketing_bachelors",
          "label": "Marketing field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:marketing_bachelors:market_research_analyst",
          "profession_id": "market_research_analyst",
          "profession_name": "Market Research Analysts",
          "median_hourly_wage_usd": 36.99,
          "median_annual_wage_usd": 76950,
          "avg_weekly_hours_estimate": 42,
          "schedule_type": "normal",
          "ai_exposure": "high",
          "geographic_concentration": "regional",
          "confidence": 0.92,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 36.99,
      "max_downstream_annual_wage_usd": 76950,
      "best_openings_annual": 87200
    },
    {
      "degree_id": "graphic_design_bachelors",
      "degree_node_id": "degree:graphic_design_bachelors",
      "degree_name": "Graphic Design",
      "degree_family": "Design",
      "cip_code": "50.0409",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Visual communication path with creative and digital outcomes.",
      "academic_profile_min": "accessible",
      "academic_profile_min_rank": 2,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 2,
        "creative": 5,
        "people": 3,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/fine-arts/fine-arts-field-of-degree.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 50000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Portfolio strength often matters as much as grades.",
      "interest_tags": [
        "design",
        "communication"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:graphic_design_bachelors",
          "label": "Graphic Design field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/fine-arts/fine-arts-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 2,
      "top_paths": [
        {
          "path_id": "path:graphic_design_bachelors:graphic_designer",
          "profession_id": "graphic_designer",
          "profession_name": "Graphic Designers",
          "median_hourly_wage_usd": 29.67,
          "median_annual_wage_usd": 61720,
          "avg_weekly_hours_estimate": 40,
          "schedule_type": "normal",
          "ai_exposure": "high",
          "geographic_concentration": "regional",
          "confidence": 0.96,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        },
        {
          "path_id": "path:graphic_design_bachelors:web_digital_interface_designer",
          "profession_id": "web_digital_interface_designer",
          "profession_name": "Web and Digital Interface Designers",
          "median_hourly_wage_usd": 47.26,
          "median_annual_wage_usd": 98300,
          "avg_weekly_hours_estimate": 43,
          "schedule_type": "normal",
          "ai_exposure": "high",
          "geographic_concentration": "regional",
          "confidence": 0.72,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 47.26,
      "max_downstream_annual_wage_usd": 98300,
      "best_openings_annual": 21100
    },
    {
      "degree_id": "ux_design_bachelors",
      "degree_node_id": "degree:ux_design_bachelors",
      "degree_name": "Web and Digital Experience Design",
      "degree_family": "Design",
      "cip_code": "11.0801",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Digital design path oriented toward interface and user experience work.",
      "academic_profile_min": "solid",
      "academic_profile_min_rank": 3,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 3,
        "creative": 4,
        "people": 3,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "field_employment_2023": 2991550,
      "field_median_annual_wage_usd": 100000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Usually best for students who combine design taste with systems thinking.",
      "interest_tags": [
        "design",
        "tech",
        "communication"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:ux_design_bachelors",
          "label": "Web and Digital Experience Design field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 2,
      "top_paths": [
        {
          "path_id": "path:ux_design_bachelors:web_digital_interface_designer",
          "profession_id": "web_digital_interface_designer",
          "profession_name": "Web and Digital Interface Designers",
          "median_hourly_wage_usd": 47.26,
          "median_annual_wage_usd": 98300,
          "avg_weekly_hours_estimate": 43,
          "schedule_type": "normal",
          "ai_exposure": "high",
          "geographic_concentration": "regional",
          "confidence": 0.97,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        },
        {
          "path_id": "path:ux_design_bachelors:graphic_designer",
          "profession_id": "graphic_designer",
          "profession_name": "Graphic Designers",
          "median_hourly_wage_usd": 29.67,
          "median_annual_wage_usd": 61720,
          "avg_weekly_hours_estimate": 40,
          "schedule_type": "normal",
          "ai_exposure": "high",
          "geographic_concentration": "regional",
          "confidence": 0.58,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 47.26,
      "max_downstream_annual_wage_usd": 98300,
      "best_openings_annual": 21100
    },
    {
      "degree_id": "communications_bachelors",
      "degree_node_id": "degree:communications_bachelors",
      "degree_name": "Communications",
      "degree_family": "Communication",
      "cip_code": "09.0101",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Broad communication path that feeds public relations, media, and outreach work.",
      "academic_profile_min": "accessible",
      "academic_profile_min_rank": 2,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 2,
        "creative": 3,
        "people": 5,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/communications/communications-field-of-degree.htm",
      "field_employment_2023": 3079130,
      "field_median_annual_wage_usd": 65000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Often more about communication skill, internships, and polish than pure grades.",
      "interest_tags": [
        "communication",
        "business"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:communications_bachelors",
          "label": "Communications field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/communications/communications-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:communications_bachelors:public_relations_specialist",
          "profession_id": "public_relations_specialist",
          "profession_name": "Public Relations Specialists",
          "median_hourly_wage_usd": 33.55,
          "median_annual_wage_usd": 69780,
          "avg_weekly_hours_estimate": 43,
          "schedule_type": "normal",
          "ai_exposure": "medium",
          "geographic_concentration": "major_hub_dependent",
          "confidence": 0.91,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 33.55,
      "max_downstream_annual_wage_usd": 69780,
      "best_openings_annual": 27600
    },
    {
      "degree_id": "secondary_education_bachelors",
      "degree_node_id": "degree:secondary_education_bachelors",
      "degree_name": "Secondary Education",
      "degree_family": "Education",
      "cip_code": "13.1205",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Teaching-focused path with local labor market relevance.",
      "academic_profile_min": "solid",
      "academic_profile_min_rank": 3,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 2,
        "creative": 2,
        "people": 5,
        "hands_on": 2
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/education/education-field-of-degree.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 55000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Needs patience, classroom presence, and willingness to work with young people consistently.",
      "interest_tags": [
        "communication",
        "helping_people"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:secondary_education_bachelors",
          "label": "Secondary Education field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/education/education-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:secondary_education_bachelors:high_school_teacher",
          "profession_id": "high_school_teacher",
          "profession_name": "High School Teachers",
          "median_hourly_wage_usd": 31.6,
          "median_annual_wage_usd": 65720,
          "avg_weekly_hours_estimate": 45,
          "schedule_type": "normal",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.98,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 31.6,
      "max_downstream_annual_wage_usd": 65720,
      "best_openings_annual": 64900
    },
    {
      "degree_id": "psychology_bachelors",
      "degree_node_id": "degree:psychology_bachelors",
      "degree_name": "Psychology",
      "degree_family": "Social Science",
      "cip_code": "42.0101",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Popular people-focused degree that often needs graduate study for premium clinical outcomes.",
      "academic_profile_min": "accessible",
      "academic_profile_min_rank": 2,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 3,
        "creative": 1,
        "people": 5,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/psychology/psychology-field-of-degree.htm",
      "field_employment_2023": 3655640,
      "field_median_annual_wage_usd": 60000,
      "field_pct_bachelors_jobs": 62,
      "field_pct_advanced_degree": 51,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Good fit for students interested in people, behavior, and counseling, but many high-upside roles need more schooling.",
      "interest_tags": [
        "research",
        "helping_people",
        "communication"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:psychology_bachelors",
          "label": "Psychology field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/psychology/psychology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 2,
      "top_paths": [
        {
          "path_id": "path:psychology_bachelors:social_worker",
          "profession_id": "social_worker",
          "profession_name": "Social Workers",
          "median_hourly_wage_usd": 29.49,
          "median_annual_wage_usd": 61330,
          "avg_weekly_hours_estimate": 42,
          "schedule_type": "normal",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.63,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        },
        {
          "path_id": "path:psychology_bachelors:physician",
          "profession_id": "physician",
          "profession_name": "Physicians and Surgeons",
          "median_hourly_wage_usd": 115.0,
          "median_annual_wage_usd": 239200,
          "avg_weekly_hours_estimate": 55,
          "schedule_type": "irregular",
          "ai_exposure": "low",
          "geographic_concentration": "regional",
          "confidence": 0.2,
          "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries."
        }
      ],
      "max_downstream_hourly_wage_usd": 115.0,
      "max_downstream_annual_wage_usd": 239200,
      "best_openings_annual": 74000
    },
    {
      "degree_id": "social_work_bachelors",
      "degree_node_id": "degree:social_work_bachelors",
      "degree_name": "Social Work",
      "degree_family": "Social Service",
      "cip_code": "44.0701",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Direct helping-profession path with clearer job relevance than many general social-science majors.",
      "academic_profile_min": "accessible",
      "academic_profile_min_rank": 2,
      "time_to_complete_years": 4,
      "cost_band": "low",
      "cost_band_rank": 1,
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 5,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/public-policy-and-social-services/public-policy-and-social-services-field-of-degree.htm",
      "field_employment_2023": 994200,
      "field_median_annual_wage_usd": 55000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Usually more about empathy, resilience, and follow-through than elite academics.",
      "interest_tags": [
        "helping_people",
        "communication"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:social_work_bachelors",
          "label": "Social Work field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/public-policy-and-social-services/public-policy-and-social-services-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:social_work_bachelors:social_worker",
          "profession_id": "social_worker",
          "profession_name": "Social Workers",
          "median_hourly_wage_usd": 29.49,
          "median_annual_wage_usd": 61330,
          "avg_weekly_hours_estimate": 42,
          "schedule_type": "normal",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.96,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 29.49,
      "max_downstream_annual_wage_usd": 61330,
      "best_openings_annual": 74000
    },
    {
      "degree_id": "biology_bachelors",
      "degree_node_id": "degree:biology_bachelors",
      "degree_name": "Biology",
      "degree_family": "Science",
      "cip_code": "26.0101",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Science foundation that can lead to lab roles or more schooling.",
      "academic_profile_min": "strong",
      "academic_profile_min_rank": 4,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 2
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/biology/biology-field-of-degree.htm",
      "field_employment_2023": 3584600,
      "field_median_annual_wage_usd": 75000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Often strong academically, but a bachelor's alone may not unlock the highest-paying outcomes.",
      "interest_tags": [
        "research",
        "healthcare"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:biology_bachelors",
          "label": "Biology field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/biology/biology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 2,
      "top_paths": [
        {
          "path_id": "path:biology_bachelors:biological_technician",
          "profession_id": "biological_technician",
          "profession_name": "Biological Technicians",
          "median_hourly_wage_usd": 24.65,
          "median_annual_wage_usd": 51270,
          "avg_weekly_hours_estimate": 40,
          "schedule_type": "normal",
          "ai_exposure": "low",
          "geographic_concentration": "regional",
          "confidence": 0.82,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        },
        {
          "path_id": "path:biology_bachelors:physician",
          "profession_id": "physician",
          "profession_name": "Physicians and Surgeons",
          "median_hourly_wage_usd": 115.0,
          "median_annual_wage_usd": 239200,
          "avg_weekly_hours_estimate": 55,
          "schedule_type": "irregular",
          "ai_exposure": "low",
          "geographic_concentration": "regional",
          "confidence": 0.35,
          "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries."
        }
      ],
      "max_downstream_hourly_wage_usd": 115.0,
      "max_downstream_annual_wage_usd": 239200,
      "best_openings_annual": 23400
    },
    {
      "degree_id": "civil_engineering_bachelors",
      "degree_node_id": "degree:civil_engineering_bachelors",
      "degree_name": "Civil Engineering",
      "degree_family": "Engineering",
      "cip_code": "14.0801",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Infrastructure-oriented engineering path with practical real-world demand.",
      "academic_profile_min": "strong",
      "academic_profile_min_rank": 4,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 3
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
      "field_employment_2023": 5568160,
      "field_median_annual_wage_usd": 100000,
      "field_pct_bachelors_jobs": 73,
      "field_pct_advanced_degree": 42,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "A stronger fit for students comfortable with math, physics, and structured technical problem-solving.",
      "interest_tags": [
        "research",
        "hands_on"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:civil_engineering_bachelors",
          "label": "Civil Engineering field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:civil_engineering_bachelors:civil_engineer",
          "profession_id": "civil_engineer",
          "profession_name": "Civil Engineers",
          "median_hourly_wage_usd": 47.88,
          "median_annual_wage_usd": 99590,
          "avg_weekly_hours_estimate": 44,
          "schedule_type": "normal",
          "ai_exposure": "low",
          "geographic_concentration": "regional",
          "confidence": 0.98,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 47.88,
      "max_downstream_annual_wage_usd": 99590,
      "best_openings_annual": 23600
    },
    {
      "degree_id": "mechanical_engineering_bachelors",
      "degree_node_id": "degree:mechanical_engineering_bachelors",
      "degree_name": "Mechanical Engineering",
      "degree_family": "Engineering",
      "cip_code": "14.1901",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Broad engineering path tied to products, systems, manufacturing, and automation.",
      "academic_profile_min": "strong",
      "academic_profile_min_rank": 4,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 5,
        "creative": 2,
        "people": 2,
        "hands_on": 3
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
      "field_employment_2023": 5568160,
      "field_median_annual_wage_usd": 100000,
      "field_pct_bachelors_jobs": 73,
      "field_pct_advanced_degree": 42,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Usually best for students with strong math/science readiness and durable technical curiosity.",
      "interest_tags": [
        "research",
        "hands_on",
        "tech"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:mechanical_engineering_bachelors",
          "label": "Mechanical Engineering field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:mechanical_engineering_bachelors:mechanical_engineer",
          "profession_id": "mechanical_engineer",
          "profession_name": "Mechanical Engineers",
          "median_hourly_wage_usd": 49.19,
          "median_annual_wage_usd": 102320,
          "avg_weekly_hours_estimate": 44,
          "schedule_type": "normal",
          "ai_exposure": "medium",
          "geographic_concentration": "regional",
          "confidence": 0.98,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 49.19,
      "max_downstream_annual_wage_usd": 102320,
      "best_openings_annual": 18100
    },
    {
      "degree_id": "construction_management_bachelors",
      "degree_node_id": "degree:construction_management_bachelors",
      "degree_name": "Construction Management",
      "degree_family": "Trades",
      "cip_code": "52.2001",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Operations-heavy path linked to jobsite leadership.",
      "academic_profile_min": "solid",
      "academic_profile_min_rank": 3,
      "time_to_complete_years": 4,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 3,
        "creative": 1,
        "people": 3,
        "hands_on": 5
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/construction/construction-field-of-degree.htm",
      "field_employment_2023": 165280,
      "field_median_annual_wage_usd": 90000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Good for students who want practical work and responsibility without a purely academic job.",
      "interest_tags": [
        "hands_on",
        "business"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:construction_management_bachelors",
          "label": "Construction Management field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/construction/construction-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:construction_management_bachelors:construction_manager",
          "profession_id": "construction_manager",
          "profession_name": "Construction Managers",
          "median_hourly_wage_usd": 51.43,
          "median_annual_wage_usd": 106980,
          "avg_weekly_hours_estimate": 48,
          "schedule_type": "extended",
          "ai_exposure": "low",
          "geographic_concentration": "regional",
          "confidence": 0.98,
          "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries."
        }
      ],
      "max_downstream_hourly_wage_usd": 51.43,
      "max_downstream_annual_wage_usd": 106980,
      "best_openings_annual": 45400
    },
    {
      "degree_id": "paralegal_associate",
      "degree_node_id": "degree:paralegal_associate",
      "degree_name": "Paralegal Studies",
      "degree_family": "Legal",
      "cip_code": "22.0302",
      "award_level": "associates",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Applied legal-support pathway with direct office outcomes.",
      "academic_profile_min": "accessible",
      "academic_profile_min_rank": 2,
      "time_to_complete_years": 2,
      "cost_band": "low",
      "cost_band_rank": 1,
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 4,
        "hands_on": 1
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/law-and-legal-studies/law-and-legal-studies-field-of-degree.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 70000,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "A good fit for organized students who like language, detail, and structured client work more than abstract theory.",
      "interest_tags": [
        "communication",
        "research",
        "business"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:paralegal_associate",
          "label": "Paralegal Studies field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/law-and-legal-studies/law-and-legal-studies-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:paralegal_associate:paralegal",
          "profession_id": "paralegal",
          "profession_name": "Paralegals and Legal Assistants",
          "median_hourly_wage_usd": 29.33,
          "median_annual_wage_usd": 61010,
          "avg_weekly_hours_estimate": 41,
          "schedule_type": "normal",
          "ai_exposure": "high",
          "geographic_concentration": "regional",
          "confidence": 0.98,
          "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone."
        }
      ],
      "max_downstream_hourly_wage_usd": 29.33,
      "max_downstream_annual_wage_usd": 61010,
      "best_openings_annual": 37700
    },
    {
      "degree_id": "dental_hygiene_associate",
      "degree_node_id": "degree:dental_hygiene_associate",
      "degree_name": "Dental Hygiene",
      "degree_family": "Healthcare",
      "cip_code": "51.0602",
      "award_level": "associates",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Shorter healthcare route with strong earnings and licensure.",
      "academic_profile_min": "accessible",
      "academic_profile_min_rank": 2,
      "time_to_complete_years": 3,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 4,
        "hands_on": 2
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 94260,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_ooh_2026",
      "grade_proxy_note": "A good option for students wanting healthcare upside without the time and debt of medical school.",
      "interest_tags": [
        "healthcare",
        "helping_people"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:dental_hygiene_associate",
          "label": "Dental Hygiene field evidence",
          "url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:dental_hygiene_associate:dental_hygienist",
          "profession_id": "dental_hygienist",
          "profession_name": "Dental Hygienists",
          "median_hourly_wage_usd": 45.32,
          "median_annual_wage_usd": 94260,
          "avg_weekly_hours_estimate": 34,
          "schedule_type": "normal",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.99,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 45.32,
      "max_downstream_annual_wage_usd": 94260,
      "best_openings_annual": 15300
    },
    {
      "degree_id": "radiologic_technology_associate",
      "degree_node_id": "degree:radiologic_technology_associate",
      "degree_name": "Radiologic Technology",
      "degree_family": "Healthcare",
      "cip_code": "51.0911",
      "award_level": "associates",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Imaging-focused healthcare route with associate-degree entry.",
      "academic_profile_min": "accessible",
      "academic_profile_min_rank": 2,
      "time_to_complete_years": 2,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 4,
        "hands_on": 3
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 77660,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_ooh_2026",
      "grade_proxy_note": "A good fit for students who want healthcare work plus technical equipment and procedures.",
      "interest_tags": [
        "healthcare",
        "hands_on"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:radiologic_technology_associate",
          "label": "Radiologic Technology field evidence",
          "url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:radiologic_technology_associate:radiologic_technologist",
          "profession_id": "radiologic_technologist",
          "profession_name": "Radiologic Technologists",
          "median_hourly_wage_usd": 37.34,
          "median_annual_wage_usd": 77660,
          "avg_weekly_hours_estimate": 40,
          "schedule_type": "shift",
          "ai_exposure": "low",
          "geographic_concentration": "regional",
          "confidence": 0.99,
          "tradeoff_summary": "The money may work, but your calendar is likely to be the real compromise."
        }
      ],
      "max_downstream_hourly_wage_usd": 37.34,
      "max_downstream_annual_wage_usd": 77660,
      "best_openings_annual": 15400
    },
    {
      "degree_id": "respiratory_therapy_associate",
      "degree_node_id": "degree:respiratory_therapy_associate",
      "degree_name": "Respiratory Therapy",
      "degree_family": "Healthcare",
      "cip_code": "51.0908",
      "award_level": "associates",
      "pathway_type": "degree",
      "source_type": "cip_crosswalk",
      "notes": "Shorter licensed healthcare route into breathing and critical-care support.",
      "academic_profile_min": "accessible",
      "academic_profile_min_rank": 2,
      "time_to_complete_years": 2,
      "cost_band": "medium",
      "cost_band_rank": 2,
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 4,
        "hands_on": 3
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
      "field_employment_2023": 5729840,
      "field_median_annual_wage_usd": 72000,
      "field_pct_bachelors_jobs": 76,
      "field_pct_advanced_degree": 39,
      "field_source": "bls_field_of_degree_2025",
      "grade_proxy_note": "Good for students who want direct patient impact and can handle clinical environments without committing to medical school.",
      "interest_tags": [
        "healthcare",
        "helping_people",
        "hands_on"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:respiratory_therapy_associate",
          "label": "Respiratory Therapy field evidence",
          "url": "https://www.bls.gov/ooh/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:respiratory_therapy_associate:respiratory_therapist",
          "profession_id": "respiratory_therapist",
          "profession_name": "Respiratory Therapists",
          "median_hourly_wage_usd": 39.15,
          "median_annual_wage_usd": 81430,
          "avg_weekly_hours_estimate": 40,
          "schedule_type": "shift",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.99,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 39.15,
      "max_downstream_annual_wage_usd": 81430,
      "best_openings_annual": 9000
    },
    {
      "degree_id": "electrician_apprenticeship",
      "degree_node_id": "degree:electrician_apprenticeship",
      "degree_name": "Electrician Apprenticeship",
      "degree_family": "Trades",
      "cip_code": "",
      "award_level": "apprenticeship",
      "pathway_type": "trade",
      "source_type": "manual",
      "notes": "Hands-on credential path with strong local demand and low AI exposure.",
      "academic_profile_min": "open",
      "academic_profile_min_rank": 1,
      "time_to_complete_years": 4,
      "cost_band": "low",
      "cost_band_rank": 1,
      "fit_scores": {
        "analytical": 1,
        "creative": 0,
        "people": 2,
        "hands_on": 5
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 62880,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_ooh_2026",
      "grade_proxy_note": "More about reliability, spatial sense, and physical work than academic prestige.",
      "interest_tags": [
        "hands_on"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:electrician_apprenticeship",
          "label": "Electrician Apprenticeship field evidence",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:electrician_apprenticeship:electrician",
          "profession_id": "electrician",
          "profession_name": "Electricians",
          "median_hourly_wage_usd": 30.23,
          "median_annual_wage_usd": 62880,
          "avg_weekly_hours_estimate": 42,
          "schedule_type": "normal",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.99,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 30.23,
      "max_downstream_annual_wage_usd": 62880,
      "best_openings_annual": 80400
    },
    {
      "degree_id": "carpentry_apprenticeship",
      "degree_node_id": "degree:carpentry_apprenticeship",
      "degree_name": "Carpentry Apprenticeship",
      "degree_family": "Trades",
      "cip_code": "46.0201",
      "award_level": "apprenticeship",
      "pathway_type": "trade",
      "source_type": "cip_crosswalk",
      "notes": "Skilled construction pathway into residential and commercial building work.",
      "academic_profile_min": "open",
      "academic_profile_min_rank": 1,
      "time_to_complete_years": 3,
      "cost_band": "low",
      "cost_band_rank": 1,
      "fit_scores": {
        "analytical": 1,
        "creative": 0,
        "people": 2,
        "hands_on": 5
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 61220,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_ooh_2026",
      "grade_proxy_note": "Often a better fit for students who want practical output, visible progress, and lower debt.",
      "interest_tags": [
        "hands_on"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:carpentry_apprenticeship",
          "label": "Carpentry Apprenticeship field evidence",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:carpentry_apprenticeship:carpenter",
          "profession_id": "carpenter",
          "profession_name": "Carpenters",
          "median_hourly_wage_usd": 29.43,
          "median_annual_wage_usd": 61220,
          "avg_weekly_hours_estimate": 42,
          "schedule_type": "normal",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.98,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 29.43,
      "max_downstream_annual_wage_usd": 61220,
      "best_openings_annual": 45600
    },
    {
      "degree_id": "plumbing_apprenticeship",
      "degree_node_id": "degree:plumbing_apprenticeship",
      "degree_name": "Plumbing Apprenticeship",
      "degree_family": "Trades",
      "cip_code": "46.0503",
      "award_level": "apprenticeship",
      "pathway_type": "trade",
      "source_type": "cip_crosswalk",
      "notes": "Skilled trade route with strong local demand and apprenticeship-first entry.",
      "academic_profile_min": "open",
      "academic_profile_min_rank": 1,
      "time_to_complete_years": 4,
      "cost_band": "low",
      "cost_band_rank": 1,
      "fit_scores": {
        "analytical": 1,
        "creative": 0,
        "people": 2,
        "hands_on": 5
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 62970,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_ooh_2026",
      "grade_proxy_note": "A strong path for students who want paid training and durable local work.",
      "interest_tags": [
        "hands_on"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:plumbing_apprenticeship",
          "label": "Plumbing Apprenticeship field evidence",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:plumbing_apprenticeship:plumber",
          "profession_id": "plumber",
          "profession_name": "Plumbers",
          "median_hourly_wage_usd": 30.27,
          "median_annual_wage_usd": 62970,
          "avg_weekly_hours_estimate": 44,
          "schedule_type": "irregular",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.99,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 30.27,
      "max_downstream_annual_wage_usd": 62970,
      "best_openings_annual": 44000
    },
    {
      "degree_id": "hvac_certificate",
      "degree_node_id": "degree:hvac_certificate",
      "degree_name": "HVAC Technology",
      "degree_family": "Trades",
      "cip_code": "47.0201",
      "award_level": "certificate",
      "pathway_type": "trade",
      "source_type": "cip_crosswalk",
      "notes": "Technical trade path into heating, cooling, and refrigeration systems.",
      "academic_profile_min": "open",
      "academic_profile_min_rank": 1,
      "time_to_complete_years": 1,
      "cost_band": "low",
      "cost_band_rank": 1,
      "fit_scores": {
        "analytical": 2,
        "creative": 0,
        "people": 2,
        "hands_on": 5
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 59810,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_ooh_2026",
      "grade_proxy_note": "Often a good fit for students who like diagnostic problem-solving and practical systems work.",
      "interest_tags": [
        "hands_on",
        "tech"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:hvac_certificate",
          "label": "HVAC Technology field evidence",
          "url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:hvac_certificate:hvac_technician",
          "profession_id": "hvac_technician",
          "profession_name": "HVAC Technicians",
          "median_hourly_wage_usd": 28.75,
          "median_annual_wage_usd": 59810,
          "avg_weekly_hours_estimate": 43,
          "schedule_type": "irregular",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.96,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 28.75,
      "max_downstream_annual_wage_usd": 59810,
      "best_openings_annual": 40100
    },
    {
      "degree_id": "welding_certificate",
      "degree_node_id": "degree:welding_certificate",
      "degree_name": "Welding Technology",
      "degree_family": "Trades",
      "cip_code": "48.0508",
      "award_level": "certificate",
      "pathway_type": "trade",
      "source_type": "cip_crosswalk",
      "notes": "Fast route into fabrication, manufacturing, and industrial repair work.",
      "academic_profile_min": "open",
      "academic_profile_min_rank": 1,
      "time_to_complete_years": 1,
      "cost_band": "low",
      "cost_band_rank": 1,
      "fit_scores": {
        "analytical": 2,
        "creative": 0,
        "people": 1,
        "hands_on": 5
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 51890,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_ooh_2026",
      "grade_proxy_note": "A good fit for students who want a practical skilled path with shorter training and visible output.",
      "interest_tags": [
        "hands_on",
        "tech"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:welding_certificate",
          "label": "Welding Technology field evidence",
          "url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:welding_certificate:welder",
          "profession_id": "welder",
          "profession_name": "Welder",
          "median_hourly_wage_usd": 24.95,
          "median_annual_wage_usd": 51890,
          "avg_weekly_hours_estimate": 42,
          "schedule_type": "shift",
          "ai_exposure": "medium",
          "geographic_concentration": "regional",
          "confidence": 0.96,
          "tradeoff_summary": "The money may work, but your calendar is likely to be the real compromise."
        }
      ],
      "max_downstream_hourly_wage_usd": 24.95,
      "max_downstream_annual_wage_usd": 51890,
      "best_openings_annual": 43800
    },
    {
      "degree_id": "tile_setting_certificate",
      "degree_node_id": "degree:tile_setting_certificate",
      "degree_name": "Tile Setting Certificate",
      "degree_family": "Trades",
      "cip_code": "",
      "award_level": "certificate",
      "pathway_type": "trade",
      "source_type": "manual",
      "notes": "Hands-on craft path with visible tangible output and strong boundary potential.",
      "academic_profile_min": "open",
      "academic_profile_min_rank": 1,
      "time_to_complete_years": 1,
      "cost_band": "low",
      "cost_band_rank": 1,
      "fit_scores": {
        "analytical": 1,
        "creative": 0,
        "people": 1,
        "hands_on": 5
      },
      "field_of_degree_url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
      "field_employment_2023": 0,
      "field_median_annual_wage_usd": 60360,
      "field_pct_bachelors_jobs": 0,
      "field_pct_advanced_degree": 0,
      "field_source": "bls_ooh_2026",
      "grade_proxy_note": "Portfolio of work and craft skill matter more than academic ranking.",
      "interest_tags": [
        "hands_on"
      ],
      "source_links": [
        {
          "source_id": "source:degree-field:tile_setting_certificate",
          "label": "Tile Setting Certificate field evidence",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        }
      ],
      "path_count": 1,
      "top_paths": [
        {
          "path_id": "path:tile_setting_certificate:tile_stone_setter",
          "profession_id": "tile_stone_setter",
          "profession_name": "Tile and Stone Setters",
          "median_hourly_wage_usd": 29.02,
          "median_annual_wage_usd": 60360,
          "avg_weekly_hours_estimate": 40,
          "schedule_type": "normal",
          "ai_exposure": "low",
          "geographic_concentration": "local_anywhere",
          "confidence": 0.9,
          "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff."
        }
      ],
      "max_downstream_hourly_wage_usd": 29.02,
      "max_downstream_annual_wage_usd": 60360,
      "best_openings_annual": 2300
    }
  ],
  "professions": [
    {
      "profession_id": "software_developer",
      "profession_node_id": "profession:software_developer",
      "profession_name": "Software Developers",
      "soc_code": "15-1252.00",
      "profession_family": "Technology",
      "median_annual_wage_usd": 133080,
      "median_hourly_wage_usd": 63.98,
      "employment_count": 1913650,
      "outlook_growth_pct": 15,
      "openings_annual": 140100,
      "job_zone": "4",
      "onet_title": "Software Developers",
      "onet_description": "Research, design, and develop computer and network software or specialized utility programs. Analyze user needs and develop software solutions, applying principles and techniques of computer science, engineering, and mathematical analysis. Update software or enhance existing software capabilities. May work with computer hardware engineers to integrate hardware and software systems, and develop specifications and performance requirements. May maintain databases within an application area, working individually or coordinating database development as part of a team.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "More than 1 in 4 worked more than 40 hours per week in 2024.",
      "notes": "More than 1 in 4 worked more than 40 hours per week in 2024. Strong upside, but deadline cycles can bleed into evenings.",
      "interest_tags": [
        "tech",
        "research"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1252.00",
      "source_links": [
        {
          "source_id": "source:ooh:software_developer",
          "label": "Software Developers OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:software_developer",
          "label": "Software Developers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1252.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.75,
          "level_score": 6.23
        },
        {
          "skill_id": "programming",
          "skill_name": "Programming",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.12
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.12
        },
        {
          "skill_id": "judgment_and_decision_making",
          "skill_name": "Judgment and Decision Making",
          "skill_category": "skill",
          "importance_score": 3.62,
          "level_score": 3.75
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 3.57,
          "level_score": 4.55
        }
      ],
      "interest_profile": [
        {
          "name": "Investigative",
          "score": 6.05
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 5.62
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:software_developer",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.5,
      "contact_with_others_score": 3.88,
      "email_score": 4.5,
      "face_to_face_score": 3.0,
      "sitting_score": 4.95,
      "standing_score": 1.47,
      "walking_score": 1.29,
      "regular_schedule_pct": 98.43,
      "irregular_schedule_pct": 1.57,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "information_security_analyst",
      "profession_node_id": "profession:information_security_analyst",
      "profession_name": "Information Security Analysts",
      "soc_code": "15-1212.00",
      "profession_family": "Technology",
      "median_annual_wage_usd": 124910,
      "median_hourly_wage_usd": 60.05,
      "employment_count": 182800,
      "outlook_growth_pct": 29,
      "openings_annual": 16000,
      "job_zone": "4",
      "onet_title": "Information Security Analysts",
      "onet_description": "Plan, implement, upgrade, or monitor security measures for the protection of computer networks and information. Assess system vulnerabilities for security risks and propose and implement risk mitigation strategies. May ensure appropriate security controls are in place that will safeguard digital files and vital electronic infrastructure. May respond to computer security breaches and viruses.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most work full time, and some work more than 40 hours per week.",
      "notes": "Most work full time, and some work more than 40 hours per week. High upside with lower substitution risk than many generic analyst roles, but often tied to technical competence and ongoing learning.",
      "interest_tags": [
        "tech",
        "research"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1212.00",
      "source_links": [
        {
          "source_id": "source:ooh:information_security_analyst",
          "label": "Information Security Analysts OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:information_security_analyst",
          "label": "Information Security Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1212.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.35,
          "level_score": 5.97
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.26,
          "level_score": 4.2
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.12
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.12
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.75,
          "level_score": 3.88
        }
      ],
      "interest_profile": [
        {
          "name": "Conventional",
          "score": 6.08
        },
        {
          "name": "First Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Investigative",
          "score": 5.4
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:information_security_analyst",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 44,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.6,
      "contact_with_others_score": 4.32,
      "email_score": 4.96,
      "face_to_face_score": 4.47,
      "sitting_score": 4.23,
      "standing_score": 2.3,
      "walking_score": 1.99,
      "regular_schedule_pct": 89.88,
      "irregular_schedule_pct": 10.12,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "data_scientist",
      "profession_node_id": "profession:data_scientist",
      "profession_name": "Data Scientists",
      "soc_code": "15-2051.00",
      "profession_family": "Technology",
      "median_annual_wage_usd": 112590,
      "median_hourly_wage_usd": 54.13,
      "employment_count": 202900,
      "outlook_growth_pct": 34,
      "openings_annual": 20000,
      "job_zone": "4",
      "onet_title": "Data Scientists",
      "onet_description": "Develop and implement a set of techniques or analytics applications to transform raw data into meaningful information using data-oriented programming languages and visualization software. Apply data mining, data modeling, natural language processing, and machine learning to extract and analyze information from large structured and unstructured datasets. Visualize, interpret, and report data findings. May create dynamic data reports.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most work full time.",
      "notes": "Most work full time. High-demand analytical path with strong upside and some AI resilience because it often involves building or governing AI systems.",
      "interest_tags": [
        "tech",
        "research"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/math/data-scientists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-2051.00",
      "source_links": [
        {
          "source_id": "source:ooh:data_scientist",
          "label": "Data Scientists OOH page",
          "url": "https://www.bls.gov/ooh/math/data-scientists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:data_scientist",
          "label": "Data Scientists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-2051.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [],
      "interest_profile": [
        {
          "name": "Investigative",
          "score": 6.98
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 5.39
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:data_scientist",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 0.0,
      "contact_with_others_score": 0.0,
      "email_score": 0.0,
      "face_to_face_score": 0.0,
      "sitting_score": 0.0,
      "standing_score": 0.0,
      "walking_score": 0.0,
      "regular_schedule_pct": 0.0,
      "irregular_schedule_pct": 0.0,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "computer_systems_analyst",
      "profession_node_id": "profession:computer_systems_analyst",
      "profession_name": "Computer Systems Analysts",
      "soc_code": "15-1211.00",
      "profession_family": "Technology",
      "median_annual_wage_usd": 103790,
      "median_hourly_wage_usd": 49.9,
      "employment_count": 558400,
      "outlook_growth_pct": 9,
      "openings_annual": 34200,
      "job_zone": "3",
      "onet_title": "Computer Systems Analysts",
      "onet_description": "Analyze science, engineering, business, and other data processing problems to develop and implement solutions to complex applications problems, system administration issues, or network concerns. Perform systems management and integration functions, improve existing computer systems, and review computer system capabilities, workflow, and schedule limitations. May analyze or recommend commercially available software.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most work full time, and some work more than 40 hours per week.",
      "notes": "Most work full time, and some work more than 40 hours per week. Predictable office pattern for many roles, but a lot of task structure is AI-sensitive.",
      "interest_tags": [
        "tech",
        "business",
        "research"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1211.00",
      "source_links": [
        {
          "source_id": "source:ooh:computer_systems_analyst",
          "label": "Computer Systems Analysts OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:computer_systems_analyst",
          "label": "Computer Systems Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1211.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.63,
          "level_score": 6.0
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.0
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.5
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.75,
          "level_score": 4.0
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.75,
          "level_score": 4.0
        }
      ],
      "interest_profile": [
        {
          "name": "Investigative",
          "score": 6.39
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 5.93
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:computer_systems_analyst",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.17,
      "contact_with_others_score": 4.49,
      "email_score": 5.0,
      "face_to_face_score": 4.21,
      "sitting_score": 4.18,
      "standing_score": 2.38,
      "walking_score": 2.21,
      "regular_schedule_pct": 99.57,
      "irregular_schedule_pct": 0.43,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "registered_nurse",
      "profession_node_id": "profession:registered_nurse",
      "profession_name": "Registered Nurses",
      "soc_code": "29-1141.00",
      "profession_family": "Healthcare",
      "median_annual_wage_usd": 93600,
      "median_hourly_wage_usd": 45.0,
      "employment_count": 3242800,
      "outlook_growth_pct": 6,
      "openings_annual": 194500,
      "job_zone": "4",
      "onet_title": "Registered Nurses",
      "onet_description": "Assess patient health problems and needs, develop and implement nursing care plans, and maintain medical records. Administer nursing care to ill, injured, convalescent, or disabled patients. May advise patients on health maintenance and disease prevention or provide case management. Licensing or registration required.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Facilities that provide 24-hour care may require rotating shifts, weekends, and on-call time.",
      "notes": "Facilities that provide 24-hour care may require rotating shifts, weekends, and on-call time. Very durable and geographically flexible, but often costs nights, weekends, or holiday control.",
      "interest_tags": [
        "healthcare",
        "helping_people",
        "communication"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-1141.00",
      "source_links": [
        {
          "source_id": "source:ooh:registered_nurse",
          "label": "Registered Nurses OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:registered_nurse",
          "label": "Registered Nurses O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-1141.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "psychology",
          "skill_name": "Psychology",
          "skill_category": "knowledge",
          "importance_score": 4.58,
          "level_score": 6.08
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 5.48
        },
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 4.36,
          "level_score": 4.47
        },
        {
          "skill_id": "social_perceptiveness",
          "skill_name": "Social Perceptiveness",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.38
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.25
        }
      ],
      "interest_profile": [
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Social",
          "score": 5.57
        },
        {
          "name": "Conventional",
          "score": 4.75
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:registered_nurse",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "shift",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "high",
      "night_work_likelihood": "high",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.99,
      "contact_with_others_score": 4.89,
      "email_score": 4.31,
      "face_to_face_score": 4.94,
      "sitting_score": 2.93,
      "standing_score": 3.01,
      "walking_score": 3.17,
      "regular_schedule_pct": 87.26,
      "irregular_schedule_pct": 12.74,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "medical_health_services_manager",
      "profession_node_id": "profession:medical_health_services_manager",
      "profession_name": "Medical and Health Services Managers",
      "soc_code": "11-9111.00",
      "profession_family": "Healthcare",
      "median_annual_wage_usd": 117960,
      "median_hourly_wage_usd": 56.71,
      "employment_count": 616200,
      "outlook_growth_pct": 23,
      "openings_annual": 62100,
      "job_zone": "4",
      "onet_title": "Medical and Health Services Managers",
      "onet_description": "Plan, direct, or coordinate medical and health services in hospitals, clinics, managed care organizations, public health agencies, or similar organizations.",
      "entry_level_education": "bachelors_plus_experience",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most work full time, and some work more than 40 hours per week.",
      "notes": "Most work full time, and some work more than 40 hours per week. Strong upside in healthcare without clinical training, but many roles want prior industry experience and organizational pressure can be high.",
      "interest_tags": [
        "healthcare",
        "business",
        "communication"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/management/medical-and-health-services-managers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/11-9111.00",
      "source_links": [
        {
          "source_id": "source:ooh:medical_health_services_manager",
          "label": "Medical and Health Services Managers OOH page",
          "url": "https://www.bls.gov/ooh/management/medical-and-health-services-managers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:medical_health_services_manager",
          "label": "Medical and Health Services Managers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/11-9111.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 4.68,
          "level_score": 5.5
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.37,
          "level_score": 4.85
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.22,
          "level_score": 5.52
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.12
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.0
        }
      ],
      "interest_profile": [
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Enterprising",
          "score": 5.95
        },
        {
          "name": "Conventional",
          "score": 5.17
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:medical_health_services_manager",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 45,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.93,
      "contact_with_others_score": 4.82,
      "email_score": 5.0,
      "face_to_face_score": 4.61,
      "sitting_score": 4.25,
      "standing_score": 2.25,
      "walking_score": 1.96,
      "regular_schedule_pct": 89.29,
      "irregular_schedule_pct": 7.14,
      "seasonal_schedule_pct": 3.57
    },
    {
      "profession_id": "high_school_teacher",
      "profession_node_id": "profession:high_school_teacher",
      "profession_name": "High School Teachers",
      "soc_code": "25-2031.00",
      "profession_family": "Education",
      "median_annual_wage_usd": 65720,
      "median_hourly_wage_usd": 31.6,
      "employment_count": 1033000,
      "outlook_growth_pct": 0,
      "openings_annual": 64900,
      "job_zone": "4",
      "onet_title": "Secondary School Teachers, Except Special and Career/Technical Education",
      "onet_description": "Teach one or more subjects to students at the secondary school level.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most work full time during the school year.",
      "notes": "Most work full time during the school year. Calendar rhythm is predictable, but prep and grading can spill beyond the school day.",
      "interest_tags": [
        "communication",
        "helping_people"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/25-2031.00",
      "source_links": [
        {
          "source_id": "source:ooh:high_school_teacher",
          "label": "High School Teachers OOH page",
          "url": "https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:high_school_teacher",
          "label": "High School Teachers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/25-2031.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "education_and_training",
          "skill_name": "Education and Training",
          "skill_category": "knowledge",
          "importance_score": 4.69,
          "level_score": 5.34
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.35,
          "level_score": 4.95
        },
        {
          "skill_id": "instructing",
          "skill_name": "Instructing",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.0
        },
        {
          "skill_id": "learning_strategies",
          "skill_name": "Learning Strategies",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.25
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.12
        }
      ],
      "interest_profile": [
        {
          "name": "Social",
          "score": 7.0
        },
        {
          "name": "First Interest High-Point",
          "score": 4.0
        },
        {
          "name": "Artistic",
          "score": 3.77
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:high_school_teacher",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 45,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "high",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "low",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.28,
      "contact_with_others_score": 4.78,
      "email_score": 4.96,
      "face_to_face_score": 4.73,
      "sitting_score": 3.0,
      "standing_score": 3.28,
      "walking_score": 2.58,
      "regular_schedule_pct": 91.54,
      "irregular_schedule_pct": 0.43,
      "seasonal_schedule_pct": 8.02
    },
    {
      "profession_id": "accountant",
      "profession_node_id": "profession:accountant",
      "profession_name": "Accountants and Auditors",
      "soc_code": "13-2011.00",
      "profession_family": "Business",
      "median_annual_wage_usd": 81680,
      "median_hourly_wage_usd": 39.27,
      "employment_count": 1562000,
      "outlook_growth_pct": 6,
      "openings_annual": 130800,
      "job_zone": "4",
      "onet_title": "Accountants and Auditors",
      "onet_description": "Examine, analyze, and interpret accounting records to prepare financial statements, give advice, or audit and evaluate statements prepared by others. Install or advise on systems of recording costs or other financial and budgetary data.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most work full time, and longer hours are common at certain times of the year.",
      "notes": "Most work full time, and longer hours are common at certain times of the year. Stable and structured, but repetitive knowledge work faces meaningful AI pressure.",
      "interest_tags": [
        "business",
        "research"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-2011.00",
      "source_links": [
        {
          "source_id": "source:ooh:accountant",
          "label": "Accountants and Auditors OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:accountant",
          "label": "Accountants and Auditors O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-2011.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "economics_and_accounting",
          "skill_name": "Economics and Accounting",
          "skill_category": "knowledge",
          "importance_score": 4.65,
          "level_score": 5.84
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 3.96,
          "level_score": 4.24
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 3.92,
          "level_score": 4.92
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.25
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.75,
          "level_score": 4.12
        }
      ],
      "interest_profile": [
        {
          "name": "Conventional",
          "score": 7.0
        },
        {
          "name": "First Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Second Interest High-Point",
          "score": 5.0
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:accountant",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 45,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "high",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.19,
      "contact_with_others_score": 4.55,
      "email_score": 4.98,
      "face_to_face_score": 4.7,
      "sitting_score": 4.5,
      "standing_score": 1.8,
      "walking_score": 1.56,
      "regular_schedule_pct": 0.0,
      "irregular_schedule_pct": 0.0,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "financial_analyst",
      "profession_node_id": "profession:financial_analyst",
      "profession_name": "Financial and Investment Analysts",
      "soc_code": "13-2051.00",
      "profession_family": "Business",
      "median_annual_wage_usd": 101350,
      "median_hourly_wage_usd": 48.73,
      "employment_count": 399800,
      "outlook_growth_pct": 6,
      "openings_annual": 30800,
      "job_zone": "4",
      "onet_title": "Financial and Investment Analysts",
      "onet_description": "Conduct quantitative analyses of information involving investment programs or financial data of public or private institutions, including valuation of businesses.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most work full time, and some work more than 40 hours per week.",
      "notes": "Most work full time, and some work more than 40 hours per week. Good upside, but higher-end finance paths often pull people toward major hubs and weaker boundaries.",
      "interest_tags": [
        "business",
        "research"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-2051.00",
      "source_links": [
        {
          "source_id": "source:ooh:financial_analyst",
          "label": "Financial and Investment Analysts OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:financial_analyst",
          "label": "Financial and Investment Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-2051.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [],
      "interest_profile": [
        {
          "name": "First Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 5.54
        },
        {
          "name": "Enterprising",
          "score": 5.09
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:financial_analyst",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 48,
      "schedule_type": "extended",
      "boundary_quality": "weak",
      "predictability": "medium",
      "ai_exposure": "high",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 0.0,
      "contact_with_others_score": 0.0,
      "email_score": 0.0,
      "face_to_face_score": 0.0,
      "sitting_score": 0.0,
      "standing_score": 0.0,
      "walking_score": 0.0,
      "regular_schedule_pct": 0.0,
      "irregular_schedule_pct": 0.0,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "management_analyst",
      "profession_node_id": "profession:management_analyst",
      "profession_name": "Management Analysts",
      "soc_code": "13-1111.00",
      "profession_family": "Business",
      "median_annual_wage_usd": 101190,
      "median_hourly_wage_usd": 48.65,
      "employment_count": 1001400,
      "outlook_growth_pct": 9,
      "openings_annual": 95400,
      "job_zone": "4",
      "onet_title": "Management Analysts",
      "onet_description": "Conduct organizational studies and evaluations, design systems and procedures, conduct work simplification and measurement studies, and prepare operations and procedures manuals to assist management in operating more efficiently and effectively. Includes program analysts and management consultants.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most management analysts work full time and overtime is common.",
      "notes": "Most management analysts work full time and overtime is common. Strong earnings and mobility, but travel and client demands often eat into evenings.",
      "interest_tags": [
        "business",
        "communication",
        "research"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-1111.00",
      "source_links": [
        {
          "source_id": "source:ooh:management_analyst",
          "label": "Management Analysts OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:management_analyst",
          "label": "Management Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-1111.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.71,
          "level_score": 5.33
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 4.38,
          "level_score": 4.9
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.12
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.12
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.12
        }
      ],
      "interest_profile": [
        {
          "name": "Conventional",
          "score": 6.05
        },
        {
          "name": "First Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Investigative",
          "score": 5.44
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:management_analyst",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 48,
      "schedule_type": "extended",
      "boundary_quality": "weak",
      "predictability": "low",
      "ai_exposure": "high",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.0,
      "contact_with_others_score": 4.25,
      "email_score": 5.0,
      "face_to_face_score": 4.74,
      "sitting_score": 4.19,
      "standing_score": 1.95,
      "walking_score": 1.9,
      "regular_schedule_pct": 61.9,
      "irregular_schedule_pct": 38.1,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "market_research_analyst",
      "profession_node_id": "profession:market_research_analyst",
      "profession_name": "Market Research Analysts",
      "soc_code": "13-1161.00",
      "profession_family": "Business",
      "median_annual_wage_usd": 76950,
      "median_hourly_wage_usd": 36.99,
      "employment_count": 941700,
      "outlook_growth_pct": 7,
      "openings_annual": 87200,
      "job_zone": "4",
      "onet_title": "Market Research Analysts and Marketing Specialists",
      "onet_description": "Research conditions in local, regional, national, or online markets. Gather information to determine potential sales of a product or service, or plan a marketing or advertising campaign. May gather information on competitors, prices, sales, and methods of marketing and distribution. May employ search marketing tactics, analyze web metrics, and develop recommendations to increase search engine ranking and visibility to target markets.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most market research analysts work full time during regular business hours.",
      "notes": "Most market research analysts work full time during regular business hours. Better hours than finance or consulting, but work is highly exposed to analytics automation and AI tooling.",
      "interest_tags": [
        "business",
        "research",
        "communication"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-1161.00",
      "source_links": [
        {
          "source_id": "source:ooh:market_research_analyst",
          "label": "Market Research Analysts OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:market_research_analyst",
          "label": "Market Research Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-1161.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.3,
          "level_score": 5.32
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.17,
          "level_score": 5.57
        },
        {
          "skill_id": "sales_and_marketing",
          "skill_name": "Sales and Marketing",
          "skill_category": "knowledge",
          "importance_score": 4.09,
          "level_score": 5.3
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.62
        },
        {
          "skill_id": "writing",
          "skill_name": "Writing",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.12
        }
      ],
      "interest_profile": [
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Enterprising",
          "score": 5.52
        },
        {
          "name": "First Interest High-Point",
          "score": 5.0
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:market_research_analyst",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.04,
      "contact_with_others_score": 4.22,
      "email_score": 5.0,
      "face_to_face_score": 4.22,
      "sitting_score": 4.65,
      "standing_score": 1.87,
      "walking_score": 1.35,
      "regular_schedule_pct": 65.22,
      "irregular_schedule_pct": 34.78,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "graphic_designer",
      "profession_node_id": "profession:graphic_designer",
      "profession_name": "Graphic Designers",
      "soc_code": "27-1024.00",
      "profession_family": "Design",
      "median_annual_wage_usd": 61720,
      "median_hourly_wage_usd": 29.67,
      "employment_count": 272900,
      "outlook_growth_pct": 2,
      "openings_annual": 21100,
      "job_zone": "4",
      "onet_title": "Graphic Designers",
      "onet_description": "Design or create graphics to meet specific commercial or promotional needs, such as packaging, displays, or logos. May use a variety of mediums to achieve artistic or decorative effects.",
      "entry_level_education": "bachelors_or_portfolio",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most graphic designers work full time, but schedules can vary for self-employed workers.",
      "notes": "Most graphic designers work full time, but schedules can vary for self-employed workers. Creative lifestyle can feel flexible, but earnings are more modest and tooling is highly AI-exposed.",
      "interest_tags": [
        "design",
        "communication"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/27-1024.00",
      "source_links": [
        {
          "source_id": "source:ooh:graphic_designer",
          "label": "Graphic Designers OOH page",
          "url": "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:graphic_designer",
          "label": "Graphic Designers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/27-1024.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "design",
          "skill_name": "Design",
          "skill_category": "knowledge",
          "importance_score": 4.7,
          "level_score": 5.8
        },
        {
          "skill_id": "fine_arts",
          "skill_name": "Fine Arts",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 5.65
        },
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 4.95
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.75,
          "level_score": 3.25
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 3.38,
          "level_score": 3.75
        }
      ],
      "interest_profile": [
        {
          "name": "Artistic",
          "score": 7.0
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 3.92
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:graphic_designer",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.65,
      "contact_with_others_score": 4.25,
      "email_score": 4.9,
      "face_to_face_score": 4.26,
      "sitting_score": 4.79,
      "standing_score": 1.89,
      "walking_score": 1.47,
      "regular_schedule_pct": 65.0,
      "irregular_schedule_pct": 35.0,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "web_digital_interface_designer",
      "profession_node_id": "profession:web_digital_interface_designer",
      "profession_name": "Web and Digital Interface Designers",
      "soc_code": "15-1255.00",
      "profession_family": "Design",
      "median_annual_wage_usd": 98300,
      "median_hourly_wage_usd": 47.26,
      "employment_count": 252000,
      "outlook_growth_pct": 8,
      "openings_annual": 16400,
      "job_zone": "4",
      "onet_title": "Web and Digital Interface Designers",
      "onet_description": "Design digital user interfaces or websites. Develop and test layouts, interfaces, functionality, and navigation menus to ensure compatibility and usability across browsers or devices. May use web framework applications as well as client-side code and processes. May evaluate web design following web and accessibility standards, and may analyze web use metrics and optimize websites for marketability and search engine ranking. May design and test interfaces that facilitate the human-computer interaction and maximize the usability of digital devices, websites, and software with a focus on aesthetics and design. May create graphics used in websites and manage website content and links.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most web developers and digital designers work full time.",
      "notes": "Most web developers and digital designers work full time. Combines design and tech with good upside, but interface work is being reshaped quickly by AI tooling.",
      "interest_tags": [
        "design",
        "tech",
        "communication"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1255.00",
      "source_links": [
        {
          "source_id": "source:ooh:web_digital_interface_designer",
          "label": "Web and Digital Interface Designers OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:web_digital_interface_designer",
          "label": "Web and Digital Interface Designers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1255.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [],
      "interest_profile": [
        {
          "name": "Third Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Investigative",
          "score": 4.88
        },
        {
          "name": "Artistic",
          "score": 4.48
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:web_digital_interface_designer",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 0.0,
      "contact_with_others_score": 0.0,
      "email_score": 0.0,
      "face_to_face_score": 0.0,
      "sitting_score": 0.0,
      "standing_score": 0.0,
      "walking_score": 0.0,
      "regular_schedule_pct": 0.0,
      "irregular_schedule_pct": 0.0,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "public_relations_specialist",
      "profession_node_id": "profession:public_relations_specialist",
      "profession_name": "Public Relations Specialists",
      "soc_code": "27-3031.00",
      "profession_family": "Communication",
      "median_annual_wage_usd": 69780,
      "median_hourly_wage_usd": 33.55,
      "employment_count": 315900,
      "outlook_growth_pct": 5,
      "openings_annual": 27600,
      "job_zone": "4",
      "onet_title": "Public Relations Specialists",
      "onet_description": "Promote or create an intended public image for individuals, groups, or organizations. May write or select material for release to various communications media. May specialize in using social media.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most public relations specialists work full time. Some work more than 40 hours per week.",
      "notes": "Most public relations specialists work full time. Some work more than 40 hours per week. Good for communicators, but reputation work can mean urgency, client pressure, and more hub concentration than students expect.",
      "interest_tags": [
        "communication",
        "business"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/media-and-communication/public-relations-specialists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/27-3031.00",
      "source_links": [
        {
          "source_id": "source:ooh:public_relations_specialist",
          "label": "Public Relations Specialists OOH page",
          "url": "https://www.bls.gov/ooh/media-and-communication/public-relations-specialists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:public_relations_specialist",
          "label": "Public Relations Specialists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/27-3031.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "communications_and_media",
          "skill_name": "Communications and Media",
          "skill_category": "knowledge",
          "importance_score": 4.91,
          "level_score": 6.23
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.73,
          "level_score": 5.32
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.25
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.12
        },
        {
          "skill_id": "social_perceptiveness",
          "skill_name": "Social Perceptiveness",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.12
        }
      ],
      "interest_profile": [
        {
          "name": "Enterprising",
          "score": 5.82
        },
        {
          "name": "First Interest High-Point",
          "score": 5.0
        },
        {
          "name": "Artistic",
          "score": 4.68
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:public_relations_specialist",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.55,
      "contact_with_others_score": 4.43,
      "email_score": 4.95,
      "face_to_face_score": 4.82,
      "sitting_score": 3.9,
      "standing_score": 2.32,
      "walking_score": 1.91,
      "regular_schedule_pct": 68.18,
      "irregular_schedule_pct": 31.82,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "electrician",
      "profession_node_id": "profession:electrician",
      "profession_name": "Electricians",
      "soc_code": "47-2111.00",
      "profession_family": "Trades",
      "median_annual_wage_usd": 62880,
      "median_hourly_wage_usd": 30.23,
      "employment_count": 779800,
      "outlook_growth_pct": 11,
      "openings_annual": 80400,
      "job_zone": "3",
      "onet_title": "Electricians",
      "onet_description": "Install, maintain, and repair electrical wiring, equipment, and fixtures. Ensure that work is in accordance with relevant codes. May install or service street lights, intercom systems, or electrical control systems.",
      "entry_level_education": "high_school_plus_apprenticeship",
      "typical_training_years_post_hs": 4,
      "hours_note": "Work schedules may include evenings and weekends and may vary during bad weather.",
      "notes": "Work schedules may include evenings and weekends and may vary during bad weather. Strong local demand and low AI risk, with a clearer end-of-day cutoff than many office jobs.",
      "interest_tags": [
        "hands_on"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
      "onet_url": "https://www.onetonline.org/link/summary/47-2111.00",
      "source_links": [
        {
          "source_id": "source:ooh:electrician",
          "label": "Electricians OOH page",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:electrician",
          "label": "Electricians O*NET profile",
          "url": "https://www.onetonline.org/link/summary/47-2111.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "troubleshooting",
          "skill_name": "Troubleshooting",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.0
        },
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 3.67,
          "level_score": 4.62
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 3.58,
          "level_score": 3.66
        },
        {
          "skill_id": "repairing",
          "skill_name": "Repairing",
          "skill_category": "skill",
          "importance_score": 3.5,
          "level_score": 3.75
        },
        {
          "skill_id": "mechanical",
          "skill_name": "Mechanical",
          "skill_category": "knowledge",
          "importance_score": 3.42,
          "level_score": 3.41
        }
      ],
      "interest_profile": [
        {
          "name": "Realistic",
          "score": 7.0
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 4.09
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:electrician",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.32,
      "contact_with_others_score": 4.76,
      "email_score": 3.95,
      "face_to_face_score": 4.93,
      "sitting_score": 1.81,
      "standing_score": 4.55,
      "walking_score": 4.23,
      "regular_schedule_pct": 67.49,
      "irregular_schedule_pct": 32.51,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "plumber",
      "profession_node_id": "profession:plumber",
      "profession_name": "Plumbers",
      "soc_code": "47-2152.00",
      "profession_family": "Trades",
      "median_annual_wage_usd": 62970,
      "median_hourly_wage_usd": 30.27,
      "employment_count": 504500,
      "outlook_growth_pct": 4,
      "openings_annual": 44000,
      "job_zone": "3",
      "onet_title": "Plumbers, Pipefitters, and Steamfitters",
      "onet_description": "Assemble, install, alter, and repair pipelines or pipe systems that carry water, steam, air, or other liquids or gases. May install heating and cooling equipment and mechanical control systems. Includes sprinkler fitters.",
      "entry_level_education": "high_school_plus_apprenticeship",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most plumbers, pipefitters, and steamfitters work full time, including nights and weekends, and they are often on call to handle emergencies.",
      "notes": "Most plumbers, pipefitters, and steamfitters work full time, including nights and weekends, and they are often on call to handle emergencies. Great paid-training path with local durability, but emergency work can disrupt evenings and weekends.",
      "interest_tags": [
        "hands_on"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
      "onet_url": "https://www.onetonline.org/link/summary/47-2152.00",
      "source_links": [
        {
          "source_id": "source:ooh:plumber",
          "label": "Plumbers OOH page",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:plumber",
          "label": "Plumbers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/47-2152.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.35,
          "level_score": 5.36
        },
        {
          "skill_id": "mechanical",
          "skill_name": "Mechanical",
          "skill_category": "knowledge",
          "importance_score": 4.33,
          "level_score": 4.86
        },
        {
          "skill_id": "design",
          "skill_name": "Design",
          "skill_category": "knowledge",
          "importance_score": 3.76,
          "level_score": 5.05
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.5,
          "level_score": 3.5
        },
        {
          "skill_id": "troubleshooting",
          "skill_name": "Troubleshooting",
          "skill_category": "skill",
          "importance_score": 3.25,
          "level_score": 3.12
        }
      ],
      "interest_profile": [
        {
          "name": "Realistic",
          "score": 7.0
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 3.72
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:plumber",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 44,
      "schedule_type": "irregular",
      "boundary_quality": "strong",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "high",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.27,
      "contact_with_others_score": 4.11,
      "email_score": 3.42,
      "face_to_face_score": 4.54,
      "sitting_score": 1.36,
      "standing_score": 4.69,
      "walking_score": 3.86,
      "regular_schedule_pct": 61.48,
      "irregular_schedule_pct": 38.52,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "hvac_technician",
      "profession_node_id": "profession:hvac_technician",
      "profession_name": "HVAC Technicians",
      "soc_code": "49-9021.00",
      "profession_family": "Trades",
      "median_annual_wage_usd": 59810,
      "median_hourly_wage_usd": 28.75,
      "employment_count": 441200,
      "outlook_growth_pct": 8,
      "openings_annual": 40100,
      "job_zone": "3",
      "onet_title": "Heating, Air Conditioning, and Refrigeration Mechanics and Installers",
      "onet_description": "Install or repair heating, central air conditioning, HVAC, or refrigeration systems, including oil burners, hot-air furnaces, and heating stoves.",
      "entry_level_education": "postsecondary_nondegree_or_apprenticeship",
      "typical_training_years_post_hs": 1,
      "hours_note": "Work may include evening or weekend hours, especially during peak repair seasons.",
      "notes": "Work may include evening or weekend hours, especially during peak repair seasons. Strong practical route with decent pay and low AI exposure, but schedule control depends on service demand.",
      "interest_tags": [
        "hands_on",
        "tech"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/49-9021.00",
      "source_links": [
        {
          "source_id": "source:ooh:hvac_technician",
          "label": "HVAC Technicians OOH page",
          "url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:hvac_technician",
          "label": "HVAC Technicians O*NET profile",
          "url": "https://www.onetonline.org/link/summary/49-9021.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "mechanical",
          "skill_name": "Mechanical",
          "skill_category": "knowledge",
          "importance_score": 4.67,
          "level_score": 5.93
        },
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.18,
          "level_score": 4.97
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.03,
          "level_score": 4.85
        },
        {
          "skill_id": "operations_monitoring",
          "skill_name": "Operations Monitoring",
          "skill_category": "skill",
          "importance_score": 3.62,
          "level_score": 3.75
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.5,
          "level_score": 3.62
        }
      ],
      "interest_profile": [
        {
          "name": "Realistic",
          "score": 6.96
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 4.29
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:hvac_technician",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "irregular",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.8,
      "contact_with_others_score": 4.61,
      "email_score": 3.89,
      "face_to_face_score": 4.43,
      "sitting_score": 2.02,
      "standing_score": 3.9,
      "walking_score": 3.09,
      "regular_schedule_pct": 48.83,
      "irregular_schedule_pct": 40.81,
      "seasonal_schedule_pct": 10.36
    },
    {
      "profession_id": "tile_stone_setter",
      "profession_node_id": "profession:tile_stone_setter",
      "profession_name": "Tile and Stone Setters",
      "soc_code": "47-2044.00",
      "profession_family": "Trades",
      "median_annual_wage_usd": 60360,
      "median_hourly_wage_usd": 29.02,
      "employment_count": 23400,
      "outlook_growth_pct": 5,
      "openings_annual": 2300,
      "job_zone": "2",
      "onet_title": "Tile and Stone Setters",
      "onet_description": "Apply hard tile, stone, and comparable materials to walls, floors, ceilings, countertops, and roof decks.",
      "entry_level_education": "postsecondary_nondegree_or_apprenticeship",
      "typical_training_years_post_hs": 1,
      "hours_note": "Most flooring installers and tile and stone setters work full time.",
      "notes": "Most flooring installers and tile and stone setters work full time. Physically demanding, but often easier to protect evenings and weekends than in elite knowledge-work tracks.",
      "interest_tags": [
        "hands_on"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
      "onet_url": "https://www.onetonline.org/link/summary/47-2044.00",
      "source_links": [
        {
          "source_id": "source:ooh:tile_stone_setter",
          "label": "Tile and Stone Setters OOH page",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:tile_stone_setter",
          "label": "Tile and Stone Setters O*NET profile",
          "url": "https://www.onetonline.org/link/summary/47-2044.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 3.97,
          "level_score": 3.88
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 3.35,
          "level_score": 3.27
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.12,
          "level_score": 3.0
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 3.04,
          "level_score": 2.99
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 3.0,
          "level_score": 3.12
        }
      ],
      "interest_profile": [
        {
          "name": "Realistic",
          "score": 7.0
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 3.66
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:tile_stone_setter",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.57,
      "contact_with_others_score": 3.81,
      "email_score": 2.06,
      "face_to_face_score": 4.55,
      "sitting_score": 1.43,
      "standing_score": 4.05,
      "walking_score": 2.53,
      "regular_schedule_pct": 68.72,
      "irregular_schedule_pct": 31.28,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "construction_manager",
      "profession_node_id": "profession:construction_manager",
      "profession_name": "Construction Managers",
      "soc_code": "11-9021.00",
      "profession_family": "Trades",
      "median_annual_wage_usd": 106980,
      "median_hourly_wage_usd": 51.43,
      "employment_count": 554300,
      "outlook_growth_pct": 9,
      "openings_annual": 45400,
      "job_zone": "4",
      "onet_title": "Construction Managers",
      "onet_description": "Plan, direct, or coordinate, usually through subordinate supervisory personnel, activities concerned with the construction and maintenance of structures, facilities, and systems. Participate in the conceptual development of a construction project and oversee its organization, scheduling, budgeting, and implementation. Includes managers in specialized construction fields, such as carpentry or plumbing.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most construction managers work full time, and some work more than 40 hours per week.",
      "notes": "Most construction managers work full time, and some work more than 40 hours per week. High pay with strong real-world demand, but schedules move with projects and deadlines.",
      "interest_tags": [
        "hands_on",
        "business"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/management/construction-managers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/11-9021.00",
      "source_links": [
        {
          "source_id": "source:ooh:construction_manager",
          "label": "Construction Managers OOH page",
          "url": "https://www.bls.gov/ooh/management/construction-managers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:construction_manager",
          "label": "Construction Managers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/11-9021.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.7,
          "level_score": 5.75
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 4.25,
          "level_score": 4.95
        },
        {
          "skill_id": "judgment_and_decision_making",
          "skill_name": "Judgment and Decision Making",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.38
        },
        {
          "skill_id": "management_of_personnel_resources",
          "skill_name": "Management of Personnel Resources",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.12
        },
        {
          "skill_id": "coordination",
          "skill_name": "Coordination",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.5
        }
      ],
      "interest_profile": [
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Enterprising",
          "score": 5.73
        },
        {
          "name": "First Interest High-Point",
          "score": 5.0
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:construction_manager",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 48,
      "schedule_type": "extended",
      "boundary_quality": "moderate",
      "predictability": "low",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.25,
      "contact_with_others_score": 4.6,
      "email_score": 4.9,
      "face_to_face_score": 4.68,
      "sitting_score": 2.65,
      "standing_score": 3.6,
      "walking_score": 2.95,
      "regular_schedule_pct": 40.0,
      "irregular_schedule_pct": 60.0,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "physician",
      "profession_node_id": "profession:physician",
      "profession_name": "Physicians and Surgeons",
      "soc_code": "29-1218.00",
      "profession_family": "Healthcare",
      "median_annual_wage_usd": 239200,
      "median_hourly_wage_usd": 115.0,
      "employment_count": 853700,
      "outlook_growth_pct": 3,
      "openings_annual": 23400,
      "job_zone": "5",
      "onet_title": "Obstetricians and Gynecologists",
      "onet_description": "Provide medical care related to pregnancy or childbirth. Diagnose, treat, and help prevent diseases of women, particularly those affecting the reproductive system. May also provide general care to women. May perform both medical and gynecological surgery functions.",
      "entry_level_education": "doctoral_or_professional",
      "typical_training_years_post_hs": 10,
      "hours_note": "Most physicians and surgeons work full time. Some worked more than 60 hours per week in 2024.",
      "notes": "Most physicians and surgeons work full time. Some worked more than 60 hours per week in 2024. Extremely strong earnings, but the lifestyle cost is often nights, weekends, and limited schedule control.",
      "interest_tags": [
        "healthcare",
        "helping_people",
        "research"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/physicians-and-surgeons.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-1218.00",
      "source_links": [
        {
          "source_id": "source:ooh:physician",
          "label": "Physicians and Surgeons OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/physicians-and-surgeons.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:physician",
          "label": "Physicians and Surgeons O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-1218.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 5.0,
          "level_score": 6.64
        },
        {
          "skill_id": "biology",
          "skill_name": "Biology",
          "skill_category": "knowledge",
          "importance_score": 4.72,
          "level_score": 5.22
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 4.5
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 4.38,
          "level_score": 5.0
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.25,
          "level_score": 5.25
        }
      ],
      "interest_profile": [
        {
          "name": "Investigative",
          "score": 5.5
        },
        {
          "name": "Social",
          "score": 5.45
        },
        {
          "name": "Realistic",
          "score": 4.59
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:physician",
      "avg_weekly_hours_band": "50_60",
      "avg_weekly_hours_estimate": 55,
      "schedule_type": "irregular",
      "boundary_quality": "weak",
      "predictability": "low",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "high",
      "night_work_likelihood": "high",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.92,
      "contact_with_others_score": 4.98,
      "email_score": 4.7,
      "face_to_face_score": 5.0,
      "sitting_score": 2.6,
      "standing_score": 3.52,
      "walking_score": 2.84,
      "regular_schedule_pct": 87.77,
      "irregular_schedule_pct": 12.23,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "economist",
      "profession_node_id": "profession:economist",
      "profession_name": "Economists",
      "soc_code": "19-3011.00",
      "profession_family": "Research",
      "median_annual_wage_usd": 120000,
      "median_hourly_wage_usd": 57.69,
      "employment_count": 18800,
      "outlook_growth_pct": 5,
      "openings_annual": 1400,
      "job_zone": "5",
      "onet_title": "Economists",
      "onet_description": "Conduct research, prepare reports, or formulate plans to address economic problems related to the production and distribution of goods and services or monetary and fiscal policy. May collect and process economic and statistical data using sampling techniques and econometric methods.",
      "entry_level_education": "masters_or_bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most work full time.",
      "notes": "Most work full time. Analytical and policy-oriented with strong boundaries for many roles, but fewer openings and more hub concentration than general business jobs.",
      "interest_tags": [
        "research",
        "business"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/life-physical-and-social-science/economists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/19-3011.00",
      "source_links": [
        {
          "source_id": "source:ooh:economist",
          "label": "Economists OOH page",
          "url": "https://www.bls.gov/ooh/life-physical-and-social-science/economists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:economist",
          "label": "Economists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/19-3011.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 4.54,
          "level_score": 6.08
        },
        {
          "skill_id": "economics_and_accounting",
          "skill_name": "Economics and Accounting",
          "skill_category": "knowledge",
          "importance_score": 4.46,
          "level_score": 5.5
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.75
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.75
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 4.12,
          "level_score": 4.25
        }
      ],
      "interest_profile": [
        {
          "name": "Investigative",
          "score": 7.0
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Third Interest High-Point",
          "score": 5.0
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:economist",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 41,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "medium",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.62,
      "contact_with_others_score": 3.5,
      "email_score": 4.92,
      "face_to_face_score": 4.43,
      "sitting_score": 4.71,
      "standing_score": 1.92,
      "walking_score": 1.33,
      "regular_schedule_pct": 87.5,
      "irregular_schedule_pct": 12.5,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "biological_technician",
      "profession_node_id": "profession:biological_technician",
      "profession_name": "Biological Technicians",
      "soc_code": "19-4021.00",
      "profession_family": "Science",
      "median_annual_wage_usd": 51270,
      "median_hourly_wage_usd": 24.65,
      "employment_count": 82000,
      "outlook_growth_pct": 7,
      "openings_annual": 6900,
      "job_zone": "4",
      "onet_title": "Biological Technicians",
      "onet_description": "Assist biological and medical scientists. Set up, operate, and maintain laboratory instruments and equipment, monitor experiments, collect data and samples, make observations, and calculate and record results. May analyze organic substances, such as blood, food, and drugs.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most biological technicians work full time.",
      "notes": "Most biological technicians work full time. Good science-adjacent entry path, but the earnings ceiling is lower unless you add more schooling.",
      "interest_tags": [
        "research",
        "healthcare"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/life-physical-and-social-science/biological-technicians.htm",
      "onet_url": "https://www.onetonline.org/link/summary/19-4021.00",
      "source_links": [
        {
          "source_id": "source:ooh:biological_technician",
          "label": "Biological Technicians OOH page",
          "url": "https://www.bls.gov/ooh/life-physical-and-social-science/biological-technicians.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:biological_technician",
          "label": "Biological Technicians O*NET profile",
          "url": "https://www.onetonline.org/link/summary/19-4021.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "biology",
          "skill_name": "Biology",
          "skill_category": "knowledge",
          "importance_score": 4.43,
          "level_score": 5.74
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.62
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.0
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 3.78,
          "level_score": 3.75
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.75,
          "level_score": 3.75
        }
      ],
      "interest_profile": [
        {
          "name": "First Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 5.62
        },
        {
          "name": "Realistic",
          "score": 5.6
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:biological_technician",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.33,
      "contact_with_others_score": 4.15,
      "email_score": 4.85,
      "face_to_face_score": 4.82,
      "sitting_score": 3.2,
      "standing_score": 2.81,
      "walking_score": 2.4,
      "regular_schedule_pct": 53.72,
      "irregular_schedule_pct": 40.56,
      "seasonal_schedule_pct": 5.72
    },
    {
      "profession_id": "civil_engineer",
      "profession_node_id": "profession:civil_engineer",
      "profession_name": "Civil Engineers",
      "soc_code": "17-2051.00",
      "profession_family": "Engineering",
      "median_annual_wage_usd": 99590,
      "median_hourly_wage_usd": 47.88,
      "employment_count": 368900,
      "outlook_growth_pct": 5,
      "openings_annual": 23600,
      "job_zone": "4",
      "onet_title": "Civil Engineers",
      "onet_description": "Perform engineering duties in planning, designing, and overseeing construction and maintenance of building structures and facilities, such as roads, railroads, airports, bridges, harbors, channels, dams, irrigation projects, pipelines, power plants, and water and sewage systems.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most civil engineers work full time, and some work more than 40 hours per week.",
      "notes": "Most civil engineers work full time, and some work more than 40 hours per week. Strong infrastructure-linked career with durable demand, though project deadlines can stretch the workweek.",
      "interest_tags": [
        "research",
        "hands_on"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/17-2051.00",
      "source_links": [
        {
          "source_id": "source:ooh:civil_engineer",
          "label": "Civil Engineers OOH page",
          "url": "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:civil_engineer",
          "label": "Civil Engineers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/17-2051.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "design",
          "skill_name": "Design",
          "skill_category": "knowledge",
          "importance_score": 4.7,
          "level_score": 5.95
        },
        {
          "skill_id": "engineering_and_technology",
          "skill_name": "Engineering and Technology",
          "skill_category": "knowledge",
          "importance_score": 4.67,
          "level_score": 6.43
        },
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.53,
          "level_score": 5.33
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.0
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 5.0
        }
      ],
      "interest_profile": [
        {
          "name": "Realistic",
          "score": 6.43
        },
        {
          "name": "Third Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Investigative",
          "score": 5.15
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:civil_engineer",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 44,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.0,
      "contact_with_others_score": 4.19,
      "email_score": 5.0,
      "face_to_face_score": 4.76,
      "sitting_score": 4.14,
      "standing_score": 2.19,
      "walking_score": 2.05,
      "regular_schedule_pct": 71.43,
      "irregular_schedule_pct": 23.81,
      "seasonal_schedule_pct": 4.76
    },
    {
      "profession_id": "mechanical_engineer",
      "profession_node_id": "profession:mechanical_engineer",
      "profession_name": "Mechanical Engineers",
      "soc_code": "17-2141.00",
      "profession_family": "Engineering",
      "median_annual_wage_usd": 102320,
      "median_hourly_wage_usd": 49.19,
      "employment_count": 293100,
      "outlook_growth_pct": 9,
      "openings_annual": 18100,
      "job_zone": "4",
      "onet_title": "Mechanical Engineers",
      "onet_description": "Perform engineering duties in planning and designing tools, engines, machines, and other mechanically functioning equipment. Oversee installation, operation, maintenance, and repair of equipment such as centralized heat, gas, water, and steam systems.",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most mechanical engineers work full time, and some work more than 40 hours a week.",
      "notes": "Most mechanical engineers work full time, and some work more than 40 hours a week. Solid upside with broad industry relevance, but it demands stronger technical preparation than many students realize.",
      "interest_tags": [
        "research",
        "hands_on",
        "tech"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/17-2141.00",
      "source_links": [
        {
          "source_id": "source:ooh:mechanical_engineer",
          "label": "Mechanical Engineers OOH page",
          "url": "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:mechanical_engineer",
          "label": "Mechanical Engineers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/17-2141.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "design",
          "skill_name": "Design",
          "skill_category": "knowledge",
          "importance_score": 4.5,
          "level_score": 6.04
        },
        {
          "skill_id": "engineering_and_technology",
          "skill_name": "Engineering and Technology",
          "skill_category": "knowledge",
          "importance_score": 4.46,
          "level_score": 5.65
        },
        {
          "skill_id": "production_and_processing",
          "skill_name": "Production and Processing",
          "skill_category": "knowledge",
          "importance_score": 4.34,
          "level_score": 4.49
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.75
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.12
        }
      ],
      "interest_profile": [
        {
          "name": "Realistic",
          "score": 6.39
        },
        {
          "name": "Third Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Investigative",
          "score": 5.12
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:mechanical_engineer",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 44,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.51,
      "contact_with_others_score": 4.73,
      "email_score": 5.0,
      "face_to_face_score": 4.41,
      "sitting_score": 3.81,
      "standing_score": 2.4,
      "walking_score": 2.24,
      "regular_schedule_pct": 93.43,
      "irregular_schedule_pct": 1.46,
      "seasonal_schedule_pct": 5.12
    },
    {
      "profession_id": "social_worker",
      "profession_node_id": "profession:social_worker",
      "profession_name": "Social Workers",
      "soc_code": "21-1021.00",
      "profession_family": "Social Service",
      "median_annual_wage_usd": 61330,
      "median_hourly_wage_usd": 29.49,
      "employment_count": 728300,
      "outlook_growth_pct": 6,
      "openings_annual": 74000,
      "job_zone": "4",
      "onet_title": "Child, Family, and School Social Workers",
      "onet_description": "Provide social services and assistance to improve the social and psychological functioning of children and their families and to maximize the family well-being and the academic functioning of children. May assist parents, arrange adoptions, and find foster homes for abandoned or abused children. In schools, they address such problems as teenage pregnancy, misbehavior, and truancy. May also advise teachers.",
      "entry_level_education": "bachelors_or_masters",
      "typical_training_years_post_hs": 4,
      "hours_note": "Most social workers are employed full time. They sometimes work evenings, weekends, and holidays to see clients or attend meetings, and they may be on call.",
      "notes": "Most social workers are employed full time. They sometimes work evenings, weekends, and holidays to see clients or attend meetings, and they may be on call. Impactful and widely needed, but the emotional load is real and premium earnings often require clinical specialization or leadership progression.",
      "interest_tags": [
        "helping_people",
        "communication"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/community-and-social-service/social-workers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/21-1021.00",
      "source_links": [
        {
          "source_id": "source:ooh:social_worker",
          "label": "Social Workers OOH page",
          "url": "https://www.bls.gov/ooh/community-and-social-service/social-workers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:social_worker",
          "label": "Social Workers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/21-1021.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 4.88,
          "level_score": 4.75
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 4.5,
          "level_score": 4.12
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.32,
          "level_score": 5.21
        },
        {
          "skill_id": "therapy_and_counseling",
          "skill_name": "Therapy and Counseling",
          "skill_category": "knowledge",
          "importance_score": 4.13,
          "level_score": 5.13
        },
        {
          "skill_id": "psychology",
          "skill_name": "Psychology",
          "skill_category": "knowledge",
          "importance_score": 4.13,
          "level_score": 5.04
        }
      ],
      "interest_profile": [
        {
          "name": "Social",
          "score": 6.85
        },
        {
          "name": "First Interest High-Point",
          "score": 4.0
        },
        {
          "name": "Conventional",
          "score": 3.57
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:social_worker",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.33,
      "contact_with_others_score": 4.95,
      "email_score": 5.0,
      "face_to_face_score": 4.95,
      "sitting_score": 3.5,
      "standing_score": 2.43,
      "walking_score": 2.12,
      "regular_schedule_pct": 66.15,
      "irregular_schedule_pct": 33.63,
      "seasonal_schedule_pct": 0.23
    },
    {
      "profession_id": "paralegal",
      "profession_node_id": "profession:paralegal",
      "profession_name": "Paralegals and Legal Assistants",
      "soc_code": "23-2011.00",
      "profession_family": "Legal",
      "median_annual_wage_usd": 61010,
      "median_hourly_wage_usd": 29.33,
      "employment_count": 352700,
      "outlook_growth_pct": 1,
      "openings_annual": 37700,
      "job_zone": "3",
      "onet_title": "Paralegals and Legal Assistants",
      "onet_description": "Assist lawyers by investigating facts, preparing legal documents, or researching legal precedent. Conduct research to support a legal proceeding, to formulate a defense, or to initiate legal action.",
      "entry_level_education": "associates_or_certificate",
      "typical_training_years_post_hs": 2,
      "hours_note": "Most paralegals and legal assistants work full time.",
      "notes": "Most paralegals and legal assistants work full time. A practical legal-services route with predictable office hours for many roles, but document-heavy work is exposed to AI and many higher-paying jobs cluster near bigger metros.",
      "interest_tags": [
        "communication",
        "research",
        "business"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm",
      "onet_url": "https://www.onetonline.org/link/summary/23-2011.00",
      "source_links": [
        {
          "source_id": "source:ooh:paralegal",
          "label": "Paralegals and Legal Assistants OOH page",
          "url": "https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:paralegal",
          "label": "Paralegals and Legal Assistants O*NET profile",
          "url": "https://www.onetonline.org/link/summary/23-2011.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "law_and_government",
          "skill_name": "Law and Government",
          "skill_category": "knowledge",
          "importance_score": 4.78,
          "level_score": 4.87
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.42,
          "level_score": 4.88
        },
        {
          "skill_id": "administrative",
          "skill_name": "Administrative",
          "skill_category": "knowledge",
          "importance_score": 4.16,
          "level_score": 5.36
        },
        {
          "skill_id": "writing",
          "skill_name": "Writing",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 3.88
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.0
        }
      ],
      "interest_profile": [
        {
          "name": "First Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 5.28
        },
        {
          "name": "Investigative",
          "score": 5.04
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:paralegal",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 41,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "high",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.36,
      "contact_with_others_score": 4.53,
      "email_score": 5.0,
      "face_to_face_score": 4.69,
      "sitting_score": 4.77,
      "standing_score": 1.7,
      "walking_score": 1.38,
      "regular_schedule_pct": 94.33,
      "irregular_schedule_pct": 5.67,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "dental_hygienist",
      "profession_node_id": "profession:dental_hygienist",
      "profession_name": "Dental Hygienists",
      "soc_code": "29-1292.00",
      "profession_family": "Healthcare",
      "median_annual_wage_usd": 94260,
      "median_hourly_wage_usd": 45.32,
      "employment_count": 221600,
      "outlook_growth_pct": 7,
      "openings_annual": 15300,
      "job_zone": "3",
      "onet_title": "Dental Hygienists",
      "onet_description": "Administer oral hygiene care to patients. Assess patient oral hygiene problems or needs and maintain health records. Advise patients on oral health maintenance and disease prevention. May provide advanced care such as providing fluoride treatment or administering topical anesthesia.",
      "entry_level_education": "associates",
      "typical_training_years_post_hs": 3,
      "hours_note": "Many dental hygienists work part time, and some work for more than one dentist.",
      "notes": "Many dental hygienists work part time, and some work for more than one dentist. One of the strongest shorter healthcare credentials for earnings and schedule quality.",
      "interest_tags": [
        "healthcare",
        "helping_people"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-1292.00",
      "source_links": [
        {
          "source_id": "source:ooh:dental_hygienist",
          "label": "Dental Hygienists OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:dental_hygienist",
          "label": "Dental Hygienists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-1292.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 4.59,
          "level_score": 4.1
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 3.94,
          "level_score": 3.55
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.75,
          "level_score": 4.0
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.5,
          "level_score": 3.12
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 3.5,
          "level_score": 3.0
        }
      ],
      "interest_profile": [
        {
          "name": "Social",
          "score": 5.35
        },
        {
          "name": "Realistic",
          "score": 5.27
        },
        {
          "name": "Investigative",
          "score": 4.52
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:dental_hygienist",
      "avg_weekly_hours_band": "35_45",
      "avg_weekly_hours_estimate": 34,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.74,
      "contact_with_others_score": 4.97,
      "email_score": 2.68,
      "face_to_face_score": 4.97,
      "sitting_score": 4.09,
      "standing_score": 2.24,
      "walking_score": 1.96,
      "regular_schedule_pct": 100.0,
      "irregular_schedule_pct": 0.0,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "radiologic_technologist",
      "profession_node_id": "profession:radiologic_technologist",
      "profession_name": "Radiologic Technologists",
      "soc_code": "29-2034.00",
      "profession_family": "Healthcare",
      "median_annual_wage_usd": 77660,
      "median_hourly_wage_usd": 37.34,
      "employment_count": 228000,
      "outlook_growth_pct": 5,
      "openings_annual": 15400,
      "job_zone": "3",
      "onet_title": "Radiologic Technologists and Technicians",
      "onet_description": "Take x-rays and CAT scans or administer nonradioactive materials into patient's bloodstream for diagnostic or research purposes. Includes radiologic technologists and technicians who specialize in other scanning modalities.",
      "entry_level_education": "associates",
      "typical_training_years_post_hs": 2,
      "hours_note": "Most radiologic and MRI technologists work full time. Some work evenings, weekends, or overnight.",
      "notes": "Most radiologic and MRI technologists work full time. Some work evenings, weekends, or overnight. Good technical-healthcare path with moderate pay, but hospitals may require off-hour coverage.",
      "interest_tags": [
        "healthcare",
        "hands_on"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-2034.00",
      "source_links": [
        {
          "source_id": "source:ooh:radiologic_technologist",
          "label": "Radiologic Technologists OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:radiologic_technologist",
          "label": "Radiologic Technologists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-2034.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 4.27,
          "level_score": 4.21
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.17,
          "level_score": 4.95
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.14,
          "level_score": 3.69
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.75,
          "level_score": 3.75
        },
        {
          "skill_id": "social_perceptiveness",
          "skill_name": "Social Perceptiveness",
          "skill_category": "skill",
          "importance_score": 3.62,
          "level_score": 3.12
        }
      ],
      "interest_profile": [
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Realistic",
          "score": 5.9
        },
        {
          "name": "Conventional",
          "score": 5.08
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:radiologic_technologist",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "shift",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "medium",
      "heuristic_flag": "mixed",
      "time_pressure_score": 3.66,
      "contact_with_others_score": 4.97,
      "email_score": 4.42,
      "face_to_face_score": 4.5,
      "sitting_score": 2.59,
      "standing_score": 3.63,
      "walking_score": 3.64,
      "regular_schedule_pct": 96.27,
      "irregular_schedule_pct": 3.73,
      "seasonal_schedule_pct": 0.0
    },
    {
      "profession_id": "respiratory_therapist",
      "profession_node_id": "profession:respiratory_therapist",
      "profession_name": "Respiratory Therapists",
      "soc_code": "29-1126.00",
      "profession_family": "Healthcare",
      "median_annual_wage_usd": 81430,
      "median_hourly_wage_usd": 39.15,
      "employment_count": 129000,
      "outlook_growth_pct": 13,
      "openings_annual": 9000,
      "job_zone": "3",
      "onet_title": "Respiratory Therapists",
      "onet_description": "Assess, treat, and care for patients with breathing disorders. Assume primary responsibility for all respiratory care modalities, including the supervision of respiratory therapy technicians. Initiate and conduct therapeutic procedures; maintain patient records; and select, assemble, check, and operate equipment.",
      "entry_level_education": "associates",
      "typical_training_years_post_hs": 2,
      "hours_note": "Respiratory therapists may work nights, weekends, and holidays because medical facilities are always open.",
      "notes": "Respiratory therapists may work nights, weekends, and holidays because medical facilities are always open. Strong licensed healthcare route with good demand, but hospital-based roles can mean night and weekend coverage.",
      "interest_tags": [
        "healthcare",
        "helping_people",
        "hands_on"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/respiratory-therapists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-1126.00",
      "source_links": [
        {
          "source_id": "source:ooh:respiratory_therapist",
          "label": "Respiratory Therapists OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/respiratory-therapists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:respiratory_therapist",
          "label": "Respiratory Therapists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-1126.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.33,
          "level_score": 5.67
        },
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 4.29,
          "level_score": 4.55
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 3.9,
          "level_score": 3.95
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.0
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 3.88
        }
      ],
      "interest_profile": [
        {
          "name": "Realistic",
          "score": 5.03
        },
        {
          "name": "Social",
          "score": 4.88
        },
        {
          "name": "Investigative",
          "score": 4.73
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:respiratory_therapist",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "shift",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "high",
      "night_work_likelihood": "high",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.09,
      "contact_with_others_score": 4.85,
      "email_score": 4.14,
      "face_to_face_score": 4.91,
      "sitting_score": 2.11,
      "standing_score": 3.99,
      "walking_score": 3.99,
      "regular_schedule_pct": 77.73,
      "irregular_schedule_pct": 20.6,
      "seasonal_schedule_pct": 1.67
    },
    {
      "profession_id": "carpenter",
      "profession_node_id": "profession:carpenter",
      "profession_name": "Carpenters",
      "soc_code": "47-2031.00",
      "profession_family": "Trades",
      "median_annual_wage_usd": 61220,
      "median_hourly_wage_usd": 29.43,
      "employment_count": 899500,
      "outlook_growth_pct": 4,
      "openings_annual": 45600,
      "job_zone": "2",
      "onet_title": "Carpenters",
      "onet_description": "Construct, erect, install, or repair structures and fixtures made of wood and comparable materials, such as concrete forms; building frameworks, including partitions, joists, studding, and rafters; and wood stairways, window and door frames, and hardwood floors. May also install cabinets, siding, drywall, and batt or roll insulation. Includes brattice builders who build doors or brattices (ventilation walls or partitions) in underground passageways.",
      "entry_level_education": "high_school_plus_apprenticeship",
      "typical_training_years_post_hs": 3,
      "hours_note": "Carpenters usually work full time and may work evenings or weekends to meet deadlines.",
      "notes": "Carpenters usually work full time and may work evenings or weekends to meet deadlines. Durable local work with tangible output and a clearer end-of-day boundary than many office careers, though the job is physically demanding and weather-sensitive.",
      "interest_tags": [
        "hands_on"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
      "onet_url": "https://www.onetonline.org/link/summary/47-2031.00",
      "source_links": [
        {
          "source_id": "source:ooh:carpenter",
          "label": "Carpenters OOH page",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:carpenter",
          "label": "Carpenters O*NET profile",
          "url": "https://www.onetonline.org/link/summary/47-2031.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.66,
          "level_score": 5.56
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 3.91,
          "level_score": 4.24
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 3.91,
          "level_score": 3.83
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.38,
          "level_score": 3.62
        },
        {
          "skill_id": "monitoring",
          "skill_name": "Monitoring",
          "skill_category": "skill",
          "importance_score": 3.38,
          "level_score": 3.5
        }
      ],
      "interest_profile": [
        {
          "name": "Realistic",
          "score": 6.75
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 3.46
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:carpenter",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.43,
      "contact_with_others_score": 4.74,
      "email_score": 2.73,
      "face_to_face_score": 4.92,
      "sitting_score": 1.44,
      "standing_score": 4.6,
      "walking_score": 3.37,
      "regular_schedule_pct": 51.78,
      "irregular_schedule_pct": 47.87,
      "seasonal_schedule_pct": 0.35
    },
    {
      "profession_id": "welder",
      "profession_node_id": "profession:welder",
      "profession_name": "Welder",
      "soc_code": "51-4121.00",
      "profession_family": "Trades",
      "median_annual_wage_usd": 51890,
      "median_hourly_wage_usd": 24.95,
      "employment_count": 418200,
      "outlook_growth_pct": 2,
      "openings_annual": 43800,
      "job_zone": "2",
      "onet_title": "Welders, Cutters, Solderers, and Brazers",
      "onet_description": "Use hand-welding, flame-cutting, hand-soldering, or brazing equipment to weld or join metal components or to fill holes, indentations, or seams of fabricated metal products.",
      "entry_level_education": "high_school_plus_certificate",
      "typical_training_years_post_hs": 1,
      "hours_note": "Welders, cutters, solderers, and brazers usually work full time, and some work shifts.",
      "notes": "Welders, cutters, solderers, and brazers usually work full time, and some work shifts. Fast route into skilled industrial work with lower debt and lower AI pressure than many office jobs, but the work is physically intense and some plants run off-hours.",
      "interest_tags": [
        "hands_on",
        "tech"
      ],
      "source": "bls_ooh_2026;onet_30_2",
      "ooh_url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/51-4121.00",
      "source_links": [
        {
          "source_id": "source:ooh:welder",
          "label": "Welder OOH page",
          "url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:welder",
          "label": "Welder O*NET profile",
          "url": "https://www.onetonline.org/link/summary/51-4121.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "top_skills": [
        {
          "skill_id": "production_and_processing",
          "skill_name": "Production and Processing",
          "skill_category": "knowledge",
          "importance_score": 3.49,
          "level_score": 3.36
        },
        {
          "skill_id": "quality_control_analysis",
          "skill_name": "Quality Control Analysis",
          "skill_category": "skill",
          "importance_score": 3.12,
          "level_score": 3.0
        },
        {
          "skill_id": "mechanical",
          "skill_name": "Mechanical",
          "skill_category": "knowledge",
          "importance_score": 3.1,
          "level_score": 3.18
        },
        {
          "skill_id": "monitoring",
          "skill_name": "Monitoring",
          "skill_category": "skill",
          "importance_score": 3.0,
          "level_score": 2.75
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 2.94,
          "level_score": 2.21
        }
      ],
      "interest_profile": [
        {
          "name": "Realistic",
          "score": 7.0
        },
        {
          "name": "Second Interest High-Point",
          "score": 6.0
        },
        {
          "name": "Conventional",
          "score": 3.65
        }
      ],
      "lifestyle_profile_node_id": "lifestyle:welder",
      "avg_weekly_hours_band": "40_50",
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "shift",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "medium",
      "heuristic_flag": "mixed",
      "time_pressure_score": 4.51,
      "contact_with_others_score": 3.79,
      "email_score": 1.88,
      "face_to_face_score": 4.35,
      "sitting_score": 2.52,
      "standing_score": 3.52,
      "walking_score": 2.79,
      "regular_schedule_pct": 86.38,
      "irregular_schedule_pct": 10.33,
      "seasonal_schedule_pct": 3.3
    }
  ],
  "paths": [
    {
      "path_id": "path:cs_bachelors:software_developer",
      "degree_id": "cs_bachelors",
      "profession_id": "software_developer",
      "degree_name": "Computer Science",
      "profession_name": "Software Developers",
      "degree_family": "Technology",
      "profession_family": "Technology",
      "soc_code": "15-1252.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.96,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Software Developers",
      "median_annual_wage_usd": 133080,
      "median_hourly_wage_usd": 63.98,
      "employment_count": 1913650,
      "outlook_growth_pct": 15,
      "openings_annual": 140100,
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "research",
        "tech"
      ],
      "interest_overlap": [
        "research",
        "tech"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 2,
        "people": 2,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.75,
          "level_score": 6.23
        },
        {
          "skill_id": "programming",
          "skill_name": "Programming",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.12
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.12
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Direct and common software path.",
      "degree_note": "Broad technical path into software, security, and digital product work.",
      "profession_note": "More than 1 in 4 worked more than 40 hours per week in 2024. Strong upside, but deadline cycles can bleed into evenings.",
      "grade_proxy_note": "Usually a better fit for students who are comfortable with math, logic, and abstraction.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1252.00",
      "source_links": [
        {
          "source_id": "source:degree-field:cs_bachelors",
          "label": "Computer Science field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:software_developer",
          "label": "Software Developers OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:software_developer",
          "label": "Software Developers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1252.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:cs_bachelors",
        "source:cip:crosswalk",
        "source:ooh:software_developer",
        "source:onet:software_developer",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:cs_bachelors:information_security_analyst",
      "degree_id": "cs_bachelors",
      "profession_id": "information_security_analyst",
      "degree_name": "Computer Science",
      "profession_name": "Information Security Analysts",
      "degree_family": "Technology",
      "profession_family": "Technology",
      "soc_code": "15-1212.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "medium",
      "confidence": 0.78,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Information Security Analysts",
      "median_annual_wage_usd": 124910,
      "median_hourly_wage_usd": 60.05,
      "employment_count": 182800,
      "outlook_growth_pct": 29,
      "openings_annual": 16000,
      "avg_weekly_hours_estimate": 44,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "research",
        "tech"
      ],
      "interest_overlap": [
        "research",
        "tech"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 2,
        "people": 2,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.35,
          "level_score": 5.97
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.26,
          "level_score": 4.2
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.12
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Security path from a technical foundation.",
      "degree_note": "Broad technical path into software, security, and digital product work.",
      "profession_note": "Most work full time, and some work more than 40 hours per week. High upside with lower substitution risk than many generic analyst roles, but often tied to technical competence and ongoing learning.",
      "grade_proxy_note": "Usually a better fit for students who are comfortable with math, logic, and abstraction.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1212.00",
      "source_links": [
        {
          "source_id": "source:degree-field:cs_bachelors",
          "label": "Computer Science field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:information_security_analyst",
          "label": "Information Security Analysts OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:information_security_analyst",
          "label": "Information Security Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1212.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:cs_bachelors",
        "source:cip:crosswalk",
        "source:ooh:information_security_analyst",
        "source:onet:information_security_analyst",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:mis_bachelors:computer_systems_analyst",
      "degree_id": "mis_bachelors",
      "profession_id": "computer_systems_analyst",
      "degree_name": "Management Information Systems",
      "profession_name": "Computer Systems Analysts",
      "degree_family": "Business Technology",
      "profession_family": "Technology",
      "soc_code": "15-1211.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.92,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 103790,
      "median_hourly_wage_usd": 49.9,
      "employment_count": 558400,
      "outlook_growth_pct": 9,
      "openings_annual": 34200,
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "3",
      "interest_tags": [
        "business",
        "research",
        "tech"
      ],
      "interest_overlap": [
        "business",
        "research",
        "tech"
      ],
      "fit_scores": {
        "analytical": 4,
        "creative": 1,
        "people": 3,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.63,
          "level_score": 6.0
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.0
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.5
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Common analyst path for systems-minded business grads.",
      "degree_note": "Business + systems bridge with analyst-heavy outcomes.",
      "profession_note": "Most work full time, and some work more than 40 hours per week. Predictable office pattern for many roles, but a lot of task structure is AI-sensitive.",
      "grade_proxy_note": "Often a fit for students who want tech-adjacent work without the most math-heavy route.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1211.00",
      "source_links": [
        {
          "source_id": "source:degree-field:mis_bachelors",
          "label": "Management Information Systems field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:computer_systems_analyst",
          "label": "Computer Systems Analysts OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:computer_systems_analyst",
          "label": "Computer Systems Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1211.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:mis_bachelors",
        "source:cip:crosswalk",
        "source:ooh:computer_systems_analyst",
        "source:onet:computer_systems_analyst",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:mis_bachelors:management_analyst",
      "degree_id": "mis_bachelors",
      "profession_id": "management_analyst",
      "degree_name": "Management Information Systems",
      "profession_name": "Management Analysts",
      "degree_family": "Business Technology",
      "profession_family": "Business",
      "soc_code": "13-1111.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "medium",
      "confidence": 0.64,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 101190,
      "median_hourly_wage_usd": 48.65,
      "employment_count": 1001400,
      "outlook_growth_pct": 9,
      "openings_annual": 95400,
      "avg_weekly_hours_estimate": 48,
      "schedule_type": "extended",
      "boundary_quality": "weak",
      "predictability": "low",
      "ai_exposure": "high",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "communication",
        "research",
        "tech"
      ],
      "interest_overlap": [
        "business",
        "research"
      ],
      "fit_scores": {
        "analytical": 4,
        "creative": 1,
        "people": 3,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.71,
          "level_score": 5.33
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 4.38,
          "level_score": 4.9
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.12
        }
      ],
      "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Business-process and operations path.",
      "degree_note": "Business + systems bridge with analyst-heavy outcomes.",
      "profession_note": "Most management analysts work full time and overtime is common. Strong earnings and mobility, but travel and client demands often eat into evenings.",
      "grade_proxy_note": "Often a fit for students who want tech-adjacent work without the most math-heavy route.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-1111.00",
      "source_links": [
        {
          "source_id": "source:degree-field:mis_bachelors",
          "label": "Management Information Systems field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:management_analyst",
          "label": "Management Analysts OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:management_analyst",
          "label": "Management Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-1111.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:mis_bachelors",
        "source:cip:crosswalk",
        "source:ooh:management_analyst",
        "source:onet:management_analyst",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:cybersecurity_bachelors:information_security_analyst",
      "degree_id": "cybersecurity_bachelors",
      "profession_id": "information_security_analyst",
      "degree_name": "Cybersecurity",
      "profession_name": "Information Security Analysts",
      "degree_family": "Technology",
      "profession_family": "Technology",
      "soc_code": "15-1212.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.97,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Information Security Analysts",
      "median_annual_wage_usd": 124910,
      "median_hourly_wage_usd": 60.05,
      "employment_count": 182800,
      "outlook_growth_pct": 29,
      "openings_annual": 16000,
      "avg_weekly_hours_estimate": 44,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "research",
        "tech"
      ],
      "interest_overlap": [
        "research",
        "tech"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.35,
          "level_score": 5.97
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.26,
          "level_score": 4.2
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.12
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "One of the clearest degree-to-role mappings in the prototype.",
      "degree_note": "Security-focused computing path that maps directly into infosec and network roles.",
      "profession_note": "Most work full time, and some work more than 40 hours per week. High upside with lower substitution risk than many generic analyst roles, but often tied to technical competence and ongoing learning.",
      "grade_proxy_note": "Usually a stronger fit for students who like systems thinking and are comfortable with technical depth.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1212.00",
      "source_links": [
        {
          "source_id": "source:degree-field:cybersecurity_bachelors",
          "label": "Cybersecurity field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:information_security_analyst",
          "label": "Information Security Analysts OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:information_security_analyst",
          "label": "Information Security Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1212.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:cybersecurity_bachelors",
        "source:cip:crosswalk",
        "source:ooh:information_security_analyst",
        "source:onet:information_security_analyst",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:nursing_bachelors:registered_nurse",
      "degree_id": "nursing_bachelors",
      "profession_id": "registered_nurse",
      "degree_name": "Registered Nursing",
      "profession_name": "Registered Nurses",
      "degree_family": "Healthcare",
      "profession_family": "Healthcare",
      "soc_code": "29-1141.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "licensure",
      "path_strength": "high",
      "confidence": 0.99,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Registered Nurses",
      "median_annual_wage_usd": 93600,
      "median_hourly_wage_usd": 45.0,
      "employment_count": 3242800,
      "outlook_growth_pct": 6,
      "openings_annual": 194500,
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "shift",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "high",
      "night_work_likelihood": "high",
      "job_zone": "4",
      "interest_tags": [
        "communication",
        "healthcare",
        "helping_people"
      ],
      "interest_overlap": [
        "communication",
        "healthcare",
        "helping_people"
      ],
      "fit_scores": {
        "analytical": 3,
        "creative": 1,
        "people": 5,
        "hands_on": 3
      },
      "top_skills": [
        {
          "skill_id": "psychology",
          "skill_name": "Psychology",
          "skill_category": "knowledge",
          "importance_score": 4.58,
          "level_score": 6.08
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 5.48
        },
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 4.36,
          "level_score": 4.47
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "The real cost here is schedule control, not just training time.",
      "path_note": "Direct licensed care pathway.",
      "degree_note": "Direct route into clinical care work with broad geographic demand.",
      "profession_note": "Facilities that provide 24-hour care may require rotating shifts, weekends, and on-call time. Very durable and geographically flexible, but often costs nights, weekends, or holiday control.",
      "grade_proxy_note": "Needs academic consistency, science readiness, and comfort with clinical settings more than elite grades.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-1141.00",
      "source_links": [
        {
          "source_id": "source:degree-field:nursing_bachelors",
          "label": "Registered Nursing field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:registered_nurse",
          "label": "Registered Nurses OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:registered_nurse",
          "label": "Registered Nurses O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-1141.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:nursing_bachelors",
        "source:cip:crosswalk",
        "source:ooh:registered_nurse",
        "source:onet:registered_nurse",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:healthcare_admin_bachelors:medical_health_services_manager",
      "degree_id": "healthcare_admin_bachelors",
      "profession_id": "medical_health_services_manager",
      "degree_name": "Healthcare Administration",
      "profession_name": "Medical and Health Services Managers",
      "degree_family": "Healthcare",
      "profession_family": "Healthcare",
      "soc_code": "11-9111.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors_plus_experience",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "related_experience",
      "path_strength": "medium",
      "confidence": 0.7,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Medical and Health Services Managers",
      "median_annual_wage_usd": 117960,
      "median_hourly_wage_usd": 56.71,
      "employment_count": 616200,
      "outlook_growth_pct": 23,
      "openings_annual": 62100,
      "avg_weekly_hours_estimate": 45,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "communication",
        "healthcare"
      ],
      "interest_overlap": [
        "business",
        "communication",
        "healthcare"
      ],
      "fit_scores": {
        "analytical": 3,
        "creative": 1,
        "people": 4,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 4.68,
          "level_score": 5.5
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.37,
          "level_score": 4.85
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.22,
          "level_score": 5.52
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Healthcare operations and administration route.",
      "degree_note": "Healthcare systems and operations path that can lead to non-clinical leadership roles.",
      "profession_note": "Most work full time, and some work more than 40 hours per week. Strong upside in healthcare without clinical training, but many roles want prior industry experience and organizational pressure can be high.",
      "grade_proxy_note": "Good for students interested in healthcare systems but not necessarily bedside care.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/management/medical-and-health-services-managers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/11-9111.00",
      "source_links": [
        {
          "source_id": "source:degree-field:healthcare_admin_bachelors",
          "label": "Healthcare Administration field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:medical_health_services_manager",
          "label": "Medical and Health Services Managers OOH page",
          "url": "https://www.bls.gov/ooh/management/medical-and-health-services-managers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:medical_health_services_manager",
          "label": "Medical and Health Services Managers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/11-9111.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:healthcare_admin_bachelors",
        "source:cip:crosswalk",
        "source:ooh:medical_health_services_manager",
        "source:onet:medical_health_services_manager",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:finance_bachelors:financial_analyst",
      "degree_id": "finance_bachelors",
      "profession_id": "financial_analyst",
      "degree_name": "Finance",
      "profession_name": "Financial and Investment Analysts",
      "degree_family": "Business",
      "profession_family": "Business",
      "soc_code": "13-2051.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.92,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Financial and Investment Analysts",
      "median_annual_wage_usd": 101350,
      "median_hourly_wage_usd": 48.73,
      "employment_count": 399800,
      "outlook_growth_pct": 6,
      "openings_annual": 30800,
      "avg_weekly_hours_estimate": 48,
      "schedule_type": "extended",
      "boundary_quality": "weak",
      "predictability": "medium",
      "ai_exposure": "high",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "research"
      ],
      "interest_overlap": [
        "business",
        "research"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "top_skills": [],
      "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Core finance outcome.",
      "degree_note": "Classic route into investing, valuation, and finance analysis roles.",
      "profession_note": "Most work full time, and some work more than 40 hours per week. Good upside, but higher-end finance paths often pull people toward major hubs and weaker boundaries.",
      "grade_proxy_note": "Stronger fit for students who are quantitative, detail-oriented, and okay with competitive environments.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-2051.00",
      "source_links": [
        {
          "source_id": "source:degree-field:finance_bachelors",
          "label": "Finance field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:financial_analyst",
          "label": "Financial and Investment Analysts OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:financial_analyst",
          "label": "Financial and Investment Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-2051.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:finance_bachelors",
        "source:cip:crosswalk",
        "source:ooh:financial_analyst",
        "source:onet:financial_analyst",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:finance_bachelors:management_analyst",
      "degree_id": "finance_bachelors",
      "profession_id": "management_analyst",
      "degree_name": "Finance",
      "profession_name": "Management Analysts",
      "degree_family": "Business",
      "profession_family": "Business",
      "soc_code": "13-1111.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "medium",
      "confidence": 0.55,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 101190,
      "median_hourly_wage_usd": 48.65,
      "employment_count": 1001400,
      "outlook_growth_pct": 9,
      "openings_annual": 95400,
      "avg_weekly_hours_estimate": 48,
      "schedule_type": "extended",
      "boundary_quality": "weak",
      "predictability": "low",
      "ai_exposure": "high",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "communication",
        "research"
      ],
      "interest_overlap": [
        "business",
        "research"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.71,
          "level_score": 5.33
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 4.38,
          "level_score": 4.9
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.12
        }
      ],
      "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Strategy and advisory adjacent path.",
      "degree_note": "Classic route into investing, valuation, and finance analysis roles.",
      "profession_note": "Most management analysts work full time and overtime is common. Strong earnings and mobility, but travel and client demands often eat into evenings.",
      "grade_proxy_note": "Stronger fit for students who are quantitative, detail-oriented, and okay with competitive environments.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-1111.00",
      "source_links": [
        {
          "source_id": "source:degree-field:finance_bachelors",
          "label": "Finance field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:management_analyst",
          "label": "Management Analysts OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:management_analyst",
          "label": "Management Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-1111.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:finance_bachelors",
        "source:cip:crosswalk",
        "source:ooh:management_analyst",
        "source:onet:management_analyst",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:economics_bachelors:economist",
      "degree_id": "economics_bachelors",
      "profession_id": "economist",
      "degree_name": "Economics",
      "profession_name": "Economists",
      "degree_family": "Business",
      "profession_family": "Research",
      "soc_code": "19-3011.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "masters_or_bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.85,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Economists",
      "median_annual_wage_usd": 120000,
      "median_hourly_wage_usd": 57.69,
      "employment_count": 18800,
      "outlook_growth_pct": 5,
      "openings_annual": 1400,
      "avg_weekly_hours_estimate": 41,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "medium",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "5",
      "interest_tags": [
        "business",
        "research"
      ],
      "interest_overlap": [
        "business",
        "research"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 4.54,
          "level_score": 6.08
        },
        {
          "skill_id": "economics_and_accounting",
          "skill_name": "Economics and Accounting",
          "skill_category": "knowledge",
          "importance_score": 4.46,
          "level_score": 5.5
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.75
        }
      ],
      "tradeoff_summary": "The earnings can work, but the upside often pulls you toward major city hubs.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Strong direct analytical path.",
      "degree_note": "Analytical social science path with policy, research, and business options.",
      "profession_note": "Most work full time. Analytical and policy-oriented with strong boundaries for many roles, but fewer openings and more hub concentration than general business jobs.",
      "grade_proxy_note": "Usually a better fit for students who like analytical writing, statistics, and theory.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/social-science/social-science-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/life-physical-and-social-science/economists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/19-3011.00",
      "source_links": [
        {
          "source_id": "source:degree-field:economics_bachelors",
          "label": "Economics field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/social-science/social-science-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:economist",
          "label": "Economists OOH page",
          "url": "https://www.bls.gov/ooh/life-physical-and-social-science/economists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:economist",
          "label": "Economists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/19-3011.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:economics_bachelors",
        "source:cip:crosswalk",
        "source:ooh:economist",
        "source:onet:economist",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:economics_bachelors:management_analyst",
      "degree_id": "economics_bachelors",
      "profession_id": "management_analyst",
      "degree_name": "Economics",
      "profession_name": "Management Analysts",
      "degree_family": "Business",
      "profession_family": "Business",
      "soc_code": "13-1111.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "medium",
      "confidence": 0.62,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 101190,
      "median_hourly_wage_usd": 48.65,
      "employment_count": 1001400,
      "outlook_growth_pct": 9,
      "openings_annual": 95400,
      "avg_weekly_hours_estimate": 48,
      "schedule_type": "extended",
      "boundary_quality": "weak",
      "predictability": "low",
      "ai_exposure": "high",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "communication",
        "research"
      ],
      "interest_overlap": [
        "business",
        "research"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.71,
          "level_score": 5.33
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 4.38,
          "level_score": 4.9
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.12
        }
      ],
      "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Common business application of economics training.",
      "degree_note": "Analytical social science path with policy, research, and business options.",
      "profession_note": "Most management analysts work full time and overtime is common. Strong earnings and mobility, but travel and client demands often eat into evenings.",
      "grade_proxy_note": "Usually a better fit for students who like analytical writing, statistics, and theory.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/social-science/social-science-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-1111.00",
      "source_links": [
        {
          "source_id": "source:degree-field:economics_bachelors",
          "label": "Economics field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/social-science/social-science-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:management_analyst",
          "label": "Management Analysts OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:management_analyst",
          "label": "Management Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-1111.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:economics_bachelors",
        "source:cip:crosswalk",
        "source:ooh:management_analyst",
        "source:onet:management_analyst",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:accounting_bachelors:accountant",
      "degree_id": "accounting_bachelors",
      "profession_id": "accountant",
      "degree_name": "Accounting",
      "profession_name": "Accountants and Auditors",
      "degree_family": "Business",
      "profession_family": "Business",
      "soc_code": "13-2011.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.98,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Accountants and Auditors",
      "median_annual_wage_usd": 81680,
      "median_hourly_wage_usd": 39.27,
      "employment_count": 1562000,
      "outlook_growth_pct": 6,
      "openings_annual": 130800,
      "avg_weekly_hours_estimate": 45,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "high",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "research"
      ],
      "interest_overlap": [
        "business",
        "research"
      ],
      "fit_scores": {
        "analytical": 4,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "economics_and_accounting",
          "skill_name": "Economics and Accounting",
          "skill_category": "knowledge",
          "importance_score": 4.65,
          "level_score": 5.84
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 3.96,
          "level_score": 4.24
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 3.92,
          "level_score": 4.92
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Direct accounting pathway.",
      "degree_note": "Structured route into accounting, audit, and financial operations.",
      "profession_note": "Most work full time, and longer hours are common at certain times of the year. Stable and structured, but repetitive knowledge work faces meaningful AI pressure.",
      "grade_proxy_note": "A strong fit for detail-oriented students who can handle repetitive precision work.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-2011.00",
      "source_links": [
        {
          "source_id": "source:degree-field:accounting_bachelors",
          "label": "Accounting field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:accountant",
          "label": "Accountants and Auditors OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:accountant",
          "label": "Accountants and Auditors O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-2011.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:accounting_bachelors",
        "source:cip:crosswalk",
        "source:ooh:accountant",
        "source:onet:accountant",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:accounting_bachelors:financial_analyst",
      "degree_id": "accounting_bachelors",
      "profession_id": "financial_analyst",
      "degree_name": "Accounting",
      "profession_name": "Financial and Investment Analysts",
      "degree_family": "Business",
      "profession_family": "Business",
      "soc_code": "13-2051.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "medium",
      "confidence": 0.56,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 101350,
      "median_hourly_wage_usd": 48.73,
      "employment_count": 399800,
      "outlook_growth_pct": 6,
      "openings_annual": 30800,
      "avg_weekly_hours_estimate": 48,
      "schedule_type": "extended",
      "boundary_quality": "weak",
      "predictability": "medium",
      "ai_exposure": "high",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "research"
      ],
      "interest_overlap": [
        "business",
        "research"
      ],
      "fit_scores": {
        "analytical": 4,
        "creative": 1,
        "people": 2,
        "hands_on": 1
      },
      "top_skills": [],
      "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Finance-adjacent path for quantitatively strong accounting grads.",
      "degree_note": "Structured route into accounting, audit, and financial operations.",
      "profession_note": "Most work full time, and some work more than 40 hours per week. Good upside, but higher-end finance paths often pull people toward major hubs and weaker boundaries.",
      "grade_proxy_note": "A strong fit for detail-oriented students who can handle repetitive precision work.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-2051.00",
      "source_links": [
        {
          "source_id": "source:degree-field:accounting_bachelors",
          "label": "Accounting field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:financial_analyst",
          "label": "Financial and Investment Analysts OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:financial_analyst",
          "label": "Financial and Investment Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-2051.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:accounting_bachelors",
        "source:cip:crosswalk",
        "source:ooh:financial_analyst",
        "source:onet:financial_analyst",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:marketing_bachelors:market_research_analyst",
      "degree_id": "marketing_bachelors",
      "profession_id": "market_research_analyst",
      "degree_name": "Marketing",
      "profession_name": "Market Research Analysts",
      "degree_family": "Business",
      "profession_family": "Business",
      "soc_code": "13-1161.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "accessible",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.92,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Market Research Analysts and Marketing Specialists",
      "median_annual_wage_usd": 76950,
      "median_hourly_wage_usd": 36.99,
      "employment_count": 941700,
      "outlook_growth_pct": 7,
      "openings_annual": 87200,
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "communication",
        "design",
        "research"
      ],
      "interest_overlap": [
        "business",
        "communication"
      ],
      "fit_scores": {
        "analytical": 3,
        "creative": 3,
        "people": 4,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.3,
          "level_score": 5.32
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.17,
          "level_score": 5.57
        },
        {
          "skill_id": "sales_and_marketing",
          "skill_name": "Sales and Marketing",
          "skill_category": "knowledge",
          "importance_score": 4.09,
          "level_score": 5.3
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Direct market research and growth analytics path.",
      "degree_note": "Commercial strategy path that can lead to market research, brand, and growth roles.",
      "profession_note": "Most market research analysts work full time during regular business hours. Better hours than finance or consulting, but work is highly exposed to analytics automation and AI tooling.",
      "grade_proxy_note": "Can fit a wider range of students, especially those who like persuasion, trends, and consumer behavior.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm",
      "onet_url": "https://www.onetonline.org/link/summary/13-1161.00",
      "source_links": [
        {
          "source_id": "source:degree-field:marketing_bachelors",
          "label": "Marketing field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/business/business-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:market_research_analyst",
          "label": "Market Research Analysts OOH page",
          "url": "https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:market_research_analyst",
          "label": "Market Research Analysts O*NET profile",
          "url": "https://www.onetonline.org/link/summary/13-1161.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:marketing_bachelors",
        "source:cip:crosswalk",
        "source:ooh:market_research_analyst",
        "source:onet:market_research_analyst",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:graphic_design_bachelors:graphic_designer",
      "degree_id": "graphic_design_bachelors",
      "profession_id": "graphic_designer",
      "degree_name": "Graphic Design",
      "profession_name": "Graphic Designers",
      "degree_family": "Design",
      "profession_family": "Design",
      "soc_code": "27-1024.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "accessible",
      "cost_band": "medium",
      "entry_level_education": "bachelors_or_portfolio",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.96,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Graphic Designers",
      "median_annual_wage_usd": 61720,
      "median_hourly_wage_usd": 29.67,
      "employment_count": 272900,
      "outlook_growth_pct": 2,
      "openings_annual": 21100,
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "communication",
        "design"
      ],
      "interest_overlap": [
        "communication",
        "design"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 5,
        "people": 3,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "design",
          "skill_name": "Design",
          "skill_category": "knowledge",
          "importance_score": 4.7,
          "level_score": 5.8
        },
        {
          "skill_id": "fine_arts",
          "skill_name": "Fine Arts",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 5.65
        },
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 4.95
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Direct visual design path.",
      "degree_note": "Visual communication path with creative and digital outcomes.",
      "profession_note": "Most graphic designers work full time, but schedules can vary for self-employed workers. Creative lifestyle can feel flexible, but earnings are more modest and tooling is highly AI-exposed.",
      "grade_proxy_note": "Portfolio strength often matters as much as grades.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/fine-arts/fine-arts-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/27-1024.00",
      "source_links": [
        {
          "source_id": "source:degree-field:graphic_design_bachelors",
          "label": "Graphic Design field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/fine-arts/fine-arts-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:graphic_designer",
          "label": "Graphic Designers OOH page",
          "url": "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:graphic_designer",
          "label": "Graphic Designers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/27-1024.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:graphic_design_bachelors",
        "source:cip:crosswalk",
        "source:ooh:graphic_designer",
        "source:onet:graphic_designer",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:graphic_design_bachelors:web_digital_interface_designer",
      "degree_id": "graphic_design_bachelors",
      "profession_id": "web_digital_interface_designer",
      "degree_name": "Graphic Design",
      "profession_name": "Web and Digital Interface Designers",
      "degree_family": "Design",
      "profession_family": "Design",
      "soc_code": "15-1255.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "accessible",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "medium",
      "confidence": 0.72,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Web and Digital Interface Designers",
      "median_annual_wage_usd": 98300,
      "median_hourly_wage_usd": 47.26,
      "employment_count": 252000,
      "outlook_growth_pct": 8,
      "openings_annual": 16400,
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "communication",
        "design",
        "tech"
      ],
      "interest_overlap": [
        "communication",
        "design"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 5,
        "people": 3,
        "hands_on": 1
      },
      "top_skills": [],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Digital interface path for design grads.",
      "degree_note": "Visual communication path with creative and digital outcomes.",
      "profession_note": "Most web developers and digital designers work full time. Combines design and tech with good upside, but interface work is being reshaped quickly by AI tooling.",
      "grade_proxy_note": "Portfolio strength often matters as much as grades.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/fine-arts/fine-arts-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1255.00",
      "source_links": [
        {
          "source_id": "source:degree-field:graphic_design_bachelors",
          "label": "Graphic Design field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/fine-arts/fine-arts-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:web_digital_interface_designer",
          "label": "Web and Digital Interface Designers OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:web_digital_interface_designer",
          "label": "Web and Digital Interface Designers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1255.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:graphic_design_bachelors",
        "source:cip:crosswalk",
        "source:ooh:web_digital_interface_designer",
        "source:onet:web_digital_interface_designer",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:ux_design_bachelors:web_digital_interface_designer",
      "degree_id": "ux_design_bachelors",
      "profession_id": "web_digital_interface_designer",
      "degree_name": "Web and Digital Experience Design",
      "profession_name": "Web and Digital Interface Designers",
      "degree_family": "Design",
      "profession_family": "Design",
      "soc_code": "15-1255.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.97,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Web and Digital Interface Designers",
      "median_annual_wage_usd": 98300,
      "median_hourly_wage_usd": 47.26,
      "employment_count": 252000,
      "outlook_growth_pct": 8,
      "openings_annual": 16400,
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "high",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "communication",
        "design",
        "tech"
      ],
      "interest_overlap": [
        "communication",
        "design",
        "tech"
      ],
      "fit_scores": {
        "analytical": 3,
        "creative": 4,
        "people": 3,
        "hands_on": 1
      },
      "top_skills": [],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Direct UX/UI style path.",
      "degree_note": "Digital design path oriented toward interface and user experience work.",
      "profession_note": "Most web developers and digital designers work full time. Combines design and tech with good upside, but interface work is being reshaped quickly by AI tooling.",
      "grade_proxy_note": "Usually best for students who combine design taste with systems thinking.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/15-1255.00",
      "source_links": [
        {
          "source_id": "source:degree-field:ux_design_bachelors",
          "label": "Web and Digital Experience Design field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:web_digital_interface_designer",
          "label": "Web and Digital Interface Designers OOH page",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:web_digital_interface_designer",
          "label": "Web and Digital Interface Designers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/15-1255.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:ux_design_bachelors",
        "source:cip:crosswalk",
        "source:ooh:web_digital_interface_designer",
        "source:onet:web_digital_interface_designer",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:ux_design_bachelors:graphic_designer",
      "degree_id": "ux_design_bachelors",
      "profession_id": "graphic_designer",
      "degree_name": "Web and Digital Experience Design",
      "profession_name": "Graphic Designers",
      "degree_family": "Design",
      "profession_family": "Design",
      "soc_code": "27-1024.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors_or_portfolio",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "medium",
      "confidence": 0.58,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Graphic Designers",
      "median_annual_wage_usd": 61720,
      "median_hourly_wage_usd": 29.67,
      "employment_count": 272900,
      "outlook_growth_pct": 2,
      "openings_annual": 21100,
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "communication",
        "design",
        "tech"
      ],
      "interest_overlap": [
        "communication",
        "design"
      ],
      "fit_scores": {
        "analytical": 3,
        "creative": 4,
        "people": 3,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "design",
          "skill_name": "Design",
          "skill_category": "knowledge",
          "importance_score": 4.7,
          "level_score": 5.8
        },
        {
          "skill_id": "fine_arts",
          "skill_name": "Fine Arts",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 5.65
        },
        {
          "skill_id": "computers_and_electronics",
          "skill_name": "Computers and Electronics",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 4.95
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Graphic communication fallback path.",
      "degree_note": "Digital design path oriented toward interface and user experience work.",
      "profession_note": "Most graphic designers work full time, but schedules can vary for self-employed workers. Creative lifestyle can feel flexible, but earnings are more modest and tooling is highly AI-exposed.",
      "grade_proxy_note": "Usually best for students who combine design taste with systems thinking.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/27-1024.00",
      "source_links": [
        {
          "source_id": "source:degree-field:ux_design_bachelors",
          "label": "Web and Digital Experience Design field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:graphic_designer",
          "label": "Graphic Designers OOH page",
          "url": "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:graphic_designer",
          "label": "Graphic Designers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/27-1024.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:ux_design_bachelors",
        "source:cip:crosswalk",
        "source:ooh:graphic_designer",
        "source:onet:graphic_designer",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:communications_bachelors:public_relations_specialist",
      "degree_id": "communications_bachelors",
      "profession_id": "public_relations_specialist",
      "degree_name": "Communications",
      "profession_name": "Public Relations Specialists",
      "degree_family": "Communication",
      "profession_family": "Communication",
      "soc_code": "27-3031.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "accessible",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.91,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Public Relations Specialists",
      "median_annual_wage_usd": 69780,
      "median_hourly_wage_usd": 33.55,
      "employment_count": 315900,
      "outlook_growth_pct": 5,
      "openings_annual": 27600,
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "major_hub_dependent",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "communication"
      ],
      "interest_overlap": [
        "business",
        "communication"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 3,
        "people": 5,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "communications_and_media",
          "skill_name": "Communications and Media",
          "skill_category": "knowledge",
          "importance_score": 4.91,
          "level_score": 6.23
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.73,
          "level_score": 5.32
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.25
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Clear communications-to-PR path backed by the CIP crosswalk.",
      "degree_note": "Broad communication path that feeds public relations, media, and outreach work.",
      "profession_note": "Most public relations specialists work full time. Some work more than 40 hours per week. Good for communicators, but reputation work can mean urgency, client pressure, and more hub concentration than students expect.",
      "grade_proxy_note": "Often more about communication skill, internships, and polish than pure grades.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/communications/communications-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/media-and-communication/public-relations-specialists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/27-3031.00",
      "source_links": [
        {
          "source_id": "source:degree-field:communications_bachelors",
          "label": "Communications field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/communications/communications-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:public_relations_specialist",
          "label": "Public Relations Specialists OOH page",
          "url": "https://www.bls.gov/ooh/media-and-communication/public-relations-specialists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:public_relations_specialist",
          "label": "Public Relations Specialists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/27-3031.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:communications_bachelors",
        "source:cip:crosswalk",
        "source:ooh:public_relations_specialist",
        "source:onet:public_relations_specialist",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:secondary_education_bachelors:high_school_teacher",
      "degree_id": "secondary_education_bachelors",
      "profession_id": "high_school_teacher",
      "degree_name": "Secondary Education",
      "profession_name": "High School Teachers",
      "degree_family": "Education",
      "profession_family": "Education",
      "soc_code": "25-2031.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "licensure",
      "path_strength": "high",
      "confidence": 0.98,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Secondary School Teachers, Except Special and Career/Technical Education",
      "median_annual_wage_usd": 65720,
      "median_hourly_wage_usd": 31.6,
      "employment_count": 1033000,
      "outlook_growth_pct": 0,
      "openings_annual": 64900,
      "avg_weekly_hours_estimate": 45,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "high",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "low",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "communication",
        "helping_people"
      ],
      "interest_overlap": [
        "communication",
        "helping_people"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 2,
        "people": 5,
        "hands_on": 2
      },
      "top_skills": [
        {
          "skill_id": "education_and_training",
          "skill_name": "Education and Training",
          "skill_category": "knowledge",
          "importance_score": 4.69,
          "level_score": 5.34
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.35,
          "level_score": 4.95
        },
        {
          "skill_id": "instructing",
          "skill_name": "Instructing",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.0
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Direct classroom teaching path.",
      "degree_note": "Teaching-focused path with local labor market relevance.",
      "profession_note": "Most work full time during the school year. Calendar rhythm is predictable, but prep and grading can spill beyond the school day.",
      "grade_proxy_note": "Needs patience, classroom presence, and willingness to work with young people consistently.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/education/education-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/25-2031.00",
      "source_links": [
        {
          "source_id": "source:degree-field:secondary_education_bachelors",
          "label": "Secondary Education field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/education/education-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:high_school_teacher",
          "label": "High School Teachers OOH page",
          "url": "https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:high_school_teacher",
          "label": "High School Teachers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/25-2031.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:secondary_education_bachelors",
        "source:cip:crosswalk",
        "source:ooh:high_school_teacher",
        "source:onet:high_school_teacher",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:psychology_bachelors:social_worker",
      "degree_id": "psychology_bachelors",
      "profession_id": "social_worker",
      "degree_name": "Psychology",
      "profession_name": "Social Workers",
      "degree_family": "Social Science",
      "profession_family": "Social Service",
      "soc_code": "21-1021.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "accessible",
      "cost_band": "medium",
      "entry_level_education": "bachelors_or_masters",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "licensure_or_masters",
      "path_strength": "medium",
      "confidence": 0.63,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 61330,
      "median_hourly_wage_usd": 29.49,
      "employment_count": 728300,
      "outlook_growth_pct": 6,
      "openings_annual": 74000,
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "communication",
        "helping_people",
        "research"
      ],
      "interest_overlap": [
        "communication",
        "helping_people"
      ],
      "fit_scores": {
        "analytical": 3,
        "creative": 1,
        "people": 5,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 4.88,
          "level_score": 4.75
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 4.5,
          "level_score": 4.12
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.32,
          "level_score": 5.21
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "People-centered path, but many counseling roles require more schooling.",
      "degree_note": "Popular people-focused degree that often needs graduate study for premium clinical outcomes.",
      "profession_note": "Most social workers are employed full time. They sometimes work evenings, weekends, and holidays to see clients or attend meetings, and they may be on call. Impactful and widely needed, but the emotional load is real and premium earnings often require clinical specialization or leadership progression.",
      "grade_proxy_note": "Good fit for students interested in people, behavior, and counseling, but many high-upside roles need more schooling.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/psychology/psychology-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/community-and-social-service/social-workers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/21-1021.00",
      "source_links": [
        {
          "source_id": "source:degree-field:psychology_bachelors",
          "label": "Psychology field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/psychology/psychology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:social_worker",
          "label": "Social Workers OOH page",
          "url": "https://www.bls.gov/ooh/community-and-social-service/social-workers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:social_worker",
          "label": "Social Workers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/21-1021.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:psychology_bachelors",
        "source:cip:crosswalk",
        "source:ooh:social_worker",
        "source:onet:social_worker",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:psychology_bachelors:physician",
      "degree_id": "psychology_bachelors",
      "profession_id": "physician",
      "degree_name": "Psychology",
      "profession_name": "Physicians and Surgeons",
      "degree_family": "Social Science",
      "profession_family": "Healthcare",
      "soc_code": "29-1218.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 10,
      "academic_profile_min": "accessible",
      "cost_band": "medium",
      "entry_level_education": "doctoral_or_professional",
      "typical_training_years_post_hs": 10,
      "additional_training_required": "medical_school",
      "path_strength": "low",
      "confidence": 0.2,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 239200,
      "median_hourly_wage_usd": 115.0,
      "employment_count": 853700,
      "outlook_growth_pct": 3,
      "openings_annual": 23400,
      "avg_weekly_hours_estimate": 55,
      "schedule_type": "irregular",
      "boundary_quality": "weak",
      "predictability": "low",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "high",
      "night_work_likelihood": "high",
      "job_zone": "5",
      "interest_tags": [
        "communication",
        "healthcare",
        "helping_people",
        "research"
      ],
      "interest_overlap": [
        "helping_people",
        "research"
      ],
      "fit_scores": {
        "analytical": 3,
        "creative": 1,
        "people": 5,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 5.0,
          "level_score": 6.64
        },
        {
          "skill_id": "biology",
          "skill_name": "Biology",
          "skill_category": "knowledge",
          "importance_score": 4.72,
          "level_score": 5.22
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 4.5
        }
      ],
      "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries.",
      "reality_check": "Possible, but this is a long and highly selective training path rather than a standard default outcome.",
      "path_note": "Technically possible, but this is a long elite training route rather than a default outcome.",
      "degree_note": "Popular people-focused degree that often needs graduate study for premium clinical outcomes.",
      "profession_note": "Most physicians and surgeons work full time. Some worked more than 60 hours per week in 2024. Extremely strong earnings, but the lifestyle cost is often nights, weekends, and limited schedule control.",
      "grade_proxy_note": "Good fit for students interested in people, behavior, and counseling, but many high-upside roles need more schooling.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/psychology/psychology-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/physicians-and-surgeons.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-1218.00",
      "source_links": [
        {
          "source_id": "source:degree-field:psychology_bachelors",
          "label": "Psychology field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/psychology/psychology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:physician",
          "label": "Physicians and Surgeons OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/physicians-and-surgeons.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:physician",
          "label": "Physicians and Surgeons O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-1218.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:psychology_bachelors",
        "source:cip:crosswalk",
        "source:ooh:physician",
        "source:onet:physician",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:social_work_bachelors:social_worker",
      "degree_id": "social_work_bachelors",
      "profession_id": "social_worker",
      "degree_name": "Social Work",
      "profession_name": "Social Workers",
      "degree_family": "Social Service",
      "profession_family": "Social Service",
      "soc_code": "21-1021.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "accessible",
      "cost_band": "low",
      "entry_level_education": "bachelors_or_masters",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "licensure_may_apply",
      "path_strength": "high",
      "confidence": 0.96,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Child, Family, and School Social Workers",
      "median_annual_wage_usd": 61330,
      "median_hourly_wage_usd": 29.49,
      "employment_count": 728300,
      "outlook_growth_pct": 6,
      "openings_annual": 74000,
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "communication",
        "helping_people"
      ],
      "interest_overlap": [
        "communication",
        "helping_people"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 5,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 4.88,
          "level_score": 4.75
        },
        {
          "skill_id": "speaking",
          "skill_name": "Speaking",
          "skill_category": "skill",
          "importance_score": 4.5,
          "level_score": 4.12
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.32,
          "level_score": 5.21
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Direct helping-profession path.",
      "degree_note": "Direct helping-profession path with clearer job relevance than many general social-science majors.",
      "profession_note": "Most social workers are employed full time. They sometimes work evenings, weekends, and holidays to see clients or attend meetings, and they may be on call. Impactful and widely needed, but the emotional load is real and premium earnings often require clinical specialization or leadership progression.",
      "grade_proxy_note": "Usually more about empathy, resilience, and follow-through than elite academics.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/public-policy-and-social-services/public-policy-and-social-services-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/community-and-social-service/social-workers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/21-1021.00",
      "source_links": [
        {
          "source_id": "source:degree-field:social_work_bachelors",
          "label": "Social Work field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/public-policy-and-social-services/public-policy-and-social-services-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:social_worker",
          "label": "Social Workers OOH page",
          "url": "https://www.bls.gov/ooh/community-and-social-service/social-workers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:social_worker",
          "label": "Social Workers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/21-1021.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:social_work_bachelors",
        "source:cip:crosswalk",
        "source:ooh:social_worker",
        "source:onet:social_worker",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:biology_bachelors:biological_technician",
      "degree_id": "biology_bachelors",
      "profession_id": "biological_technician",
      "degree_name": "Biology",
      "profession_name": "Biological Technicians",
      "degree_family": "Science",
      "profession_family": "Science",
      "soc_code": "19-4021.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.82,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Biological Technicians",
      "median_annual_wage_usd": 51270,
      "median_hourly_wage_usd": 24.65,
      "employment_count": 82000,
      "outlook_growth_pct": 7,
      "openings_annual": 6900,
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "healthcare",
        "research"
      ],
      "interest_overlap": [
        "healthcare",
        "research"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 2
      },
      "top_skills": [
        {
          "skill_id": "biology",
          "skill_name": "Biology",
          "skill_category": "knowledge",
          "importance_score": 4.43,
          "level_score": 5.74
        },
        {
          "skill_id": "reading_comprehension",
          "skill_name": "Reading Comprehension",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.62
        },
        {
          "skill_id": "critical_thinking",
          "skill_name": "Critical Thinking",
          "skill_category": "skill",
          "importance_score": 3.88,
          "level_score": 4.0
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Realistic lab and technician path without more schooling.",
      "degree_note": "Science foundation that can lead to lab roles or more schooling.",
      "profession_note": "Most biological technicians work full time. Good science-adjacent entry path, but the earnings ceiling is lower unless you add more schooling.",
      "grade_proxy_note": "Often strong academically, but a bachelor's alone may not unlock the highest-paying outcomes.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/biology/biology-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/life-physical-and-social-science/biological-technicians.htm",
      "onet_url": "https://www.onetonline.org/link/summary/19-4021.00",
      "source_links": [
        {
          "source_id": "source:degree-field:biology_bachelors",
          "label": "Biology field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/biology/biology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:biological_technician",
          "label": "Biological Technicians OOH page",
          "url": "https://www.bls.gov/ooh/life-physical-and-social-science/biological-technicians.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:biological_technician",
          "label": "Biological Technicians O*NET profile",
          "url": "https://www.onetonline.org/link/summary/19-4021.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:biology_bachelors",
        "source:cip:crosswalk",
        "source:ooh:biological_technician",
        "source:onet:biological_technician",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:biology_bachelors:physician",
      "degree_id": "biology_bachelors",
      "profession_id": "physician",
      "degree_name": "Biology",
      "profession_name": "Physicians and Surgeons",
      "degree_family": "Science",
      "profession_family": "Healthcare",
      "soc_code": "29-1218.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 10,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "doctoral_or_professional",
      "typical_training_years_post_hs": 10,
      "additional_training_required": "medical_school",
      "path_strength": "low",
      "confidence": 0.35,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 239200,
      "median_hourly_wage_usd": 115.0,
      "employment_count": 853700,
      "outlook_growth_pct": 3,
      "openings_annual": 23400,
      "avg_weekly_hours_estimate": 55,
      "schedule_type": "irregular",
      "boundary_quality": "weak",
      "predictability": "low",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "high",
      "night_work_likelihood": "high",
      "job_zone": "5",
      "interest_tags": [
        "healthcare",
        "helping_people",
        "research"
      ],
      "interest_overlap": [
        "healthcare",
        "research"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 2
      },
      "top_skills": [
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 5.0,
          "level_score": 6.64
        },
        {
          "skill_id": "biology",
          "skill_name": "Biology",
          "skill_category": "knowledge",
          "importance_score": 4.72,
          "level_score": 5.22
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.4,
          "level_score": 4.5
        }
      ],
      "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries.",
      "reality_check": "Possible, but this is a long and highly selective training path rather than a standard default outcome.",
      "path_note": "Possible only with substantial additional training after college.",
      "degree_note": "Science foundation that can lead to lab roles or more schooling.",
      "profession_note": "Most physicians and surgeons work full time. Some worked more than 60 hours per week in 2024. Extremely strong earnings, but the lifestyle cost is often nights, weekends, and limited schedule control.",
      "grade_proxy_note": "Often strong academically, but a bachelor's alone may not unlock the highest-paying outcomes.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/biology/biology-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/physicians-and-surgeons.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-1218.00",
      "source_links": [
        {
          "source_id": "source:degree-field:biology_bachelors",
          "label": "Biology field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/biology/biology-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:physician",
          "label": "Physicians and Surgeons OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/physicians-and-surgeons.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:physician",
          "label": "Physicians and Surgeons O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-1218.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:biology_bachelors",
        "source:cip:crosswalk",
        "source:ooh:physician",
        "source:onet:physician",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:civil_engineering_bachelors:civil_engineer",
      "degree_id": "civil_engineering_bachelors",
      "profession_id": "civil_engineer",
      "degree_name": "Civil Engineering",
      "profession_name": "Civil Engineers",
      "degree_family": "Engineering",
      "profession_family": "Engineering",
      "soc_code": "17-2051.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "licensure_for_public_facing_work",
      "path_strength": "high",
      "confidence": 0.98,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Civil Engineers",
      "median_annual_wage_usd": 99590,
      "median_hourly_wage_usd": 47.88,
      "employment_count": 368900,
      "outlook_growth_pct": 5,
      "openings_annual": 23600,
      "avg_weekly_hours_estimate": 44,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "hands_on",
        "research"
      ],
      "interest_overlap": [
        "hands_on",
        "research"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 1,
        "people": 2,
        "hands_on": 3
      },
      "top_skills": [
        {
          "skill_id": "design",
          "skill_name": "Design",
          "skill_category": "knowledge",
          "importance_score": 4.7,
          "level_score": 5.95
        },
        {
          "skill_id": "engineering_and_technology",
          "skill_name": "Engineering and Technology",
          "skill_category": "knowledge",
          "importance_score": 4.67,
          "level_score": 6.43
        },
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.53,
          "level_score": 5.33
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Direct civil engineering path.",
      "degree_note": "Infrastructure-oriented engineering path with practical real-world demand.",
      "profession_note": "Most civil engineers work full time, and some work more than 40 hours per week. Strong infrastructure-linked career with durable demand, though project deadlines can stretch the workweek.",
      "grade_proxy_note": "A stronger fit for students comfortable with math, physics, and structured technical problem-solving.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/17-2051.00",
      "source_links": [
        {
          "source_id": "source:degree-field:civil_engineering_bachelors",
          "label": "Civil Engineering field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:civil_engineer",
          "label": "Civil Engineers OOH page",
          "url": "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:civil_engineer",
          "label": "Civil Engineers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/17-2051.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:civil_engineering_bachelors",
        "source:cip:crosswalk",
        "source:ooh:civil_engineer",
        "source:onet:civil_engineer",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:mechanical_engineering_bachelors:mechanical_engineer",
      "degree_id": "mechanical_engineering_bachelors",
      "profession_id": "mechanical_engineer",
      "degree_name": "Mechanical Engineering",
      "profession_name": "Mechanical Engineers",
      "degree_family": "Engineering",
      "profession_family": "Engineering",
      "soc_code": "17-2141.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "strong",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "licensure_for_public_facing_work",
      "path_strength": "high",
      "confidence": 0.98,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Mechanical Engineers",
      "median_annual_wage_usd": 102320,
      "median_hourly_wage_usd": 49.19,
      "employment_count": 293100,
      "outlook_growth_pct": 9,
      "openings_annual": 18100,
      "avg_weekly_hours_estimate": 44,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "hands_on",
        "research",
        "tech"
      ],
      "interest_overlap": [
        "hands_on",
        "research",
        "tech"
      ],
      "fit_scores": {
        "analytical": 5,
        "creative": 2,
        "people": 2,
        "hands_on": 3
      },
      "top_skills": [
        {
          "skill_id": "design",
          "skill_name": "Design",
          "skill_category": "knowledge",
          "importance_score": 4.5,
          "level_score": 6.04
        },
        {
          "skill_id": "engineering_and_technology",
          "skill_name": "Engineering and Technology",
          "skill_category": "knowledge",
          "importance_score": 4.46,
          "level_score": 5.65
        },
        {
          "skill_id": "production_and_processing",
          "skill_name": "Production and Processing",
          "skill_category": "knowledge",
          "importance_score": 4.34,
          "level_score": 4.49
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Direct mechanical engineering path.",
      "degree_note": "Broad engineering path tied to products, systems, manufacturing, and automation.",
      "profession_note": "Most mechanical engineers work full time, and some work more than 40 hours a week. Solid upside with broad industry relevance, but it demands stronger technical preparation than many students realize.",
      "grade_proxy_note": "Usually best for students with strong math/science readiness and durable technical curiosity.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/17-2141.00",
      "source_links": [
        {
          "source_id": "source:degree-field:mechanical_engineering_bachelors",
          "label": "Mechanical Engineering field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/engineering/engineering-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:mechanical_engineer",
          "label": "Mechanical Engineers OOH page",
          "url": "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:mechanical_engineer",
          "label": "Mechanical Engineers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/17-2141.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:mechanical_engineering_bachelors",
        "source:cip:crosswalk",
        "source:ooh:mechanical_engineer",
        "source:onet:mechanical_engineer",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:construction_management_bachelors:construction_manager",
      "degree_id": "construction_management_bachelors",
      "profession_id": "construction_manager",
      "degree_name": "Construction Management",
      "profession_name": "Construction Managers",
      "degree_family": "Trades",
      "profession_family": "Trades",
      "soc_code": "11-9021.00",
      "award_level": "bachelors",
      "pathway_type": "degree",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "solid",
      "cost_band": "medium",
      "entry_level_education": "bachelors",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.98,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Construction Managers",
      "median_annual_wage_usd": 106980,
      "median_hourly_wage_usd": 51.43,
      "employment_count": 554300,
      "outlook_growth_pct": 9,
      "openings_annual": 45400,
      "avg_weekly_hours_estimate": 48,
      "schedule_type": "extended",
      "boundary_quality": "moderate",
      "predictability": "low",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "job_zone": "4",
      "interest_tags": [
        "business",
        "hands_on"
      ],
      "interest_overlap": [
        "business",
        "hands_on"
      ],
      "fit_scores": {
        "analytical": 3,
        "creative": 1,
        "people": 3,
        "hands_on": 5
      },
      "top_skills": [
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.7,
          "level_score": 5.75
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 4.25,
          "level_score": 4.95
        },
        {
          "skill_id": "judgment_and_decision_making",
          "skill_name": "Judgment and Decision Making",
          "skill_category": "skill",
          "importance_score": 4.12,
          "level_score": 4.38
        }
      ],
      "tradeoff_summary": "Can fund the target lifestyle, but it usually asks for longer weeks or weaker boundaries.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Direct site and project leadership path.",
      "degree_note": "Operations-heavy path linked to jobsite leadership.",
      "profession_note": "Most construction managers work full time, and some work more than 40 hours per week. High pay with strong real-world demand, but schedules move with projects and deadlines.",
      "grade_proxy_note": "Good for students who want practical work and responsibility without a purely academic job.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/construction/construction-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/management/construction-managers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/11-9021.00",
      "source_links": [
        {
          "source_id": "source:degree-field:construction_management_bachelors",
          "label": "Construction Management field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/construction/construction-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:construction_manager",
          "label": "Construction Managers OOH page",
          "url": "https://www.bls.gov/ooh/management/construction-managers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:construction_manager",
          "label": "Construction Managers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/11-9021.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:construction_management_bachelors",
        "source:cip:crosswalk",
        "source:ooh:construction_manager",
        "source:onet:construction_manager",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:paralegal_associate:paralegal",
      "degree_id": "paralegal_associate",
      "profession_id": "paralegal",
      "degree_name": "Paralegal Studies",
      "profession_name": "Paralegals and Legal Assistants",
      "degree_family": "Legal",
      "profession_family": "Legal",
      "soc_code": "23-2011.00",
      "award_level": "associates",
      "pathway_type": "degree",
      "time_to_complete_years": 2,
      "estimated_total_training_years": 2,
      "academic_profile_min": "accessible",
      "cost_band": "low",
      "entry_level_education": "associates_or_certificate",
      "typical_training_years_post_hs": 2,
      "additional_training_required": "",
      "path_strength": "high",
      "confidence": 0.98,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Paralegals and Legal Assistants",
      "median_annual_wage_usd": 61010,
      "median_hourly_wage_usd": 29.33,
      "employment_count": 352700,
      "outlook_growth_pct": 1,
      "openings_annual": 37700,
      "avg_weekly_hours_estimate": 41,
      "schedule_type": "normal",
      "boundary_quality": "moderate",
      "predictability": "high",
      "ai_exposure": "high",
      "geographic_concentration": "regional",
      "physical_intensity": "low",
      "remote_friendliness": "medium",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "3",
      "interest_tags": [
        "business",
        "communication",
        "research"
      ],
      "interest_overlap": [
        "business",
        "communication",
        "research"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 4,
        "hands_on": 1
      },
      "top_skills": [
        {
          "skill_id": "law_and_government",
          "skill_name": "Law and Government",
          "skill_category": "knowledge",
          "importance_score": 4.78,
          "level_score": 4.87
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.42,
          "level_score": 4.88
        },
        {
          "skill_id": "administrative",
          "skill_name": "Administrative",
          "skill_category": "knowledge",
          "importance_score": 4.16,
          "level_score": 5.36
        }
      ],
      "tradeoff_summary": "A more balanced path where the tradeoffs are easier to explain than annual salary alone.",
      "reality_check": "This path may stay viable, but students should expect a lot of the routine work to be reshaped by AI.",
      "path_note": "Direct applied legal-support path.",
      "degree_note": "Applied legal-support pathway with direct office outcomes.",
      "profession_note": "Most paralegals and legal assistants work full time. A practical legal-services route with predictable office hours for many roles, but document-heavy work is exposed to AI and many higher-paying jobs cluster near bigger metros.",
      "grade_proxy_note": "A good fit for organized students who like language, detail, and structured client work more than abstract theory.",
      "field_of_degree_url": "https://www.bls.gov/ooh/field-of-degree/law-and-legal-studies/law-and-legal-studies-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm",
      "onet_url": "https://www.onetonline.org/link/summary/23-2011.00",
      "source_links": [
        {
          "source_id": "source:degree-field:paralegal_associate",
          "label": "Paralegal Studies field evidence",
          "url": "https://www.bls.gov/ooh/field-of-degree/law-and-legal-studies/law-and-legal-studies-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:paralegal",
          "label": "Paralegals and Legal Assistants OOH page",
          "url": "https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:paralegal",
          "label": "Paralegals and Legal Assistants O*NET profile",
          "url": "https://www.onetonline.org/link/summary/23-2011.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:paralegal_associate",
        "source:cip:crosswalk",
        "source:ooh:paralegal",
        "source:onet:paralegal",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:dental_hygiene_associate:dental_hygienist",
      "degree_id": "dental_hygiene_associate",
      "profession_id": "dental_hygienist",
      "degree_name": "Dental Hygiene",
      "profession_name": "Dental Hygienists",
      "degree_family": "Healthcare",
      "profession_family": "Healthcare",
      "soc_code": "29-1292.00",
      "award_level": "associates",
      "pathway_type": "degree",
      "time_to_complete_years": 3,
      "estimated_total_training_years": 3,
      "academic_profile_min": "accessible",
      "cost_band": "medium",
      "entry_level_education": "associates",
      "typical_training_years_post_hs": 3,
      "additional_training_required": "licensure",
      "path_strength": "high",
      "confidence": 0.99,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Dental Hygienists",
      "median_annual_wage_usd": 94260,
      "median_hourly_wage_usd": 45.32,
      "employment_count": 221600,
      "outlook_growth_pct": 7,
      "openings_annual": 15300,
      "avg_weekly_hours_estimate": 34,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "3",
      "interest_tags": [
        "healthcare",
        "helping_people"
      ],
      "interest_overlap": [
        "healthcare",
        "helping_people"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 4,
        "hands_on": 2
      },
      "top_skills": [
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 4.59,
          "level_score": 4.1
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 3.94,
          "level_score": 3.55
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.75,
          "level_score": 4.0
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "The route is reasonably direct, but the best outcomes still depend on execution, internships, or licensure.",
      "path_note": "Shorter healthcare route with direct licensure path.",
      "degree_note": "Shorter healthcare route with strong earnings and licensure.",
      "profession_note": "Many dental hygienists work part time, and some work for more than one dentist. One of the strongest shorter healthcare credentials for earnings and schedule quality.",
      "grade_proxy_note": "A good option for students wanting healthcare upside without the time and debt of medical school.",
      "field_of_degree_url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-1292.00",
      "source_links": [
        {
          "source_id": "source:degree-field:dental_hygiene_associate",
          "label": "Dental Hygiene field evidence",
          "url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:dental_hygienist",
          "label": "Dental Hygienists OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/dental-hygienists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:dental_hygienist",
          "label": "Dental Hygienists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-1292.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:dental_hygiene_associate",
        "source:cip:crosswalk",
        "source:ooh:dental_hygienist",
        "source:onet:dental_hygienist",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:radiologic_technology_associate:radiologic_technologist",
      "degree_id": "radiologic_technology_associate",
      "profession_id": "radiologic_technologist",
      "degree_name": "Radiologic Technology",
      "profession_name": "Radiologic Technologists",
      "degree_family": "Healthcare",
      "profession_family": "Healthcare",
      "soc_code": "29-2034.00",
      "award_level": "associates",
      "pathway_type": "degree",
      "time_to_complete_years": 2,
      "estimated_total_training_years": 2,
      "academic_profile_min": "accessible",
      "cost_band": "medium",
      "entry_level_education": "associates",
      "typical_training_years_post_hs": 2,
      "additional_training_required": "licensure_or_certification",
      "path_strength": "high",
      "confidence": 0.99,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Radiologic Technologists and Technicians",
      "median_annual_wage_usd": 77660,
      "median_hourly_wage_usd": 37.34,
      "employment_count": 228000,
      "outlook_growth_pct": 5,
      "openings_annual": 15400,
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "shift",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "regional",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "medium",
      "job_zone": "3",
      "interest_tags": [
        "hands_on",
        "healthcare"
      ],
      "interest_overlap": [
        "hands_on",
        "healthcare"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 4,
        "hands_on": 3
      },
      "top_skills": [
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 4.27,
          "level_score": 4.21
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.17,
          "level_score": 4.95
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 4.14,
          "level_score": 3.69
        }
      ],
      "tradeoff_summary": "The money may work, but your calendar is likely to be the real compromise.",
      "reality_check": "The real cost here is schedule control, not just training time.",
      "path_note": "Direct imaging technician path.",
      "degree_note": "Imaging-focused healthcare route with associate-degree entry.",
      "profession_note": "Most radiologic and MRI technologists work full time. Some work evenings, weekends, or overnight. Good technical-healthcare path with moderate pay, but hospitals may require off-hour coverage.",
      "grade_proxy_note": "A good fit for students who want healthcare work plus technical equipment and procedures.",
      "field_of_degree_url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-2034.00",
      "source_links": [
        {
          "source_id": "source:degree-field:radiologic_technology_associate",
          "label": "Radiologic Technology field evidence",
          "url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:radiologic_technologist",
          "label": "Radiologic Technologists OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:radiologic_technologist",
          "label": "Radiologic Technologists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-2034.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:radiologic_technology_associate",
        "source:cip:crosswalk",
        "source:ooh:radiologic_technologist",
        "source:onet:radiologic_technologist",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:respiratory_therapy_associate:respiratory_therapist",
      "degree_id": "respiratory_therapy_associate",
      "profession_id": "respiratory_therapist",
      "degree_name": "Respiratory Therapy",
      "profession_name": "Respiratory Therapists",
      "degree_family": "Healthcare",
      "profession_family": "Healthcare",
      "soc_code": "29-1126.00",
      "award_level": "associates",
      "pathway_type": "degree",
      "time_to_complete_years": 2,
      "estimated_total_training_years": 2,
      "academic_profile_min": "accessible",
      "cost_band": "medium",
      "entry_level_education": "associates",
      "typical_training_years_post_hs": 2,
      "additional_training_required": "licensure",
      "path_strength": "high",
      "confidence": 0.99,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Respiratory Therapists",
      "median_annual_wage_usd": 81430,
      "median_hourly_wage_usd": 39.15,
      "employment_count": 129000,
      "outlook_growth_pct": 13,
      "openings_annual": 9000,
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "shift",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "medium",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "high",
      "night_work_likelihood": "high",
      "job_zone": "3",
      "interest_tags": [
        "hands_on",
        "healthcare",
        "helping_people"
      ],
      "interest_overlap": [
        "hands_on",
        "healthcare",
        "helping_people"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 1,
        "people": 4,
        "hands_on": 3
      },
      "top_skills": [
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.33,
          "level_score": 5.67
        },
        {
          "skill_id": "medicine_and_dentistry",
          "skill_name": "Medicine and Dentistry",
          "skill_category": "knowledge",
          "importance_score": 4.29,
          "level_score": 4.55
        },
        {
          "skill_id": "english_language",
          "skill_name": "English Language",
          "skill_category": "knowledge",
          "importance_score": 3.9,
          "level_score": 3.95
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "The real cost here is schedule control, not just training time.",
      "path_note": "Direct respiratory-care licensure path.",
      "degree_note": "Shorter licensed healthcare route into breathing and critical-care support.",
      "profession_note": "Respiratory therapists may work nights, weekends, and holidays because medical facilities are always open. Strong licensed healthcare route with good demand, but hospital-based roles can mean night and weekend coverage.",
      "grade_proxy_note": "Good for students who want direct patient impact and can handle clinical environments without committing to medical school.",
      "field_of_degree_url": "https://www.bls.gov/ooh/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
      "ooh_url": "https://www.bls.gov/ooh/healthcare/respiratory-therapists.htm",
      "onet_url": "https://www.onetonline.org/link/summary/29-1126.00",
      "source_links": [
        {
          "source_id": "source:degree-field:respiratory_therapy_associate",
          "label": "Respiratory Therapy field evidence",
          "url": "https://www.bls.gov/ooh/healthcare-and-related/healthcare-and-related-field-of-degree.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Field-of-degree context comes from official BLS field-of-degree pages."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:respiratory_therapist",
          "label": "Respiratory Therapists OOH page",
          "url": "https://www.bls.gov/ooh/healthcare/respiratory-therapists.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:respiratory_therapist",
          "label": "Respiratory Therapists O*NET profile",
          "url": "https://www.onetonline.org/link/summary/29-1126.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:respiratory_therapy_associate",
        "source:cip:crosswalk",
        "source:ooh:respiratory_therapist",
        "source:onet:respiratory_therapist",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:electrician_apprenticeship:electrician",
      "degree_id": "electrician_apprenticeship",
      "profession_id": "electrician",
      "degree_name": "Electrician Apprenticeship",
      "profession_name": "Electricians",
      "degree_family": "Trades",
      "profession_family": "Trades",
      "soc_code": "47-2111.00",
      "award_level": "apprenticeship",
      "pathway_type": "trade",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "open",
      "cost_band": "low",
      "entry_level_education": "high_school_plus_apprenticeship",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "apprenticeship_completion_and_licensure",
      "path_strength": "high",
      "confidence": 0.99,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 62880,
      "median_hourly_wage_usd": 30.23,
      "employment_count": 779800,
      "outlook_growth_pct": 11,
      "openings_annual": 80400,
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "job_zone": "3",
      "interest_tags": [
        "hands_on"
      ],
      "interest_overlap": [
        "hands_on"
      ],
      "fit_scores": {
        "analytical": 1,
        "creative": 0,
        "people": 2,
        "hands_on": 5
      },
      "top_skills": [
        {
          "skill_id": "troubleshooting",
          "skill_name": "Troubleshooting",
          "skill_category": "skill",
          "importance_score": 4.0,
          "level_score": 4.0
        },
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 3.67,
          "level_score": 4.62
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 3.58,
          "level_score": 3.66
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "This route trades prestige signaling for faster entry, lower debt, and more location flexibility.",
      "path_note": "Primary skilled-trade path.",
      "degree_note": "Hands-on credential path with strong local demand and low AI exposure.",
      "profession_note": "Work schedules may include evenings and weekends and may vary during bad weather. Strong local demand and low AI risk, with a clearer end-of-day cutoff than many office jobs.",
      "grade_proxy_note": "More about reliability, spatial sense, and physical work than academic prestige.",
      "field_of_degree_url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
      "ooh_url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
      "onet_url": "https://www.onetonline.org/link/summary/47-2111.00",
      "source_links": [
        {
          "source_id": "source:degree-field:electrician_apprenticeship",
          "label": "Electrician Apprenticeship field evidence",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:ooh:electrician",
          "label": "Electricians OOH page",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:electrician",
          "label": "Electricians O*NET profile",
          "url": "https://www.onetonline.org/link/summary/47-2111.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:electrician_apprenticeship",
        "source:ooh:electrician",
        "source:onet:electrician",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:carpentry_apprenticeship:carpenter",
      "degree_id": "carpentry_apprenticeship",
      "profession_id": "carpenter",
      "degree_name": "Carpentry Apprenticeship",
      "profession_name": "Carpenters",
      "degree_family": "Trades",
      "profession_family": "Trades",
      "soc_code": "47-2031.00",
      "award_level": "apprenticeship",
      "pathway_type": "trade",
      "time_to_complete_years": 3,
      "estimated_total_training_years": 3,
      "academic_profile_min": "open",
      "cost_band": "low",
      "entry_level_education": "high_school_plus_apprenticeship",
      "typical_training_years_post_hs": 3,
      "additional_training_required": "apprenticeship_completion_and_licensure",
      "path_strength": "high",
      "confidence": 0.98,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Carpenters",
      "median_annual_wage_usd": 61220,
      "median_hourly_wage_usd": 29.43,
      "employment_count": 899500,
      "outlook_growth_pct": 4,
      "openings_annual": 45600,
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "job_zone": "2",
      "interest_tags": [
        "hands_on"
      ],
      "interest_overlap": [
        "hands_on"
      ],
      "fit_scores": {
        "analytical": 1,
        "creative": 0,
        "people": 2,
        "hands_on": 5
      },
      "top_skills": [
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.66,
          "level_score": 5.56
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 3.91,
          "level_score": 4.24
        },
        {
          "skill_id": "administration_and_management",
          "skill_name": "Administration and Management",
          "skill_category": "knowledge",
          "importance_score": 3.91,
          "level_score": 3.83
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "This route trades prestige signaling for faster entry, lower debt, and more location flexibility.",
      "path_note": "Primary carpentry pathway.",
      "degree_note": "Skilled construction pathway into residential and commercial building work.",
      "profession_note": "Carpenters usually work full time and may work evenings or weekends to meet deadlines. Durable local work with tangible output and a clearer end-of-day boundary than many office careers, though the job is physically demanding and weather-sensitive.",
      "grade_proxy_note": "Often a better fit for students who want practical output, visible progress, and lower debt.",
      "field_of_degree_url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
      "ooh_url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
      "onet_url": "https://www.onetonline.org/link/summary/47-2031.00",
      "source_links": [
        {
          "source_id": "source:degree-field:carpentry_apprenticeship",
          "label": "Carpentry Apprenticeship field evidence",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:carpenter",
          "label": "Carpenters OOH page",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:carpenter",
          "label": "Carpenters O*NET profile",
          "url": "https://www.onetonline.org/link/summary/47-2031.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:carpentry_apprenticeship",
        "source:cip:crosswalk",
        "source:ooh:carpenter",
        "source:onet:carpenter",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:plumbing_apprenticeship:plumber",
      "degree_id": "plumbing_apprenticeship",
      "profession_id": "plumber",
      "degree_name": "Plumbing Apprenticeship",
      "profession_name": "Plumbers",
      "degree_family": "Trades",
      "profession_family": "Trades",
      "soc_code": "47-2152.00",
      "award_level": "apprenticeship",
      "pathway_type": "trade",
      "time_to_complete_years": 4,
      "estimated_total_training_years": 4,
      "academic_profile_min": "open",
      "cost_band": "low",
      "entry_level_education": "high_school_plus_apprenticeship",
      "typical_training_years_post_hs": 4,
      "additional_training_required": "apprenticeship_completion_and_licensure",
      "path_strength": "high",
      "confidence": 0.99,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Plumbers, Pipefitters, and Steamfitters",
      "median_annual_wage_usd": 62970,
      "median_hourly_wage_usd": 30.27,
      "employment_count": 504500,
      "outlook_growth_pct": 4,
      "openings_annual": 44000,
      "avg_weekly_hours_estimate": 44,
      "schedule_type": "irregular",
      "boundary_quality": "strong",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "high",
      "night_work_likelihood": "low",
      "job_zone": "3",
      "interest_tags": [
        "hands_on"
      ],
      "interest_overlap": [
        "hands_on"
      ],
      "fit_scores": {
        "analytical": 1,
        "creative": 0,
        "people": 2,
        "hands_on": 5
      },
      "top_skills": [
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.35,
          "level_score": 5.36
        },
        {
          "skill_id": "mechanical",
          "skill_name": "Mechanical",
          "skill_category": "knowledge",
          "importance_score": 4.33,
          "level_score": 4.86
        },
        {
          "skill_id": "design",
          "skill_name": "Design",
          "skill_category": "knowledge",
          "importance_score": 3.76,
          "level_score": 5.05
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "This route trades prestige signaling for faster entry, lower debt, and more location flexibility.",
      "path_note": "Primary skilled-trade path with paid training.",
      "degree_note": "Skilled trade route with strong local demand and apprenticeship-first entry.",
      "profession_note": "Most plumbers, pipefitters, and steamfitters work full time, including nights and weekends, and they are often on call to handle emergencies. Great paid-training path with local durability, but emergency work can disrupt evenings and weekends.",
      "grade_proxy_note": "A strong path for students who want paid training and durable local work.",
      "field_of_degree_url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
      "ooh_url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
      "onet_url": "https://www.onetonline.org/link/summary/47-2152.00",
      "source_links": [
        {
          "source_id": "source:degree-field:plumbing_apprenticeship",
          "label": "Plumbing Apprenticeship field evidence",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:plumber",
          "label": "Plumbers OOH page",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:plumber",
          "label": "Plumbers O*NET profile",
          "url": "https://www.onetonline.org/link/summary/47-2152.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:plumbing_apprenticeship",
        "source:cip:crosswalk",
        "source:ooh:plumber",
        "source:onet:plumber",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:hvac_certificate:hvac_technician",
      "degree_id": "hvac_certificate",
      "profession_id": "hvac_technician",
      "degree_name": "HVAC Technology",
      "profession_name": "HVAC Technicians",
      "degree_family": "Trades",
      "profession_family": "Trades",
      "soc_code": "49-9021.00",
      "award_level": "certificate",
      "pathway_type": "trade",
      "time_to_complete_years": 1,
      "estimated_total_training_years": 1,
      "academic_profile_min": "open",
      "cost_band": "low",
      "entry_level_education": "postsecondary_nondegree_or_apprenticeship",
      "typical_training_years_post_hs": 1,
      "additional_training_required": "certificate_or_apprenticeship",
      "path_strength": "high",
      "confidence": 0.96,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Heating, Air Conditioning, and Refrigeration Mechanics and Installers",
      "median_annual_wage_usd": 59810,
      "median_hourly_wage_usd": 28.75,
      "employment_count": 441200,
      "outlook_growth_pct": 8,
      "openings_annual": 40100,
      "avg_weekly_hours_estimate": 43,
      "schedule_type": "irregular",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "low",
      "job_zone": "3",
      "interest_tags": [
        "hands_on",
        "tech"
      ],
      "interest_overlap": [
        "hands_on",
        "tech"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 0,
        "people": 2,
        "hands_on": 5
      },
      "top_skills": [
        {
          "skill_id": "mechanical",
          "skill_name": "Mechanical",
          "skill_category": "knowledge",
          "importance_score": 4.67,
          "level_score": 5.93
        },
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 4.18,
          "level_score": 4.97
        },
        {
          "skill_id": "customer_and_personal_service",
          "skill_name": "Customer and Personal Service",
          "skill_category": "knowledge",
          "importance_score": 4.03,
          "level_score": 4.85
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "This route trades prestige signaling for faster entry, lower debt, and more location flexibility.",
      "path_note": "Fast route into HVAC technician work.",
      "degree_note": "Technical trade path into heating, cooling, and refrigeration systems.",
      "profession_note": "Work may include evening or weekend hours, especially during peak repair seasons. Strong practical route with decent pay and low AI exposure, but schedule control depends on service demand.",
      "grade_proxy_note": "Often a good fit for students who like diagnostic problem-solving and practical systems work.",
      "field_of_degree_url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
      "ooh_url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/49-9021.00",
      "source_links": [
        {
          "source_id": "source:degree-field:hvac_certificate",
          "label": "HVAC Technology field evidence",
          "url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:hvac_technician",
          "label": "HVAC Technicians OOH page",
          "url": "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:hvac_technician",
          "label": "HVAC Technicians O*NET profile",
          "url": "https://www.onetonline.org/link/summary/49-9021.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:hvac_certificate",
        "source:cip:crosswalk",
        "source:ooh:hvac_technician",
        "source:onet:hvac_technician",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:welding_certificate:welder",
      "degree_id": "welding_certificate",
      "profession_id": "welder",
      "degree_name": "Welding Technology",
      "profession_name": "Welder",
      "degree_family": "Trades",
      "profession_family": "Trades",
      "soc_code": "51-4121.00",
      "award_level": "certificate",
      "pathway_type": "trade",
      "time_to_complete_years": 1,
      "estimated_total_training_years": 1,
      "academic_profile_min": "open",
      "cost_band": "low",
      "entry_level_education": "high_school_plus_certificate",
      "typical_training_years_post_hs": 1,
      "additional_training_required": "certificate_or_union_training",
      "path_strength": "high",
      "confidence": 0.96,
      "crosswalk_match": true,
      "crosswalk_onet_title": "Welders, Cutters, Solderers, and Brazers",
      "median_annual_wage_usd": 51890,
      "median_hourly_wage_usd": 24.95,
      "employment_count": 418200,
      "outlook_growth_pct": 2,
      "openings_annual": 43800,
      "avg_weekly_hours_estimate": 42,
      "schedule_type": "shift",
      "boundary_quality": "moderate",
      "predictability": "medium",
      "ai_exposure": "medium",
      "geographic_concentration": "regional",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "medium",
      "night_work_likelihood": "medium",
      "job_zone": "2",
      "interest_tags": [
        "hands_on",
        "tech"
      ],
      "interest_overlap": [
        "hands_on",
        "tech"
      ],
      "fit_scores": {
        "analytical": 2,
        "creative": 0,
        "people": 1,
        "hands_on": 5
      },
      "top_skills": [
        {
          "skill_id": "production_and_processing",
          "skill_name": "Production and Processing",
          "skill_category": "knowledge",
          "importance_score": 3.49,
          "level_score": 3.36
        },
        {
          "skill_id": "quality_control_analysis",
          "skill_name": "Quality Control Analysis",
          "skill_category": "skill",
          "importance_score": 3.12,
          "level_score": 3.0
        },
        {
          "skill_id": "mechanical",
          "skill_name": "Mechanical",
          "skill_category": "knowledge",
          "importance_score": 3.1,
          "level_score": 3.18
        }
      ],
      "tradeoff_summary": "The money may work, but your calendar is likely to be the real compromise.",
      "reality_check": "This route trades prestige signaling for faster entry, lower debt, and more location flexibility.",
      "path_note": "Fast fabrication and industrial trades path.",
      "degree_note": "Fast route into fabrication, manufacturing, and industrial repair work.",
      "profession_note": "Welders, cutters, solderers, and brazers usually work full time, and some work shifts. Fast route into skilled industrial work with lower debt and lower AI pressure than many office jobs, but the work is physically intense and some plants run off-hours.",
      "grade_proxy_note": "A good fit for students who want a practical skilled path with shorter training and visible output.",
      "field_of_degree_url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
      "ooh_url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
      "onet_url": "https://www.onetonline.org/link/summary/51-4121.00",
      "source_links": [
        {
          "source_id": "source:degree-field:welding_certificate",
          "label": "Welding Technology field evidence",
          "url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:cip:crosswalk",
          "label": "2020 CIP to O*NET-SOC crosswalk",
          "url": "https://www.onetcenter.org/crosswalks.html",
          "source_type": "dataset",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Education-to-career links use the official 2020 CIP to O*NET-SOC crosswalk where available."
        },
        {
          "source_id": "source:ooh:welder",
          "label": "Welder OOH page",
          "url": "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:welder",
          "label": "Welder O*NET profile",
          "url": "https://www.onetonline.org/link/summary/51-4121.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:welding_certificate",
        "source:cip:crosswalk",
        "source:ooh:welder",
        "source:onet:welder",
        "source:overlay:heuristics"
      ]
    },
    {
      "path_id": "path:tile_setting_certificate:tile_stone_setter",
      "degree_id": "tile_setting_certificate",
      "profession_id": "tile_stone_setter",
      "degree_name": "Tile Setting Certificate",
      "profession_name": "Tile and Stone Setters",
      "degree_family": "Trades",
      "profession_family": "Trades",
      "soc_code": "47-2044.00",
      "award_level": "certificate",
      "pathway_type": "trade",
      "time_to_complete_years": 1,
      "estimated_total_training_years": 1,
      "academic_profile_min": "open",
      "cost_band": "low",
      "entry_level_education": "postsecondary_nondegree_or_apprenticeship",
      "typical_training_years_post_hs": 1,
      "additional_training_required": "certificate_or_apprenticeship",
      "path_strength": "high",
      "confidence": 0.9,
      "crosswalk_match": false,
      "crosswalk_onet_title": "",
      "median_annual_wage_usd": 60360,
      "median_hourly_wage_usd": 29.02,
      "employment_count": 23400,
      "outlook_growth_pct": 5,
      "openings_annual": 2300,
      "avg_weekly_hours_estimate": 40,
      "schedule_type": "normal",
      "boundary_quality": "strong",
      "predictability": "high",
      "ai_exposure": "low",
      "geographic_concentration": "local_anywhere",
      "physical_intensity": "high",
      "remote_friendliness": "low",
      "weekend_work_likelihood": "low",
      "night_work_likelihood": "low",
      "job_zone": "2",
      "interest_tags": [
        "hands_on"
      ],
      "interest_overlap": [
        "hands_on"
      ],
      "fit_scores": {
        "analytical": 1,
        "creative": 0,
        "people": 1,
        "hands_on": 5
      },
      "top_skills": [
        {
          "skill_id": "building_and_construction",
          "skill_name": "Building and Construction",
          "skill_category": "knowledge",
          "importance_score": 3.97,
          "level_score": 3.88
        },
        {
          "skill_id": "mathematics",
          "skill_name": "Mathematics",
          "skill_category": "knowledge",
          "importance_score": 3.35,
          "level_score": 3.27
        },
        {
          "skill_id": "active_listening",
          "skill_name": "Active Listening",
          "skill_category": "skill",
          "importance_score": 3.12,
          "level_score": 3.0
        }
      ],
      "tradeoff_summary": "More geographically flexible and less exposed to AI, with a grounded day-to-day tradeoff.",
      "reality_check": "This route trades prestige signaling for faster entry, lower debt, and more location flexibility.",
      "path_note": "Primary skilled craft path.",
      "degree_note": "Hands-on craft path with visible tangible output and strong boundary potential.",
      "profession_note": "Most flooring installers and tile and stone setters work full time. Physically demanding, but often easier to protect evenings and weekends than in elite knowledge-work tracks.",
      "grade_proxy_note": "Portfolio of work and craft skill matter more than academic ranking.",
      "field_of_degree_url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
      "ooh_url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
      "onet_url": "https://www.onetonline.org/link/summary/47-2044.00",
      "source_links": [
        {
          "source_id": "source:degree-field:tile_setting_certificate",
          "label": "Tile Setting Certificate field evidence",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
          "source_type": "field_of_degree",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:ooh:tile_stone_setter",
          "label": "Tile and Stone Setters OOH page",
          "url": "https://www.bls.gov/ooh/construction-and-extraction/tile-and-marble-setters.htm",
          "source_type": "occupation_outlook",
          "publisher": "BLS",
          "note": "Occupation wages, outlook, and quick facts come from BLS Occupational Outlook Handbook pages accessed on March 12, 2026."
        },
        {
          "source_id": "source:onet:tile_stone_setter",
          "label": "Tile and Stone Setters O*NET profile",
          "url": "https://www.onetonline.org/link/summary/47-2044.00",
          "source_type": "occupation_profile",
          "publisher": "O*NET / U.S. Department of Labor",
          "note": "Skills, knowledge, interests, and work-context values come from the O*NET 30.2 database."
        },
        {
          "source_id": "source:overlay:heuristics",
          "label": "Student-facing lifestyle overlay",
          "url": "",
          "source_type": "heuristic_overlay",
          "publisher": "Education Outcome Map prototype",
          "note": "Boundary quality, AI exposure, and geographic concentration combine O*NET work-context data with manual interpretation to stay useful for students."
        }
      ],
      "source_ids": [
        "source:degree-field:tile_setting_certificate",
        "source:ooh:tile_stone_setter",
        "source:onet:tile_stone_setter",
        "source:overlay:heuristics"
      ]
    }
  ],
  "graph": {
    "nodes": [
      {
        "id": "cs_bachelors",
        "label": "Computer Science",
        "type": "degree",
        "group": "Technology"
      },
      {
        "id": "cybersecurity_bachelors",
        "label": "Cybersecurity",
        "type": "degree",
        "group": "Technology"
      },
      {
        "id": "mis_bachelors",
        "label": "Management Information Systems",
        "type": "degree",
        "group": "Business Technology"
      },
      {
        "id": "nursing_bachelors",
        "label": "Registered Nursing",
        "type": "degree",
        "group": "Healthcare"
      },
      {
        "id": "healthcare_admin_bachelors",
        "label": "Healthcare Administration",
        "type": "degree",
        "group": "Healthcare"
      },
      {
        "id": "finance_bachelors",
        "label": "Finance",
        "type": "degree",
        "group": "Business"
      },
      {
        "id": "economics_bachelors",
        "label": "Economics",
        "type": "degree",
        "group": "Business"
      },
      {
        "id": "accounting_bachelors",
        "label": "Accounting",
        "type": "degree",
        "group": "Business"
      },
      {
        "id": "marketing_bachelors",
        "label": "Marketing",
        "type": "degree",
        "group": "Business"
      },
      {
        "id": "graphic_design_bachelors",
        "label": "Graphic Design",
        "type": "degree",
        "group": "Design"
      },
      {
        "id": "ux_design_bachelors",
        "label": "Web and Digital Experience Design",
        "type": "degree",
        "group": "Design"
      },
      {
        "id": "communications_bachelors",
        "label": "Communications",
        "type": "degree",
        "group": "Communication"
      },
      {
        "id": "secondary_education_bachelors",
        "label": "Secondary Education",
        "type": "degree",
        "group": "Education"
      },
      {
        "id": "psychology_bachelors",
        "label": "Psychology",
        "type": "degree",
        "group": "Social Science"
      },
      {
        "id": "social_work_bachelors",
        "label": "Social Work",
        "type": "degree",
        "group": "Social Service"
      },
      {
        "id": "biology_bachelors",
        "label": "Biology",
        "type": "degree",
        "group": "Science"
      },
      {
        "id": "civil_engineering_bachelors",
        "label": "Civil Engineering",
        "type": "degree",
        "group": "Engineering"
      },
      {
        "id": "mechanical_engineering_bachelors",
        "label": "Mechanical Engineering",
        "type": "degree",
        "group": "Engineering"
      },
      {
        "id": "construction_management_bachelors",
        "label": "Construction Management",
        "type": "degree",
        "group": "Trades"
      },
      {
        "id": "paralegal_associate",
        "label": "Paralegal Studies",
        "type": "degree",
        "group": "Legal"
      },
      {
        "id": "dental_hygiene_associate",
        "label": "Dental Hygiene",
        "type": "degree",
        "group": "Healthcare"
      },
      {
        "id": "radiologic_technology_associate",
        "label": "Radiologic Technology",
        "type": "degree",
        "group": "Healthcare"
      },
      {
        "id": "respiratory_therapy_associate",
        "label": "Respiratory Therapy",
        "type": "degree",
        "group": "Healthcare"
      },
      {
        "id": "electrician_apprenticeship",
        "label": "Electrician Apprenticeship",
        "type": "degree",
        "group": "Trades"
      },
      {
        "id": "carpentry_apprenticeship",
        "label": "Carpentry Apprenticeship",
        "type": "degree",
        "group": "Trades"
      },
      {
        "id": "plumbing_apprenticeship",
        "label": "Plumbing Apprenticeship",
        "type": "degree",
        "group": "Trades"
      },
      {
        "id": "hvac_certificate",
        "label": "HVAC Technology",
        "type": "degree",
        "group": "Trades"
      },
      {
        "id": "welding_certificate",
        "label": "Welding Technology",
        "type": "degree",
        "group": "Trades"
      },
      {
        "id": "tile_setting_certificate",
        "label": "Tile Setting Certificate",
        "type": "degree",
        "group": "Trades"
      },
      {
        "id": "software_developer",
        "label": "Software Developers",
        "type": "profession",
        "group": "Technology"
      },
      {
        "id": "information_security_analyst",
        "label": "Information Security Analysts",
        "type": "profession",
        "group": "Technology"
      },
      {
        "id": "data_scientist",
        "label": "Data Scientists",
        "type": "profession",
        "group": "Technology"
      },
      {
        "id": "computer_systems_analyst",
        "label": "Computer Systems Analysts",
        "type": "profession",
        "group": "Technology"
      },
      {
        "id": "registered_nurse",
        "label": "Registered Nurses",
        "type": "profession",
        "group": "Healthcare"
      },
      {
        "id": "medical_health_services_manager",
        "label": "Medical and Health Services Managers",
        "type": "profession",
        "group": "Healthcare"
      },
      {
        "id": "high_school_teacher",
        "label": "High School Teachers",
        "type": "profession",
        "group": "Education"
      },
      {
        "id": "accountant",
        "label": "Accountants and Auditors",
        "type": "profession",
        "group": "Business"
      },
      {
        "id": "financial_analyst",
        "label": "Financial and Investment Analysts",
        "type": "profession",
        "group": "Business"
      },
      {
        "id": "management_analyst",
        "label": "Management Analysts",
        "type": "profession",
        "group": "Business"
      },
      {
        "id": "market_research_analyst",
        "label": "Market Research Analysts",
        "type": "profession",
        "group": "Business"
      },
      {
        "id": "graphic_designer",
        "label": "Graphic Designers",
        "type": "profession",
        "group": "Design"
      },
      {
        "id": "web_digital_interface_designer",
        "label": "Web and Digital Interface Designers",
        "type": "profession",
        "group": "Design"
      },
      {
        "id": "public_relations_specialist",
        "label": "Public Relations Specialists",
        "type": "profession",
        "group": "Communication"
      },
      {
        "id": "electrician",
        "label": "Electricians",
        "type": "profession",
        "group": "Trades"
      },
      {
        "id": "plumber",
        "label": "Plumbers",
        "type": "profession",
        "group": "Trades"
      },
      {
        "id": "hvac_technician",
        "label": "HVAC Technicians",
        "type": "profession",
        "group": "Trades"
      },
      {
        "id": "tile_stone_setter",
        "label": "Tile and Stone Setters",
        "type": "profession",
        "group": "Trades"
      },
      {
        "id": "construction_manager",
        "label": "Construction Managers",
        "type": "profession",
        "group": "Trades"
      },
      {
        "id": "physician",
        "label": "Physicians and Surgeons",
        "type": "profession",
        "group": "Healthcare"
      },
      {
        "id": "economist",
        "label": "Economists",
        "type": "profession",
        "group": "Research"
      },
      {
        "id": "biological_technician",
        "label": "Biological Technicians",
        "type": "profession",
        "group": "Science"
      },
      {
        "id": "civil_engineer",
        "label": "Civil Engineers",
        "type": "profession",
        "group": "Engineering"
      },
      {
        "id": "mechanical_engineer",
        "label": "Mechanical Engineers",
        "type": "profession",
        "group": "Engineering"
      },
      {
        "id": "social_worker",
        "label": "Social Workers",
        "type": "profession",
        "group": "Social Service"
      },
      {
        "id": "paralegal",
        "label": "Paralegals and Legal Assistants",
        "type": "profession",
        "group": "Legal"
      },
      {
        "id": "dental_hygienist",
        "label": "Dental Hygienists",
        "type": "profession",
        "group": "Healthcare"
      },
      {
        "id": "radiologic_technologist",
        "label": "Radiologic Technologists",
        "type": "profession",
        "group": "Healthcare"
      },
      {
        "id": "respiratory_therapist",
        "label": "Respiratory Therapists",
        "type": "profession",
        "group": "Healthcare"
      },
      {
        "id": "carpenter",
        "label": "Carpenters",
        "type": "profession",
        "group": "Trades"
      },
      {
        "id": "welder",
        "label": "Welder",
        "type": "profession",
        "group": "Trades"
      },
      {
        "id": "active_listening",
        "label": "Active Listening",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "critical_thinking",
        "label": "Critical Thinking",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "instructing",
        "label": "Instructing",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "judgment_and_decision_making",
        "label": "Judgment and Decision Making",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "management_of_personnel_resources",
        "label": "Management of Personnel Resources",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "mathematics",
        "label": "Mathematics",
        "type": "skill",
        "group": "knowledge"
      },
      {
        "id": "monitoring",
        "label": "Monitoring",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "operations_monitoring",
        "label": "Operations Monitoring",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "programming",
        "label": "Programming",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "quality_control_analysis",
        "label": "Quality Control Analysis",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "reading_comprehension",
        "label": "Reading Comprehension",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "repairing",
        "label": "Repairing",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "social_perceptiveness",
        "label": "Social Perceptiveness",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "speaking",
        "label": "Speaking",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "troubleshooting",
        "label": "Troubleshooting",
        "type": "skill",
        "group": "skill"
      },
      {
        "id": "writing",
        "label": "Writing",
        "type": "skill",
        "group": "skill"
      }
    ],
    "links": [
      {
        "source": "cs_bachelors",
        "target": "software_developer",
        "type": "leads_to"
      },
      {
        "source": "cs_bachelors",
        "target": "information_security_analyst",
        "type": "leads_to"
      },
      {
        "source": "mis_bachelors",
        "target": "computer_systems_analyst",
        "type": "leads_to"
      },
      {
        "source": "mis_bachelors",
        "target": "management_analyst",
        "type": "leads_to"
      },
      {
        "source": "cybersecurity_bachelors",
        "target": "information_security_analyst",
        "type": "leads_to"
      },
      {
        "source": "nursing_bachelors",
        "target": "registered_nurse",
        "type": "leads_to"
      },
      {
        "source": "healthcare_admin_bachelors",
        "target": "medical_health_services_manager",
        "type": "leads_to"
      },
      {
        "source": "finance_bachelors",
        "target": "financial_analyst",
        "type": "leads_to"
      },
      {
        "source": "finance_bachelors",
        "target": "management_analyst",
        "type": "leads_to"
      },
      {
        "source": "economics_bachelors",
        "target": "economist",
        "type": "leads_to"
      },
      {
        "source": "economics_bachelors",
        "target": "management_analyst",
        "type": "leads_to"
      },
      {
        "source": "accounting_bachelors",
        "target": "accountant",
        "type": "leads_to"
      },
      {
        "source": "accounting_bachelors",
        "target": "financial_analyst",
        "type": "leads_to"
      },
      {
        "source": "marketing_bachelors",
        "target": "market_research_analyst",
        "type": "leads_to"
      },
      {
        "source": "graphic_design_bachelors",
        "target": "graphic_designer",
        "type": "leads_to"
      },
      {
        "source": "graphic_design_bachelors",
        "target": "web_digital_interface_designer",
        "type": "leads_to"
      },
      {
        "source": "ux_design_bachelors",
        "target": "web_digital_interface_designer",
        "type": "leads_to"
      },
      {
        "source": "ux_design_bachelors",
        "target": "graphic_designer",
        "type": "leads_to"
      },
      {
        "source": "communications_bachelors",
        "target": "public_relations_specialist",
        "type": "leads_to"
      },
      {
        "source": "secondary_education_bachelors",
        "target": "high_school_teacher",
        "type": "leads_to"
      },
      {
        "source": "psychology_bachelors",
        "target": "social_worker",
        "type": "leads_to"
      },
      {
        "source": "psychology_bachelors",
        "target": "physician",
        "type": "leads_to"
      },
      {
        "source": "social_work_bachelors",
        "target": "social_worker",
        "type": "leads_to"
      },
      {
        "source": "biology_bachelors",
        "target": "biological_technician",
        "type": "leads_to"
      },
      {
        "source": "biology_bachelors",
        "target": "physician",
        "type": "leads_to"
      },
      {
        "source": "civil_engineering_bachelors",
        "target": "civil_engineer",
        "type": "leads_to"
      },
      {
        "source": "mechanical_engineering_bachelors",
        "target": "mechanical_engineer",
        "type": "leads_to"
      },
      {
        "source": "construction_management_bachelors",
        "target": "construction_manager",
        "type": "leads_to"
      },
      {
        "source": "paralegal_associate",
        "target": "paralegal",
        "type": "leads_to"
      },
      {
        "source": "dental_hygiene_associate",
        "target": "dental_hygienist",
        "type": "leads_to"
      },
      {
        "source": "radiologic_technology_associate",
        "target": "radiologic_technologist",
        "type": "leads_to"
      },
      {
        "source": "respiratory_therapy_associate",
        "target": "respiratory_therapist",
        "type": "leads_to"
      },
      {
        "source": "electrician_apprenticeship",
        "target": "electrician",
        "type": "leads_to"
      },
      {
        "source": "carpentry_apprenticeship",
        "target": "carpenter",
        "type": "leads_to"
      },
      {
        "source": "plumbing_apprenticeship",
        "target": "plumber",
        "type": "leads_to"
      },
      {
        "source": "hvac_certificate",
        "target": "hvac_technician",
        "type": "leads_to"
      },
      {
        "source": "welding_certificate",
        "target": "welder",
        "type": "leads_to"
      },
      {
        "source": "tile_setting_certificate",
        "target": "tile_stone_setter",
        "type": "leads_to"
      },
      {
        "source": "software_developer",
        "target": "programming",
        "type": "requires"
      },
      {
        "source": "software_developer",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "software_developer",
        "target": "judgment_and_decision_making",
        "type": "requires"
      },
      {
        "source": "information_security_analyst",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "information_security_analyst",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "information_security_analyst",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "computer_systems_analyst",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "computer_systems_analyst",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "computer_systems_analyst",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "registered_nurse",
        "target": "social_perceptiveness",
        "type": "requires"
      },
      {
        "source": "registered_nurse",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "registered_nurse",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "medical_health_services_manager",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "medical_health_services_manager",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "medical_health_services_manager",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "high_school_teacher",
        "target": "instructing",
        "type": "requires"
      },
      {
        "source": "high_school_teacher",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "high_school_teacher",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "accountant",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "accountant",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "accountant",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "management_analyst",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "management_analyst",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "management_analyst",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "market_research_analyst",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "market_research_analyst",
        "target": "writing",
        "type": "requires"
      },
      {
        "source": "market_research_analyst",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "graphic_designer",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "graphic_designer",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "graphic_designer",
        "target": "writing",
        "type": "requires"
      },
      {
        "source": "public_relations_specialist",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "public_relations_specialist",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "public_relations_specialist",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "electrician",
        "target": "troubleshooting",
        "type": "requires"
      },
      {
        "source": "electrician",
        "target": "repairing",
        "type": "requires"
      },
      {
        "source": "electrician",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "plumber",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "plumber",
        "target": "troubleshooting",
        "type": "requires"
      },
      {
        "source": "plumber",
        "target": "repairing",
        "type": "requires"
      },
      {
        "source": "hvac_technician",
        "target": "operations_monitoring",
        "type": "requires"
      },
      {
        "source": "hvac_technician",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "hvac_technician",
        "target": "troubleshooting",
        "type": "requires"
      },
      {
        "source": "tile_stone_setter",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "tile_stone_setter",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "tile_stone_setter",
        "target": "mathematics",
        "type": "requires"
      },
      {
        "source": "construction_manager",
        "target": "judgment_and_decision_making",
        "type": "requires"
      },
      {
        "source": "construction_manager",
        "target": "management_of_personnel_resources",
        "type": "requires"
      },
      {
        "source": "construction_manager",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "physician",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "physician",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "physician",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "economist",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "economist",
        "target": "mathematics",
        "type": "requires"
      },
      {
        "source": "economist",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "biological_technician",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "biological_technician",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "biological_technician",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "civil_engineer",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "civil_engineer",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "civil_engineer",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "mechanical_engineer",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "mechanical_engineer",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "mechanical_engineer",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "social_worker",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "social_worker",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "social_worker",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "paralegal",
        "target": "writing",
        "type": "requires"
      },
      {
        "source": "paralegal",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "paralegal",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "dental_hygienist",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "dental_hygienist",
        "target": "speaking",
        "type": "requires"
      },
      {
        "source": "dental_hygienist",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "radiologic_technologist",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "radiologic_technologist",
        "target": "social_perceptiveness",
        "type": "requires"
      },
      {
        "source": "radiologic_technologist",
        "target": "reading_comprehension",
        "type": "requires"
      },
      {
        "source": "respiratory_therapist",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "respiratory_therapist",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "respiratory_therapist",
        "target": "monitoring",
        "type": "requires"
      },
      {
        "source": "carpenter",
        "target": "active_listening",
        "type": "requires"
      },
      {
        "source": "carpenter",
        "target": "critical_thinking",
        "type": "requires"
      },
      {
        "source": "carpenter",
        "target": "monitoring",
        "type": "requires"
      },
      {
        "source": "welder",
        "target": "quality_control_analysis",
        "type": "requires"
      },
      {
        "source": "welder",
        "target": "monitoring",
        "type": "requires"
      },
      {
        "source": "welder",
        "target": "critical_thinking",
        "type": "requires"
      }
    ]
  },
  "graph_export_file": "./data/grc20-compatible-graph.json"
};

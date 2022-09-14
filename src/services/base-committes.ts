import imgeOne from "../assets/committes/membership-committee .jpg";
import imgeTwo from "../assets/committes/mesothelioma-committee.jpg";
import imgeThree from "../assets/committes/nurses-and-allied-health-professional-committee.jpg";
import imgeFour from "../assets/committes/patient-advocacy-committee.jpg";
import imgeFive from "../assets/committes/screening-and-early-detection-committee.jpg";
import imgeSix from "../assets/committes/staging-and-prognostic-factors-committee.jpg";

export let commites = [
  {
    firstImg: imgeOne,
    title: "Membership Committee",
    desc: "Led by Dr. Nan Wu of Peking University Cancer Hospital & Institute in China, this committee emphasizes the benefits that make the IASLC a great value for thoracic oncology professionals and fosters relationships with new members from around the globe.",
    link: " ",
    id: 1,
    video: "https://www.youtube.com/embed/SVnl7WPLQSw",
  },
  {
    firstImg: imgeTwo,
    title: "Mesothelioma Committee ",
    desc: "Dr. Paul Bass of the Netherlands Cancer Institute is the new Chair of the Mesothelioma Committee. This Passionate group is driven to accelerate the pace of research and work across geographies to develop strategic research goals and to bring the disease to the forefront of research. In recent years, the have been several research updates in mesothelioma-many of which were spearheaded by members of this committee. ",
    id: 2,
    link: " ",
    video: "https://www.youtube.com/embed/g8b3-zsj6Mk",
  },
  {
    firstImg: imgeThree,
    title: "Nurses and Allied Health Professional Committee ",
    desc: "Chaired by Dr. Maria Ftanou of Peter MacCallum Cancer Center in Australia, this committee is comprised of members of the multidisciplinary team, including: clinical nurse specialists, dieticians and nutritionists, lung cancer nurse specialists, nurse navigators, occupational therapists, palliative care nurses, pharmacists, physician assistants, physiotherapists, radiation oncology nurses, respiratory therapists, psychologists, social workers, speech and language therapists, surgical nursing specialists, and others.",
    id: 3,
    link: " ",
    video: "https://www.youtube.com/embed/T4iGHtM_280",
  },
  {
    firstImg: imgeFour,
    title: "Patient Advocacy Committee ",
    desc: "The IASLC and the Patient Advocacy Committee, welcomes Chair, Jill Feldman of the U.S.-Based EGFR Resisters. Jill is committed to diversity and equity and plans to guide the committee to improve the global reach of the IASLC. This committee addresses the direct impact research has on its beneficiaries; patients with lung cancer, and how they can support continued research to improve treatment options and availability. ",
    id: 4,
    link: " ",
    video: "https://www.youtube.com/embed/Dm7lFbb46-A",
  },
  {
    firstImg: imgeFive,
    title: "Screening and Early Detection Committee ",
    desc: "The IASLC Screening and Early Detection Committee advance screening and early detection programs through education and research across the globe. Led by Dr. Stephen Lam of the BC Cancer Center in Canada, this multidisciplinary group is composed of leaders from radiology, thoracic surgery, pulmonary medicine, medical oncology, nursing, basic science, and advocacy organizations from North America, Europe, Asia, South America, and Africa. ",
    id: 5,
    link: " ",
    video: "https://www.youtube.com/embed/2cn0MJ6B4hc",
  },
  {
    firstImg: imgeSix,
    title: "Staging and Prognostic Factors Committee ",
    desc: "Staging lung cancer and other thoracic malignancies accurately is critical in deciding treatment regimens and ensuring the best standardized care for patients worldwide. The IASLC's Staging & Prognostic Factors Committee, chaired by Dr. Hisao Asamura, of Keio University School of Medicine in Japan, actively works to study and improve the current staging system for lung cancer, as well as for thymic, esophageal cancers and mesothelioma. ",
    id: 6,
    link: " ",
    video: "https://www.youtube.com/embed/x37Av1cIewI",
  },
];

// let objectIdOne = -1;
let commitesId = -1;

export function getcommitesData() {
  return commites;
}

export function setcommites(param: number) {
  commitesId = param;
}

export function getcommites() {
  for (let i = 0; i < commites.length; i++) {
    if (commitesId === commites[i].id) {
      return commites[i];
    }
  }
}

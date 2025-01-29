import style from "./faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Faq = () => {
  return (
    <div className={style.faqWrapper}>
      <h4 className={style.heading}>FAQs</h4>
      <div className={style.faqSection}>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={style.icon}/>}
            aria-controls="panel1-content"
            id="panel1-header"
            className={style.panelHeader}
          >
            <Typography component="span">Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={style.icon}/>}
            aria-controls="panel2-content"
            id="panel2-header"
            className={style.panelHeader}
          >
            <Typography component="span">
              Can I download and listen to songs offline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            Sorry, unfortunately we dont provide the service to download any
            songs.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;

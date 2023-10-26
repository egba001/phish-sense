import PropTypes from "prop-types"
const ResultOverlay = ({ res, setIsOpen }) => {
    return (
        <div className="absolute flex items-center justify-center h-screen z-40 w-full bg-white/[.6] top-0 left-0">
            <div className="w-full h-full absolute" onClick={() => setIsOpen(false)}></div>
            <div className="w-[90%] bg-white px-10 z-50 rounded-xl border border-gray-500 py-8 lg:w-[40%]">
                <p><span className="font-bold text-[18px] mr-4 mb-4 text-blue">Link:</span>{res.url}</p>
                <div><span className="font-bold text-[18px] mr-4 text-blue">AI Prediction:</span>{res.security_checks.ai_flagged === false ? <span className="text-green-500 font-bold text-[18px]">Secure</span> : <span className="text-red-500 text-[18px] font-bold">Warning: Insecure</span>}</div>
                {/* <p><span className="font-bold text-[18px] mr-4 text-blue">URL:</span>{res.security_checks.url_flagged === false ? <span className="text-green-500 font-bold text-[18px]">Secure</span> : <p className="text-red-500 font-bold text-[18px]">Warning: Insecure</p>}</p> */}
                <p><span className="font-semibold capitalize text-2xl text-dark">Risk Score:  </span>{res.risk_score}</p>
                <div className="bg-blue rounded-xl px-8 py-4 w-fit text-white cursor-pointer mt-8 text-center" onClick={() => setIsOpen(false)}>
                    Done
                </div>
            </div>
        </div>
    )
}

ResultOverlay.propTypes = {
  res: PropTypes.shape({
    risk_score: PropTypes.any,
    security_checks: PropTypes.shape({
      ai_flagged: PropTypes.bool,
      domain_flagged: PropTypes.bool,
      url_flagged: PropTypes.bool
    }),
    url: PropTypes.any
  })
}
export default ResultOverlay;
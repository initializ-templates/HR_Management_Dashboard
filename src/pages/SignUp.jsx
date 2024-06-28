// import { Link } from "react-router-dom";
import AuthPagesWrapper from "../components/AuthPagesWrapper";
import Button from "../components/Button";
import InputBoxAnimLabel from "../components/InputBoxAnimLabel";

function SignUp() {
  return (
    <AuthPagesWrapper>
      {/* <div
        className="logo"
        style={{
          marginBottom: "4.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
          columnGap: "4.5rem",
        }}
      >
        <svg
          style={{ width: "auto", height: 80 }}
          viewBox="0 0 88 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8853 2.39423C12.8853 1.06942 13.9636 0 15.2994 0C16.6352 0 17.7135 1.06942 17.7135 2.39423C17.7135 3.71904 16.6352 4.78846 15.2994 4.78846C13.9636 4.78846 12.8853 3.71904 12.8853 2.39423ZM32.1981 9.57692V15.1635L30.5404 15.7221C30.4049 16.6727 29.9283 17.543 29.1982 18.1733C28.468 18.8037 27.5332 19.1518 26.5652 19.1538H26.4364C26.2111 20.2392 25.68 21.2129 24.9558 21.995V31.9231H20.9323V23.9423H20.5299C20.1919 23.9423 19.854 23.8944 19.5321 23.8465L12.3863 22.6654L10.5838 25.8737L11.7909 31.9231H7.703L6.44766 25.9375C6.39938 25.4587 6.44766 24.9798 6.70517 24.5648L8.34676 21.6758C7.54788 21.235 6.87848 20.5955 6.4044 19.8203C5.93032 19.045 5.6679 18.1608 5.64296 17.2544C5.57859 17.4938 5.5464 17.845 5.59468 18.3558C5.64296 19.0581 5.82 20.0956 5.70734 21.2448C5.64296 22.394 5.11186 23.5752 4.43591 24.3573C3.74387 25.1394 2.98745 25.6821 2.18275 26.0971L1.05617 24.9798C1.36196 24.2296 1.66774 23.5592 1.73212 22.9367C1.82868 22.3462 1.71603 21.8673 1.53899 21.4363L0.68601 19.6327C0.348036 18.8187 -0.0704083 17.6375 0.0100617 16.2488C0.0583438 14.8921 0.814762 13.1204 2.24713 12.1467C3.69559 11.1731 5.25671 11.0294 6.52813 11.3008C7.33283 11.4604 8.15363 11.8435 8.86176 12.3862C9.45724 12.1148 10.1493 11.9712 10.8735 11.9712H11.2759V9.7525C11.2759 8.15635 12.3703 6.68789 13.9475 6.4325C14.4095 6.35344 14.8834 6.37546 15.336 6.49702C15.7886 6.61858 16.209 6.83674 16.5677 7.13624C16.9264 7.43574 17.2148 7.80935 17.4127 8.23093C17.6106 8.65251 17.7133 9.11189 17.7135 9.57692V11.9712H20.1276V11.1731C20.1276 7.64558 23.0084 4.78846 26.5652 4.78846H32.1981L30.7657 6.92731C31.6348 7.50192 32.1981 8.47558 32.1981 9.57692ZM28.9793 14.6846L27.3055 12.035C27.0963 11.6998 26.5652 11.8435 26.5652 12.2425V17.5577C27.901 17.5577 28.9793 16.4883 28.9793 15.1635V14.6846Z"
            fill="#E25319"
          />
          <path
            d="M32.6479 23.8077H33.9742C34.044 23.8077 34.0906 23.8538 34.0906 23.9V31.7923C34.0906 31.8385 34.044 31.8846 33.9742 31.8846H32.6479C32.5781 31.8846 32.5316 31.8385 32.5316 31.7923V28.5962H29.4485V31.7923C29.4485 31.8385 29.402 31.8846 29.3322 31.8846H28.0059C27.9361 31.8846 27.8895 31.8385 27.8895 31.7923V23.9C27.8895 23.8538 27.9361 23.8077 28.0059 23.8077H29.3322C29.402 23.8077 29.4485 23.8538 29.4485 23.9V27.0846H32.5316V23.9C32.5316 23.8538 32.5781 23.8077 32.6479 23.8077Z"
            fill="white"
          />
          <path
            d="M41.6941 31.8846H40.1351C40.1002 31.8846 40.042 31.8615 40.0304 31.8385L37.9828 28.5962H37.4127V31.7923C37.4127 31.8385 37.3661 31.8846 37.2963 31.8846H35.97C35.9002 31.8846 35.8537 31.8385 35.8537 31.7923V27.1885C35.8537 27.1423 35.9002 27.0962 35.97 27.0962H37.052C36.6565 26.4846 36.2493 25.8385 35.8537 25.2269V23.9C35.8537 23.8538 35.9002 23.8077 35.97 23.8077H38.6226C38.6226 23.8077 41.3916 23.8077 41.3916 26.1962C41.3916 27.6154 40.4725 28.1808 39.6814 28.4231L41.7755 31.7462C41.8221 31.8154 41.7755 31.8846 41.6941 31.8846ZM37.6454 25.3077L38.7739 27.0846C39.216 27.0731 39.8326 26.8885 39.8326 26.1962C39.8326 25.3077 38.8902 25.3077 38.6226 25.3077H37.6454Z"
            fill="white"
          />
          <path
            d="M49.2916 32C47.8489 31.9654 46.7088 31.1346 46.6855 29.6115C46.6855 29.5654 46.7321 29.5192 46.8019 29.5192H48.1282C48.1863 29.5192 48.2445 29.5654 48.2445 29.6115C48.2678 30.2 48.7564 30.5 49.2916 30.5C49.85 30.5 50.3387 30.1308 50.3387 29.5769C50.3387 28.9654 49.7686 28.5962 49.2916 28.5731C49.2218 28.5731 48.6517 28.5731 48.0467 28.2962C47.1742 27.8923 46.6855 27.1654 46.6855 26.1962C46.6855 24.6385 47.9537 23.6923 49.2916 23.6923C50.7226 23.6923 51.8395 24.65 51.8628 26.0577C51.8628 26.0923 51.8162 26.1385 51.7464 26.1385H50.4317C50.3736 26.1385 50.3154 26.0923 50.3154 26.0577C50.2921 25.4692 49.8384 25.1923 49.2916 25.1923C48.7215 25.1923 48.2445 25.5269 48.2445 26.1962C48.2445 26.7962 48.7564 27.1077 49.2916 27.1077C49.3498 27.1077 49.9315 27.1077 50.5248 27.3846C51.409 27.7885 51.886 28.6077 51.886 29.5769C51.886 31.1346 50.6295 32 49.2916 32Z"
            fill="white"
          />
          <path
            d="M58.68 25.2731H54.8407V27.1423H58.0169C58.0867 27.1423 58.1216 27.1885 58.1216 27.2346V28.4923C58.1216 28.5385 58.0867 28.5846 58.0169 28.5846H54.8407V30.4308H58.68C58.7498 30.4308 58.7964 30.4769 58.7964 30.5231V31.7923C58.7964 31.8385 58.7498 31.8846 58.68 31.8846H53.4097C53.3516 31.8846 53.305 31.8385 53.305 31.7923V23.9C53.305 23.8538 53.3516 23.8077 53.4097 23.8077H58.68C58.7498 23.8077 58.7964 23.8538 58.7964 23.9V25.1808C58.7964 25.2269 58.7498 25.2731 58.68 25.2731Z"
            fill="white"
          />
          <path
            d="M64.2748 31.8269L63.9374 30.9731H61.2965L60.9823 31.8269C60.9707 31.8615 60.9242 31.8846 60.8776 31.8846H59.4466C59.3536 31.8846 59.307 31.8269 59.3419 31.7577L62.5181 23.6346C62.553 23.5538 62.6926 23.5538 62.7275 23.6346L65.9036 31.7577C65.9385 31.8269 65.892 31.8846 65.8105 31.8846H64.3679C64.333 31.8846 64.2865 31.8615 64.2748 31.8269ZM62.6228 27.1885L61.7967 29.6115H63.4372L62.6228 27.1885Z"
            fill="white"
          />
          <path
            d="M70.6886 31.8269L69.1995 28.6192H68.3269V31.7923C68.3269 31.8385 68.2804 31.8846 68.2106 31.8846H66.8843C66.8261 31.8846 66.7795 31.8385 66.7795 31.7923V23.9C66.7795 23.8538 66.8261 23.8077 66.8843 23.8077H69.5136C69.979 23.8077 72.2709 23.8308 72.2709 26.2077C72.2709 27.4423 71.5845 28.0885 70.7701 28.3769C71.282 29.5192 71.8288 30.6269 72.3407 31.7577C72.3756 31.8269 72.3291 31.8846 72.2476 31.8846H70.7934C70.7585 31.8846 70.7003 31.85 70.6886 31.8269ZM68.3269 25.2731V27.1423H69.5136C69.851 27.1423 70.7235 27.0962 70.7235 26.2077C70.7235 25.3192 69.7579 25.2731 69.5136 25.2731H68.3269Z"
            fill="white"
          />
          <path
            d="M77.5602 30.5115C78.2466 30.5115 78.8749 30.2346 79.3402 29.7731C79.3868 29.7385 79.4566 29.7385 79.5031 29.7731L80.4222 30.6962C80.4688 30.7308 80.4688 30.8 80.4222 30.8346C79.7009 31.55 78.6887 32 77.5602 32C75.3264 32 73.4882 30.3962 73.4882 27.8808C73.4882 25.4692 75.1752 23.6923 77.5602 23.6923C78.6887 23.6923 79.7009 24.1308 80.4222 24.8577C80.4688 24.8923 80.4688 24.9615 80.4222 24.9962L79.5031 25.9077C79.4566 25.9423 79.3868 25.9423 79.3402 25.9077C78.8749 25.4577 78.2466 25.1692 77.5602 25.1692C76.0012 25.1692 75.0588 26.3577 75.0588 27.8808C75.0588 29.5077 76.1757 30.5115 77.5602 30.5115Z"
            fill="white"
          />
          <path
            d="M86.569 23.8077H87.8953C87.9535 23.8077 88 23.8538 88 23.9V31.7923C88 31.8385 87.9535 31.8846 87.8953 31.8846H86.569C86.4992 31.8846 86.4527 31.8385 86.4527 31.7923V28.5154H83.4045V31.7923C83.4045 31.8385 83.3579 31.8846 83.2881 31.8846H81.9735C81.9037 31.8846 81.8571 31.8385 81.8571 31.7923V23.9C81.8571 23.8538 81.9037 23.8077 81.9735 23.8077H83.2881C83.3579 23.8077 83.4045 23.8538 83.4045 23.9V27.05H86.4527V23.9C86.4527 23.8538 86.4992 23.8077 86.569 23.8077Z"
            fill="white"
          />
        </svg>
      </div> */}
      <h3>Welcome</h3>
      <p style={{ marginBottom: "2rem" }}>
        <small>Please Sign Up Here</small>
      </p>
      <form style={{ display: "grid", gap: "1.5rem" }}>
        <InputBoxAnimLabel
          label="Email Address"
          placeholder="abcdefg@gmail.com"
        />
        <InputBoxAnimLabel
          label="Password"
          placeholder="xxxxxxxxx"
          type="password"
        />
        <Button variant="accent" style={{ width: "100%", marginTop: "1.5rem" }}>
          Sign Up
        </Button>
      </form>
    </AuthPagesWrapper>
  );
}

export default SignUp;

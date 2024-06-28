function UploadFile({ title = "" }) {
  return (
    <div style={{ fontSize: "90%", cursor: "pointer" }}>
      <p>{title}</p>
      <label
        htmlFor="upload"
        className="card card--accent"
        style={{
          marginTop: "1rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: ".75rem",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--clr-accent)",
            width: "fit-content",
            margin: "auto",
            padding: ".75rem",
            borderRadius: "var(--size--sm)",
          }}
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.2247 4.5579C5.98063 4.80198 5.98063 5.19771 6.22471 5.44178C6.46879 5.68586 6.86451 5.68586 7.10859 5.44178L9.37495 3.1754L9.37495 13.3332C9.37495 13.6784 9.65477 13.9582 9.99995 13.9582C10.3451 13.9582 10.6249 13.6784 10.6249 13.3332L10.6249 3.17538L12.8914 5.44178C13.1355 5.68586 13.5312 5.68586 13.7753 5.44178C14.0193 5.1977 14.0193 4.80197 13.7753 4.5579L10.4419 1.22456C10.3247 1.10735 10.1657 1.0415 9.99995 1.0415C9.83419 1.0415 9.67522 1.10735 9.55801 1.22456L6.2247 4.5579ZM5.28316 7.89078C5.49905 7.62146 5.45574 7.22811 5.18642 7.01221C4.91709 6.79631 4.52374 6.83962 4.30784 7.10894C3.30724 8.35716 2.70831 9.94275 2.70831 11.6665C2.70831 15.6936 5.9729 18.9582 9.99998 18.9582C14.0271 18.9582 17.2916 15.6936 17.2916 11.6665C17.2916 9.94275 16.6927 8.35716 15.6921 7.10894C15.4762 6.83962 15.0829 6.79631 14.8135 7.01221C14.5442 7.22811 14.5009 7.62146 14.7168 7.89078C15.546 8.92523 16.0416 10.2371 16.0416 11.6665C16.0416 15.0032 13.3367 17.7082 9.99998 17.7082C6.66326 17.7082 3.95831 15.0032 3.95831 11.6665C3.95831 10.2371 4.45391 8.92523 5.28316 7.89078Z"
              fill="white"
            />
          </svg>
        </div>
        <p>
          Drag & Drop or <span>choose file</span> to upload
        </p>
        <p>
          <small>Supported formats: Jpeg, pdf</small>
        </p>
      </label>
      <input style={{ display: "none" }} type="file" id="upload" />
    </div>
  );
}

export default UploadFile;
